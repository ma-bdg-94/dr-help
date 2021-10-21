import PropTypes from 'prop-types'
import Scientist from '../resources/scientist.jpg'
import Brain from '../resources/brain.png'
import Discussion from '../resources/discussion.png'
import './Page.css'

const Home = props => {
  return (
    <div>
      <section
        className="section-1"
      >
        <div className="subsection">
          <h3 className="sect-title">
            We make a connection between scholars
          </h3>
          <h5>
            Connect to your fellows, share your experience or ask any question
            in your research area in the Forum
          </h5>
          <button
            className="register-button"
          >
            Sign up now for free
          </button>
        </div>
        <img src={Scientist} alt='' className="image-intro" />
      </section>
      <hr className="hr"/>
      <section
        className="section-1"
      >
        <img src={Brain} alt='' className="image-center" />
        <div className="subsection">
          <h3 className="sect-title">
            There is a broad research areas
          </h3>
          <button
            className="subject-button"
          >
            Natural Sciences
          </button>
          <button
            className="subject-button"
          >
            Engineering
          </button>
          <button
            className="subject-button"
          >
            Creative Arts
          </button>
          <button
            className="subject-button"
          >
            Social Sciences
          </button>
          <button
            className="subject-button"
          >
            Health & Medical Sciences
          </button>
          <button
            className="subject-button"
          >
            Life Sciences
          </button>
        </div>
      </section>
      <hr className="hr"/>
      <section
        className="section-1"
      >
        <div className="subsection">
          <h3 className="sect-title">
            Get in touch with your peers
          </h3>
          <h5>
            In the Forum section you can discuss and propose topics and share experience with your peers
          </h5>
          <button
            className="forum-button"
          >
            {'>> '}The Forum{' >>'}
          </button>
        </div>
        <img src={Discussion} alt='' className="image-center" />
      </section>
      <hr className="hr"/>
      <section
        className="section-1"
      >
        <div className="subsection-f">
          <h3 className="sect-title">
            Browse Publications
          </h3>
          <input type="text" className="browser"></input>
          <button
            className="browse-button"
          >
            Search
          </button>
        </div>
      </section>
    </div>
  )
}

Home.propTypes = {}

export default Home
