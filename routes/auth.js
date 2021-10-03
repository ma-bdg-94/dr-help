import express from 'express'
import config from 'config'
import { check, oneOf, validationResult } from 'express-validator'
import { compare, genSalt, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

// import models and middleware
import authenticated from '../middleware/authenticated'
import User from '../models/User'

const router = express.Router()

// #desc: claim user data // #method: GET // #access: private
router.get('/', authenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }],
    })
  }
})

// #desc: sign in user // #method: POST // #access: public
router.post(
  '/',
  [
    oneOf([
      check('email')
        .not()
        .isEmpty()
        .withMessage('Required Field! Must Include Your Email Address')
        .isEmail()
        .withMessage('Wrong Email Format!'),
      check('phone')
        .not()
        .isEmpty()
        .withMessage('Required Field! Must Include Your Phone Number')
        .isMobilePhone()
        .withMessage('Wrong Phone Number Format!'),
    ]),
    check('password')
      .exists()
      .withMessage('Required Field! Must Include A Secret Number'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      email,
      phone,
      password,
    } = req.body

    try {
      let user = await User.findOne({ $or: [{ email }, { phone }] })

      if (!user) {
        return res.status(400).json({
          errors: [{ msg: 'Inexisting User With Those Credentials!' }],
        })
      }

      const passwordMatch = await compare(password, user.password)
      if (!passwordMatch) {
        return res.status(400).json({
          errors: [{ msg: 'Inexisting User With Those Credentials!' }],
        })
      }

      const payload = {
        user: {
          id: user.id,
        },
      }

      sign(
        payload,
        config.get('jwt-secret'),
        {
          expiresIn: 7200000,
        },
        (error, token) => {
          if (error) throw error
          res.json({ token })
        },
      )
    } catch (er) {
      console.error(er.message)
      res.status(500).json({
        errors: [{ msg: 'Server Error!' }],
      })
    }
  },
)

export default router
