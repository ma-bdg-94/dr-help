import { Fragment } from 'react'
import './App.css';

// import components
import Header from './components/layout/navbar/Header'
import Landing from './components/layout/landing/Landing'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
