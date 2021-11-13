import { Link } from 'react-router-dom'
import Sc from '../../resources/sc-1.jpg'

const Home = () => {
  return (
    <div className='container-fluid pt-5 px-3 bg-secondary'>
      <div className='row align-items-center'>
        <div className='col'>
          <h1 className='text-custom-1'>Welcome to Dr. Help</h1>
          <p className='text-custom-1'>
            Discover scientific knowledge and stay connected to the world of
            science
          </p>
        </div>
        <div className='col'>
          <img className='image-1' src={Sc} alt=''></img>
        </div>
      </div>
      <div className='row align-items-center my-5 mx-5'>
        <button type='button' className='btn btn-outline-info'>
          Create a free account
        </button>
      </div>
      <div className='row align-items-top my-5'>
        <div className='col'>
          <div className='row align-items-center'>
            <div>
              <h1 className='text-custom-1'>Diverse Topics</h1>
              <p className='text-custom-1'>
                Discover scientific knowledge and stay connected to the world of
                science
              </p>
            </div>
            <div className='accordion'>
              <div className='accordion-item border-info'>
                <h2 className='accordion-header' id='headingOne'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='false'
                    aria-controls='collapseOne'
                  >
                    Natural Sciences
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <ul className='navbar-nav mr-auto'>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/natural-sciences/topics/mathematics'
                        >
                          <i className='fas fa-square-root-alt'></i> Mathematics
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/natural-sciences/topics/physics'
                        >
                          <i className='fas fa-atom'></i> Physics
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/natural-sciences/topics/chemistry'
                        >
                          <i className='fas fa-flask'></i> Chemistry
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/natural-sciences/topics/earth-sciences'
                        >
                          <i className='fas fa-globe'></i> Earth Sciences &
                          Geography
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/natural-sciences/topics/oceanology'
                        >
                          <i className='fas fa-water'></i> Oceanology
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/natural-sciences/topics/ecology'
                        >
                          <i className='fas fa-leaf'></i> Ecology
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/natural-sciences/topics/atmospheric-sciences'
                        >
                          <i className='fas fa-cloud'></i> Atmospheric Sciences
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='accordion-item border-info'>
                <h2 className='accordion-header' id='headingTwo'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Engineering
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <ul className='navbar-nav mr-auto'>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/mechanical-engineering'
                        >
                          <i className='fas fa-drafting-compass'></i> Mechanical
                          Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/electrical-engineering'
                        >
                          <i className='fas fa-bolt'></i> Electrical &
                          Electronic Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/automation-sensing'
                        >
                          <i className='fas fa-robot'></i> Automation, Control &
                          Remote Sensing
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/telecommunication'
                        >
                          <i className='fas fa-network-wired'></i>{' '}
                          Telecommunication Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/biomedical-engineering'
                        >
                          <i className='fas fa-dna'></i> Biomedical Engineering
                          & Biotechnology
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/computer-science'
                        >
                          <i className='fas fa-laptop-code'></i> Computer
                          Science
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/instruments-science'
                        >
                          <i className='fas fa-tools'></i> Instruments Science
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/civil-engineering'
                        >
                          <i className='fas fa-hard-hat'></i> Civil Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/chemical-engineering'
                        >
                          <i className='fas fa-vial'></i> Chemical Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/material-science'
                        >
                          <i className='fas fa-atom'></i> Materials Science &
                          Metallurgical Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/nanoscience'
                        >
                          <i className='fas fa-asterisk'></i> Nanoscience &
                          Nanotechnology
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/energy-science'
                        >
                          <i className='fas fa-charging-station'></i> Energy
                          Science & Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/environment-science'
                        >
                          <i className='fas fa-seedling'></i> Environment
                          Science & Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/water-resources'
                        >
                          <i className='fas fa-tint'></i> Water Resources
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/food-science'
                        >
                          <i className='fas fa-carrot'></i> Food Science &
                          Technology
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/aerospace-engineering'
                        >
                          <i className='fas fa-rocket'></i> Aerospace
                          Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/marine-engineering'
                        >
                          <i className='fas fa-anchor'></i> Marine Engineering
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/transportation-science'
                        >
                          <i className='fas fa-road'></i> Transportation Science
                          & Technology
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/engineering/topics/mineral-engineering'
                        >
                          <i className='fas fa-gas-pump'></i> Mining & Mineral
                          Engineering
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='accordion-item border-info'>
                <h2 className='accordion-header' id='headingThree'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Life Sciences
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <ul className='navbar-nav mr-auto'>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/life-sciences/topics/biological-sciences'
                        >
                          <i className='fas fa-microscope'></i> Biological
                          Sciences
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/life-sciences/topics/human-biological-sciences'
                        >
                          <i className='fas fa-baby'></i> Human Biological
                          Sciences
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/life-sciences/topics/agricultural-sciences'
                        >
                          <i className='fas fa-apple-alt'></i> Agricultural
                          Sciences
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/life-sciences/topics/veterinary-sciences'
                        >
                          <i className='fas fa-paw'></i> Veterinary Sciences
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='accordion-item border-info'>
                <h2 className='accordion-header' id='headingFour'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                    aria-expanded='false'
                    aria-controls='collapseFour'
                  >
                    Health & Medical Sciences
                  </button>
                </h2>
                <div
                  id='collapseFour'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFour'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <ul className='navbar-nav mr-auto'>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/medical-sciences/topics/clinical-medicine'
                        >
                          <i className='fas fa-procedures'></i> Clinical
                          Medicine
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/medical-sciences/topics/public-health'
                        >
                          <i className='fas fa-ambulance'></i> Public Health
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/medical-sciences/topics/dentistry'
                        >
                          <i className='fas fa-tooth'></i> Dentistry & Oral
                          Sciences
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/medical-sciences/topics/nursing'
                        >
                          <i className='fas fa-user-nurse'></i> Nursing
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/medical-sciences/topics/medical-technology'
                        >
                          <i className='fas fa-x-ray'></i> Medical Technology
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/medical-sciences/topics/pharmacy'
                        >
                          <i className='fas fa-mortar-pestle'></i> Pharmacy &
                          Pharmaceutical Sciences
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='accordion-item border-info'>
                <h2 className='accordion-header' id='headingFive'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive'
                    aria-expanded='false'
                    aria-controls='collapseFive'
                  >
                    Social Sciences
                  </button>
                </h2>
                <div
                  id='collapseFive'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFive'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <ul className='navbar-nav mr-auto'>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/economics'
                        >
                          <i className='fas fa-chart-line'></i> Economics
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/statistics'
                        >
                          <i className='fas fa-chart-pie'></i> Statistics
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/law'
                        >
                          <i className='fas fa-balance-scale'></i> Law &
                          Judicial Sciences
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/political-sciences'
                        >
                          <i className='fas fa-vote-yea'></i> Political Sciences
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/sociology'
                        >
                          <i className='fas fa-people-arrows'></i> Sociology
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/education'
                        >
                          <i className='fas fa-graduation-cap'></i> Education
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/communication'
                        >
                          <i className='fas fa-comments'></i> Communication
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/psychology'
                        >
                          <i className='fas fa-brain'></i> Psychology
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/business-administration'
                        >
                          <i className='fas fa-user-tie'></i> Business
                          Administration & Management
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/finance'
                        >
                          <i className='fas fa-coins'></i> Finance
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/public-administration'
                        >
                          <i className='fas fa-landmark'></i> Public
                          Administration
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/hospitality'
                        >
                          <i className='fas fa-concierge-bell'></i> Hospitality
                          & Tourism Management
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='nav-link'
                          to='fields/social-sciences/topics/library'
                        >
                          <i className='fas fa-book'></i> Library & Information
                          Sciences
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <h1 className='text-custom-1'>Most Recent</h1>
          <p className='text-custom-1'>
            This section is still under construction
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
