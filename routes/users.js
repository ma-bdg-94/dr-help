import express from 'express'
import config from 'config'
import { check, validationResult } from 'express-validator'
import { url } from 'gravatar'
import { genSalt, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

// import models and middleware
import User from '../models/User'

const router = express.Router()

// test route
router.get('/test', (req, res) => res.send('User route'))

// #desc: sign up new user // #method: POST // #access: public
router.post(
  '/',
  [
    check('firstName', 'Required Field! Must Include Your First Name')
      .not()
      .isEmpty(),
    check('lastName', 'Required Field! Must Include Your Family Name')
      .not()
      .isEmpty(),
    check('academicTitle')
      .not()
      .isEmpty()
      .withMessage('Required Field! Must Include Your Academic Title')
      .isIn([
        'Professor',
        'Principal Lecturer',
        'Senior Lecturer',
        'Clinical Lecturer',
        'Lecturer',
        'Assistant Lecturer',
        'Professorial Research Fellow',
        'Reader',
        'Senior Research Fellow',
        'Research Fellow',
        'Research Assistant',
        'Principal Technologist',
        'Departmental Coordinator',
        'Senior Chief Technologist',
        'Lab Coordinator',
        'Chief Technician',
        'Senior Technician',
        'Advanced Technician',
        'Technician',
        'Junior Technician',
        'Trainee Technician',
        'Senior Tutor',
        'Professional Teaching Fellow',
        'Senior Teaching Fellow',
        'Teaching Fellow',
        'Teaching Associate',
        'PostDoc Fellow',
        'Doctorate Student',
        'Graduate Student',
        'Undergraduate Student',
      ])
      .withMessage('Must Include A Valid Academic Title!'),
    check(
      'institution',
      'Required Field! Must Include Your Current Institution',
    )
      .not()
      .isEmpty(),
    check(
      'institutionCountry',
      'Required Field! Must Include Your Current Institution Nationality',
    )
      .not()
      .isEmpty(),
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
    check('password')
      .not()
      .isEmpty()
      .withMessage('Required Field! Must Include A Secret Number')
      .isNumeric()
      .withMessage(
        'Wrong Format! Must Include At Least 10 Digits (Only Numbers!)',
      )
      .isLength({ min: 10 })
      .withMessage(
        'Wrong Format! Must Include At Least 10 Digits (Only Numbers!)',
      ),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      firstName,
      lastName,
      academicTitle,
      institution,
      institutionCountry,
      email,
      phone,
      password,
    } = req.body

    try {
      let user = await User.findOne({ $or: [{ email }, { phone }] })

      if (user) {
        return res.status(400).json({
          errors: [{ msg: 'Already Existing User With Those Credentials!' }],
        })
      }

      const avatar = url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      })

      user = new User({
        firstName,
        lastName,
        academicTitle,
        institution,
        institutionCountry,
        email,
        phone,
        password,
        avatar,
      })

      const salt = await genSalt(10)
      user.password = await hash(password, salt)

      await user.save()

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
