import Particles from 'react-particles-js';
import './App.scss';
import Navbar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import {Switch, Route} from 'react-router-dom';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import { useEffect, useState } from 'react';
import LineIcon from 'react-lineicons';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  
  const navClick = () => {
    setNavToggle(!navToggle)
  }
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2600)
  }, [])


  return (
    <div className="App">
      {
        loading 
        ? 
        <div className="preloader">
        <ClimbingBoxLoader
          color={"#037fff"} 
          loading={loading} 
          size={30} 
        /> </div>: 

        <div>
        <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
          <Navbar toggle={navClick} />
        </div>
        
        <div className="nav-btn" onClick={navClick}>
          {!navToggle ? <LineIcon name="menu" /> : <LineIcon name="close" />}
        </div>



        <div className="main-content">
          <div className="background-content">
          <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 15
                  },
                  "color": {
                    value: ['#037fff']
                  },

                  "size": {
                      "value": 3
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              }
          }} />  
          </div>
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage/>
              </Route>
              <Route path="/about" exact>
                <AboutPage/>
              </Route>

              <Route path="/portfolios" exact>
                <PortfoliosPage/>
              </Route>
              <Route path="/contact" exact>
                <ContactPage/>
              </Route>
            </Switch>
          </div>

        </div>

      </div>






      }

    </div>
  );
}

export default App;
