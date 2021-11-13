import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand text-info font-weight-bold' to='/'>
          <i class='fas fa-swatchbook'></i>Dr. Help
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/'>
                Home
                <span className='visually-hidden'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='forum'>
                The Forum
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='publications'>
                Publications
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                to='/'
              >
                Academic Fields
              </Link>
              <div className='dropdown-menu'>
                <Link className='dropdown-item' to='fields/natural-sciences'>
                  Natural Sciences
                </Link>
                <Link className='dropdown-item' to='fields/engineering'>
                  Engineering
                </Link>
                <Link className='dropdown-item' to='fields/life-sciences'>
                  Life Sciences
                </Link>
                <Link className='dropdown-item' to='fields/medical-sciences'>
                  Health & Medical Sciences
                </Link>
                <Link className='dropdown-item' to='fields/social-sciences'>
                  Social Sciences
                </Link>
              </div>
            </li>
          </ul>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='authentication'>
                Authentication
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
