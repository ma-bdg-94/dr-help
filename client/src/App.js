import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// import components
import Navigation from './components/Layout/Navigation'
import Home from './components/Layout/Home'
import Authentication from './components/Layout/Authentication'
import Engineering from './components/Layout/Engineering'
import Forum from './components/Layout/Forum'
import Publications from './components/Layout/Publications'
import LifeSciences from './components/Layout/LifeSciences'
import MedicalSciences from './components/Layout/MedicalSciences'
import NaturalSciences from './components/Layout/NaturalSciences'
import SocialSciences from './components/Layout/SocialSciences'
import AerospaceEngineering from './components/Layout/Topics/AerospaceEngineering'
import AgriculturalSciences from './components/Layout/Topics/AgriculturalSciences'
import AtmosphericSciences from './components/Layout/Topics/AtmosphericSciences'
import Automation from './components/Layout/Topics/Automation'
import BiologicalSciences from './components/Layout/Topics/BiologicalSciences'
import BiomedicalEngineering from './components/Layout/Topics/BiomedicalEngineering'
import BusinessAdministration from './components/Layout/Topics/BusinessAdministration'
import ChemicalEngineering from './components/Layout/Topics/ChemicalEngineering'
import Chemistry from './components/Layout/Topics/Chemistry'
import CivilEngineering from './components/Layout/Topics/CivilEngineering'
import ClinicalMedicine from './components/Layout/Topics/ClinicalMedicine'
import Communication from './components/Layout/Topics/Communication'
import ComputerScience from './components/Layout/Topics/ComputerScience'
import Dentistry from './components/Layout/Topics/Dentistry'
import EarthSciences from './components/Layout/Topics/EarthSciences'
import Ecology from './components/Layout/Topics/Ecology'
import Economics from './components/Layout/Topics/Economics'
import Education from './components/Layout/Topics/Education'
import ElectricalEngineering from './components/Layout/Topics/ElectricalEngineering'
import EnergyScience from './components/Layout/Topics/EnergyScience'
import EnvironmentScience from './components/Layout/Topics/EnvironmentScience'
import Finance from './components/Layout/Topics/Finance'
import FoodScience from './components/Layout/Topics/FoodScience'
import Hospitality from './components/Layout/Topics/Hospitality'
import HumanBiologicalSciences from './components/Layout/Topics/HumanBiologicalSciences'
import InstrumentsScience from './components/Layout/Topics/InstrumentsScience'
import Law from './components/Layout/Topics/Law'
import LibraryScience from './components/Layout/Topics/LibraryScience'
import MarineEngineering from './components/Layout/Topics/MarineEngineering'
import MaterialScience from './components/Layout/Topics/MaterialScience'
import Mathematics from './components/Layout/Topics/Mathematics'
import MechanicalEngineering from './components/Layout/Topics/MechanicalEngineering'
import MedicalTechnology from './components/Layout/Topics/MedicalTechnology'
import MineralEngineering from './components/Layout/Topics/MineralEngineering'
import Nanoscience from './components/Layout/Topics/Nanoscience'
import Nursing from './components/Layout/Topics/Nursing'
import Oceanology from './components/Layout/Topics/Oceanology'
import Pharmacy from './components/Layout/Topics/Pharmacy'
import Physics from './components/Layout/Topics/Physics'
import PoliticalSciences from './components/Layout/Topics/PoliticalSciences'
import Psychology from './components/Layout/Topics/Psychology'
import PublicAdministration from './components/Layout/Topics/PublicAdministration'
import PublicHealth from './components/Layout/Topics/PublicHealth'
import Sociology from './components/Layout/Topics/Sociology'
import Statistics from './components/Layout/Topics/Statistics'
import Telecommunication from './components/Layout/Topics/Telecommunication'
import TransportationScience from './components/Layout/Topics/TransportationScience'
import VeterinarySciences from './components/Layout/Topics/VeterinarySciences'
import WaterResources from './components/Layout/Topics/WaterResources'
import Register from './components/Authentication/Register'
import Login from './components/Authentication/Login'

