import { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

// import components
import Navigation from './components/Navigation/Navigation'
import Home from './components/Pages/Home'
import Forum from './components/Pages/Forum'
import Institutions from './components/Pages/Institutions'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import Subjects from './components/Pages/Subjects'

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <section className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forum" component={Forum} />
            <Route path="/institutions" component={Institutions} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/subjects" component={Subjects} />
          </Switch>
        </section>
      </Router>
    </Fragment>
  );
}

export default App;
