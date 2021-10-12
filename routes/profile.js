import express from 'express'
import { check, validationResult } from 'express-validator'

// import models and middleware
import authenticated from '../middleware/authenticated'
import Profile from '../models/Profile'
import User from '../models/User'

const router = express.Router()

// test route
router.get('/test', (req, res) => res.send('User route'))

// --- add, read, update & remove profile core data ---
// #desc: create profile // #method: POST // #access: private
router.post(
  '/',
  [
    authenticated,
    [
      check('focusArea', 'Required Field! Must Include Your Research Area')
        .not()
        .isEmpty(),
      check('subject', 'Required Field! Must Include Your Subject')
        .not()
        .isEmpty(),
      check('bio', 'Required Field! Must Include A Biography')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { focusArea, subject, bio } = req.body

    const newProfile = {
      owner: req.user.id,
      focusArea,
      subject,
      bio
    }

    try {
      let profile = await Profile.findOne({ owner: req.user.id })

      if (profile) {
        return res.status(400).json({
          errors: [{ msg: 'Already Existing Profile For This User!' }]
        })
      }

      profile = new Profile(newProfile)
      await profile.save()
      res.json(profile)
    } catch (er) {
      console.error(er.message)
      res.status(500).json({
        errors: [{ msg: 'Server Error!' }]
      })
    }
  }
)

// #desc: get current user profile // #method: GET // #access: private
router.get('/current', authenticated, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      owner: req.user.id
    }).populate('owner', [
      'firstName',
      'lastName',
      'academicTitle',
      'institution',
      'institutionCountry',
      'avatar'
    ])

    if (!profile) {
      return res.status(404).json({
        errors: [{ msg: 'No Profile Found For This User!' }]
      })
    }

    res.json(profile)
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

// #desc: get all user profiles // #method: GET // #access: public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('owner', [
      'firstName',
      'lastName',
      'academicTitle',
      'institution',
      'institutionCountry',
      'avatar'
    ])

    res.json(profiles)
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