// redux
import { Provider } from 'react-redux'
import store from './redux-store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/authentication' element={<Authentication />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='forum' element={<Forum />} />
            <Route path='publications' element={<Publications />} />
            <Route path='fields/engineering' element={<Engineering />} />
            <Route path='fields/life-sciences' element={<LifeSciences />} />
            <Route
              path='fields/natural-sciences'
              element={<NaturalSciences />}
            />
            <Route
              path='fields/medical-sciences'
              element={<MedicalSciences />}
            />
            <Route path='fields/social-sciences' element={<SocialSciences />} />
            <Route
              path='fields/natural-sciences/topics/mathematics'
              element={<Mathematics />}
            />
            <Route
              path='fields/natural-sciences/topics/physics'
              element={<Physics />}
            />
            <Route
              path='fields/natural-sciences/topics/chemistry'
              element={<Chemistry />}
            />
            <Route
              path='fields/natural-sciences/topics/earth-sciences'
              element={<EarthSciences />}
            />
            <Route
              path='fields/natural-sciences/topics/oceanology'
              element={<Oceanology />}
            />
            <Route
              path='fields/natural-sciences/topics/ecology'
              element={<Ecology />}
            />
            <Route
              path='fields/natural-sciences/topics/atmospheric-sciences'
              element={<AtmosphericSciences />}
            />
            <Route
              path='fields/engineering/topics/mechanical-engineering'
              element={<MechanicalEngineering />}
            />
            <Route
              path='fields/engineering/topics/electrical-engineering'
              element={<ElectricalEngineering />}
            />
            <Route
              path='fields/engineering/topics/automation-sensing'
              element={<Automation />}
            />
            <Route
              path='fields/engineering/topics/telecommunication'
              element={<Telecommunication />}
            />
            <Route
              path='fields/engineering/topics/biomedical-engineering'
              element={<BiomedicalEngineering />}
            />
            <Route
              path='fields/engineering/topics/computer-science'
              element={<ComputerScience />}
            />
            <Route
              path='fields/engineering/topics/instruments-science'
              element={<InstrumentsScience />}
            />
            <Route
              path='fields/engineering/topics/civil-engineering'
              element={<CivilEngineering />}
            />
            <Route
              path='fields/engineering/topics/chemical-engineering'
              element={<ChemicalEngineering />}
            />
            <Route
              path='fields/engineering/topics/material-science'
              element={<MaterialScience />}
            />
            <Route
              path='fields/engineering/topics/nanoscience'
              element={<Nanoscience />}
            />
            <Route
              path='fields/engineering/topics/energy-science'
              element={<EnergyScience />}
            />
            <Route
              path='fields/engineering/topics/environment-science'
              element={<EnvironmentScience />}
            />
            <Route
              path='fields/engineering/topics/food-science'
              element={<FoodScience />}
            />
            <Route
              path='fields/engineering/topics/transportation-science'
              element={<TransportationScience />}
            />
            <Route
              path='fields/engineering/topics/aerospace-engineering'
              element={<AerospaceEngineering />}
            />
            <Route
              path='fields/engineering/topics/marine-engineering'
              element={<MarineEngineering />}
            />
            <Route
              path='fields/engineering/topics/mineral-engineering'
              element={<MineralEngineering />}
            />
            <Route
              path='fields/engineering/topics/water-resources'
              element={<WaterResources />}
            />
            <Route
              path='fields/life-sciences/topics/biological-sciences'
              element={<BiologicalSciences />}
            />
            <Route
              path='fields/life-sciences/topics/human-biological-sciences'
              element={<HumanBiologicalSciences />}
            />
            <Route
              path='fields/life-sciences/topics/agricultural-sciences'
              element={<AgriculturalSciences />}
            />
            <Route
              path='fields/life-sciences/topics/veterinary-sciences'
              element={<VeterinarySciences />}
            />
            <Route
              path='fields/medical-sciences/clinical-medicine'
              element={<ClinicalMedicine />}
            />
            <Route
              path='fields/medical-sciences/dentistry'
              element={<Dentistry />}
            />
            <Route
              path='fields/medical-sciences/nursing'
              element={<Nursing />}
            />
            <Route
              path='fields/medical-sciences/public-health'
              element={<PublicHealth />}
            />
            <Route
              path='fields/medical-sciences/medical-technology'
              element={<MedicalTechnology />}
            />
            <Route
              path='fields/medical-sciences/pharmacy'
              element={<Pharmacy />}
            />
            <Route
              path='fields/social-sciences/topics/economics'
              element={<Economics />}
            />
            <Route
              path='fields/social-sciences/topics/statistics'
              element={<Statistics />}
            />
            <Route path='fields/social-sciences/topics/law' element={<Law />} />
            <Route
              path='fields/social-sciences/topics/political-sciences'
              element={<PoliticalSciences />}
            />
            <Route
              path='fields/social-sciences/topics/sociology'
              element={<Sociology />}
            />
            <Route
              path='fields/social-sciences/topics/education'
              element={<Education />}
            />
            <Route
              path='fields/social-sciences/topics/communication'
              element={<Communication />}
            />
            <Route
              path='fields/social-sciences/topics/psychology'
              element={<Psychology />}
            />
            <Route
              path='fields/social-sciences/topics/business-administration'
              element={<BusinessAdministration />}
            />
            <Route
              path='fields/social-sciences/topics/public-administration'
              element={<PublicAdministration />}
            />
            <Route
              path='fields/social-sciences/topics/finance'
              element={<Finance />}
            />
            <Route
              path='fields/social-sciences/topics/hospitality'
              element={<Hospitality />}
            />
            <Route
              path='fields/social-sciences/topics/library'
              element={<LibraryScience />}
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
