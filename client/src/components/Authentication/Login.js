import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'

const Login = props => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false)

  const [phoneBasedLogin, setPhoneBasedLogin] = useState(false)

  const { email, phone, password } = formData

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

  const switchToPhoneBasedLogin = () => {
    setPhoneBasedLogin(!phoneBasedLogin)
  }

  return (
    <Fragment>
      <h4 className='card-title text-center my-3'>
        Or just log into your existing account!
      </h4>
      <form>
        <fieldset>
          <div className='form-group mt-3 mb-3'>
            <input
              type={phoneBasedLogin ? 'text' : 'email'}
              name={phoneBasedLogin ? 'phone' : 'email'}
              value={phoneBasedLogin ? phone : email}
              onChange={e => handleChange(e)}
              className='form-control form-control-sm'
              placeholder={phoneBasedLogin ? 'Phone Number:' : 'Email Address:'}
            />
            <small id='inputHelpText' className='form-text text-muted mx-1'>
              <button
                type='button'
                className='btn btn-link text-capitalize my-1'
                onClick={switchToPhoneBasedLogin}
              >
                Switch to{' '}
                {phoneBasedLogin ? (
                  <span>email-based</span>
                ) : (
                  <span>phone-based</span>
                )}{' '}
                authentication
              </button>
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
          className='btn btn-primary text-capitalize my-2'
          onClick={e => handleSubmit(e)}
        >
          Sign In
        </button>
      </form>
    </Fragment>
  )
}

Login.propTypes = {}

export default Login