// #desc: get profile by user id // #method: GET // #access: public
router.get('/user/:userId', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      owner: req.params.userId
    }).populate('owner', [
      'firstName',
      'lastName',
      'academicTitle',
      'institution',
      'institutionCountry',
      'avatar'
    ])

    if (!profile) {
      return res.status(400).json({
        errors: [{ msg: 'No Profile Found For This User!' }]
      })
    }

    res.json(profile)
  } catch (er) {
    console.error(er.message)

    if (er.kind === 'ObjectId') {
      return res.status(404).json({
        errors: [{ msg: 'No Profile Found For This User!' }]
      })
    }

    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

// #desc: update profile // #method: PUT // #access: private
router.put('/', authenticated, async (req, res) => {
  const { focusArea, subject, bio } = req.body

  // build an object for profile fields
  const fields = {}
  fields.owner = req.user.id
  if (focusArea) fields.focusArea = focusArea
  if (subject) fields.subject = subject
  if (bio) fields.bio = bio

  try {
    let profile = await Profile.findOne({ owner: req.user.id })

    if (!profile) {
      return res.status(404).json({
        errors: [{ msg: 'No Profile Found For This User!' }]
      })
    }

    profile = await Profile.findOneAndUpdate(
      { owner: req.user.id },
      { $set: fields },
      { new: true }
    )

    res.json(profile)
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

// #desc: reset profile // #method: DELETE // #access: private
router.delete('/reset', authenticated, async (req, res) => {
  try {
    await Profile.findOneAndDelete({ owner: req.user.id })
    res.json({ msg: 'Reset Profile Was Successful! Create Another One' })
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

// #desc: remove user & profile // #method: DELETE // #access: private
router.delete('/', authenticated, async (req, res) => {
  try {
    await Profile.findOneAndDelete({ owner: req.user.id })
    await User.findOneAndDelete({ _id: req.user.id })
    res.json({ msg: 'Successfully Quit The Service!' })
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

// --- add, update & remove profile education data ---
// #desc: add education // #method: POST // #access: private
router.post(
  '/edu',
  [
    authenticated,
    [
      check('degree', 'Required Field! Must Include Your degree')
        .not()
        .isEmpty(),
      check(
        'speciality',
        'Required Field! Must Include Your Speciality Or Field'
      )
        .not()
        .isEmpty(),
      check('dateBegin')
        .not()
        .isEmpty()
        .withMessage(
          'Required Field! Must Include The Start Date Of The Course'
        )
        .isDate()
        .withMessage('Wrong Date Format'),
      check('university', 'Required Field! Must Include Your University')
        .not()
        .isEmpty(),
      check(
        'universityCountry',
        "Required Field! Must Include Your The University's Nationality"
      )
        .not()
        .isEmpty(),
      check(
        'department',
        'Required Field! Must Include The Faculty Or Department'
      )
        .not()
        .isEmpty(),
      check(
        'desc',
        'Required Field! Must Include A Little Description Of The Course Including Main Subjects And Options'
      )
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      degree,
      speciality,
      subSpeciality,
      dateBegin,
      dateEnd,
      currentlyStudying,
      university,
      universityCountry,
      department,
      desc
    } = req.body

    const newEducation = {
      degree,
      speciality,
      subSpeciality,
      dateBegin,
      dateEnd,
      currentlyStudying,
      university,
      universityCountry,
      department,
      desc
    }

    try {
      let profile = await Profile.findOne({ owner: req.user.id })

      if (!profile) {
        return res.status(404).json({
          errors: [{ msg: 'No Profile Found For This User!' }]
        })
      }

      profile.education.push(newEducation)
      await profile.save()
      res.json(profile)
    } catch (er) {
      console.error(er.message)
      res.status(500).json({
        errors: [{ msg: 'Server Error!' }]
      })
    }
  }
)

// #desc: update education // #method: PUT // #access: private
router.put('/edu/:eduId', authenticated, async (req, res) => {
  const {
    degree,
    speciality,
    subSpeciality,
    dateBegin,
    dateEnd,
    currentlyStudying,
    university,
    universityCountry,
    department,
    desc
  } = req.body

  // build an object for education fields
  const eduFields = {}
  if (degree) eduFields.degree = degree
  if (speciality) eduFields.speciality = speciality
  if (subSpeciality) eduFields.subSpeciality = subSpeciality
  if (dateBegin) eduFields.dateBegin = dateBegin
  if (dateEnd) eduFields.dateEnd = dateEnd
  if (currentlyStudying) eduFields.currentlyStudying = currentlyStudying
  if (university) eduFields.university = university
  if (universityCountry) eduFields.universityCountry = universityCountry
  if (department) eduFields.department = department
  if (desc) eduFields.desc = desc

  try {
    const profile = await Profile.findOne({ owner: req.user.id })

    if (!profile) {
      return res.status(404).json({
        errors: [{ msg: 'No Profile Found For This User!' }]
      })
    }

    // verify user
    if (profile.owner.toString() !== req.user.id) {
      return res.status(401).json({
        errors: [{ msg: 'Not Authorized!' }]
      })
    }

    // extract the index of the education to be updated
    const updIndex = profile.education
      .map(el => el.id)
      .indexOf(req.params.eduId)

    if (!profile.education[updIndex]) {
      return res.status(404).json({
        errors: [{ msg: 'No Education Found!' }]
      })
    }

    profile.education[updIndex] = eduFields
    await profile.save()
    res.json(profile)
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

// #desc: remove education // #method: DELETE // #access: private
router.delete('/edu/:eduId', authenticated, async (req, res) => {
  try {
    const profile = await Profile.findOne({ owner: req.user.id })

    if (!profile) {
      return res.status(404).json({
        errors: [{ msg: 'No Profile Found For This User!' }]
      })
    }

    // verify user
    if (profile.owner !== req.user.id) {
      return res.status(401).json({
        errors: [{ msg: 'Not Authorized!' }]
      })
    }

    // extract the index of the education to be removed
    const remIndex = profile.education
      .map(el => el.id)
      .indexOf(req.params.eduId)

    if (!profile.education[remIndex]) {
      return res.status(404).json({
        errors: [{ msg: 'No Education Found!' }]
      })
    }

    profile.education.splice(remIndex, 1)
    await profile.save()
    res.json(profile)
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

// --- add, update & remove profile works data ---
// #desc: add work // #method: POST // #access: private
router.post(
  '/works',
  [
    authenticated,
    [
      check('subject', 'Required Field! Must Include Your Research Subject')
        .not()
        .isEmpty(),
      check('position', 'Required Field! Must Include Your Position')
        .not()
        .isEmpty(),
      check('dateBegin')
        .not()
        .isEmpty()
        .withMessage(
          'Required Field! Must Include The Start Date Of The Project Or Research'
        )
        .isDate()
        .withMessage('Wrong Date Format'),
      check('institution', 'Required Field! Must Include Your Affiliation')
        .not()
        .isEmpty(),
      check(
        'title',
        'Required Field! Must Include A Title For Research Or Project'
      )
        .not()
        .isEmpty(),
      check(
        'summary',
        'Required Field! Must Include A Summary For Your Research Or Project'
      )
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      subject,
      position,
      institution,
      dateBegin,
      dateEnd,
      currentlyWorking,
      title,
      summary
    } = req.body

    const newWork = {
      subject,
      position,
      institution,
      dateBegin,
      dateEnd,
      currentlyWorking,
      title,
      summary
    }

    try {
      let profile = await Profile.findOne({ owner: req.user.id })

      if (!profile) {
        return res.status(404).json({
          errors: [{ msg: 'No Profile Found For This User!' }]
        })
      }

      profile.works.push(newWork)
      await profile.save()
      res.json(profile)
    } catch (er) {
      console.error(er.message)
      res.status(500).json({
        errors: [{ msg: 'Server Error!' }]
      })
    }
  }
)

// #desc: update work // #method: PUT // #access: private
router.put('/works/:workId', authenticated, async (req, res) => {
  const {
    subject,
    position,
    institution,
    dateBegin,
    dateEnd,
    currentlyWorking,
    title,
    summary
  } = req.body

  // build an object for work fields
  const workFields = {}
  if (subject) workFields.subject = subject
  if (position) workFields.position = position
  if (institution) workFields.institution = institution
  if (dateBegin) workFields.dateBegin = dateBegin
  if (dateEnd) workFields.dateEnd = dateEnd
  if (currentlyWorking) workFields.currentlyWorking = currentlyWorking
  if (title) workFields.title = title
  if (summary) workFields.summary = summary

  try {
    const profile = await Profile.findOne({ owner: req.user.id })

    if (!profile) {
      return res.status(404).json({
        errors: [{ msg: 'No Profile Found For This User!' }]
      })
    }

    if (profile.owner.toString() !== req.user.id) {
      return res.status(401).json({
        errors: [{ msg: 'Not Authorized!' }]
      })
    }

    const updIndex = profile.works
      .map(item => item.id)
      .indexOf(req.params.workId)

    if (!profile.works[updIndex]) {
      return res.status(404).json({
        errors: [{ msg: 'No Work Found!' }]
      })
    }

    profile.works[updIndex] = workFields
    await profile.save()
    res.json(profile)
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

// #desc: remove work // #method: DELETE // #access: private
router.delete('/works/:workId', authenticated, async (req, res) => {
  try {
    const profile = await Profile.findOne({ owner: req.user.id })

    if (!profile) {
      return res.status(404).json({
        errors: [{ msg: 'No Profile Found For This User!' }]
      })
    }

    if (profile.owner !== req.user.id) {
      return res.status(401).json({
        errors: [{ msg: 'Not Authorized!' }]
      })
    }

    const rmvIndex = profile.works
      .map(elm => elm.id)
      .indexOf(req.params.workId)

    if (!profile.works[rmvIndex]) {
      return res.status(404).json({
        errors: [{ msg: 'No Work Found!' }]
      })
    }

    profile.works.splice(rmvIndex, 1)
    await profile.save()
    res.json(profile)
  } catch (er) {
    console.error(er.message)
    res.status(500).json({
      errors: [{ msg: 'Server Error!' }]
    })
  }
})

export default router
