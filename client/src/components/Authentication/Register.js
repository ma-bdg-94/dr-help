import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'

const Register = props => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    academicTitle: '',
    institution: '',
    institutionCountry: '',
    email: '',
    phone: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false)

  const {
    firstName,
    lastName,
    academicTitle,
    institution,
    institutionCountry,
    email,
    phone,
    password
  } = formData

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Fragment>
      <h4 className='card-title text-center my-3'>
        Create an account now FOR FREE!
      </h4>
      <form>
        <fieldset>
          <div className='form-group my-3'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => handleChange(e)}
              className='form-control form-control-sm'
              placeholder='First Name:'
            />
          </div>
          <div className='form-group my-3'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => handleChange(e)}
              className='form-control form-control-sm'
              placeholder='Last (Family) Name:'
            />
          </div>
          <div className='form-group my-3'>
            <input
              type='text'
              name='academicTitle'
              value={academicTitle}
              onChange={e => handleChange(e)}
              className='form-control form-control-sm'
              placeholder='Academic Rank:'
            />
          </div>
          <div className='form-group my-3'>
            <div className='form-group'>
              <input
                type='text'
                name='institution'
                value={institution}
                onChange={e => handleChange(e)}
                className='form-control form-control-sm'
                aria-describedby='institutionHelpText'
                placeholder='Institution:'
              />
            </div>
            <small
              id='institutionHelpText'
              className='form-text text-muted mx-4'
            >
              Please submit your current university, institution or research
              center
            </small>
          </div>
          <div className='form-group my-3'>
            <input
              type='text'
              name='institutionCountry'
              value={institutionCountry}
              onChange={e => handleChange(e)}
              className='form-control form-control-sm'
              placeholder='Institution Nationality:'
            />
          </div>
          <div className='form-group mt-5 mb-3'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={e => handleChange(e)}
              className='form-control form-control-sm'
              placeholder='Email Address:'
            />
          </div>
          <div className='form-group my-3'>
            <input
              type='text'
              name='phone'
              value={phone}
              onChange={e => handleChange(e)}
              className='form-control form-control-sm'
              aria-describedby='phoneHelpText'
              placeholder='Phone Number:'
            />
            <small id='phoneHelpText' className='form-text text-muted mx-4'>
              Do not forget the country code prefix, e.g: 001, 00216, ...etc
            </small>
          </div>
          <div className='form-group my-3'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={password}
              onChange={e => handleChange(e)}
              className='form-control form-control-sm'
              aria-describedby='passwordHelpText'
              placeholder='Password:'
            />
            <small id='passwordHelpText' className='form-text text-muted mx-4'>
              Password contain only numbers, 10 charecters at least.
              <button
                type='button'
                className='btn btn-link text-capitalize'
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <i className='far fa-eye-slash'></i>
                ) : (
                  <i className='far fa-eye'></i>
                )}
              </button>
            </small>
          </div>
        </fieldset>
        <button
          type='button'
          className='btn btn-outline-primary text-capitalize my-2'
          onClick={e => handleSubmit(e)}
        >
          Sign Up
        </button>
      </form>
    </Fragment>
  )
}

Register.propTypes = {}

export default Register
