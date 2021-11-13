import Login from '../Authentication/Login'
import Register from '../Authentication/Register'

const Authentication = () => {
  return (
    <div className='container-fluid pt-5 px-3 bg-secondary'>
      <div className='row align-items-top'>
        <div className='col-sm'>
          <Register />
        </div>
        <div className='col'>
          <Login />
        </div>
      </div>
    </div>
  )
}

export default Authentication
