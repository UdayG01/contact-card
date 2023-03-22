import React, {useState} from "react"
import daymode from './images/day mode.png'
import nightmode from './images/night mode.png'
import './App.css';
import Contact from './components/contactbar'
import Description from "./components/description"
import Links from "./components/links"

function App() {

  const [darkMode, setDarkMode] = useState(true)

  function handleMode(){
    setDarkMode(prevMode => !prevMode)
  }

  const modeicon = darkMode ? daymode : nightmode   

  return (
    <div className="App">
    <div className="header">
      <img src={modeicon} alt="day mode icon" className="view-mode" onClick={handleMode}/>
      <span>React : Project 1.5</span>
    </div>
    <div className="main-container">
      <div className="contact-container">
        <Contact darkMode={darkMode}/>
        <div className="vl"></div>
        <Description darkMode={darkMode}/>
      </div>
        <Links darkMode={darkMode}/>
    </div>
    </div>
  );
}

export default App;
