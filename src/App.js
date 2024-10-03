import Navbar from './components/Navbar'
import TextForm from './components/Textform'
import './App.css';
import Darkmode from './components/Darkmode';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [DarkMode, setdarkMode] = useState("light");

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const removebody = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }


  const toggleMode = (cls) => {
    removebody();
    console.log(cls);
    document.body.classList.add('bg-' + cls)
    if (DarkMode === "light") {
      setdarkMode("dark");
      document.body.style.backgroundColor = "#063844";
      showalert(" DarkMode is Enable", "succes")
      document.title = "React Project: DarkMode";
    }
    else {
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      showalert(" LightMode is Enable", "succes")
      document.title = "React Project: LightMode";
    }
  }


  return (
    <>
      <Router>
        <Navbar title="Pradum" link="About Us" mode={DarkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>

            <Route exact path="/" element={<TextForm showalert={showalert} mode={DarkMode} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Space" />}></Route>

            <Route exact path="/about" element={<Darkmode mode={DarkMode} />}>
            </Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;