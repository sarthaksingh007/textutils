// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


// let name = "sarthak";
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode enabled successfully", "success ");
      document.title = "TextUtils-Dark mode";
      //   setInterval(() => {
      //     document.title="TextUtils-virus-virus";
      //   }, 2000);
      //   setInterval(() => {
      //     document.title="TextUtils-bhago-bhago";
      //   }, 3000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("light mode enabled successfully", "success ");
      document.title = "TextUtils-light mode";
    }
  }

  const [alert, setAlert] = useState(null)

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    // <div className="black">lovely</div>
    <>
      {/* <Navbar title="textutils" aboutText="Aboutus" /> */}
      {/* <BrowserRouter> */}
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <Routes>

            < Route exact path="/" */}
              {/* element= */}
              <TextForm showalert={showalert} heading="Enter the text to analyse: " mode={mode} />
              {/* /> */}
            {/* <Route exact path="/about" element={<About />} />
          </Routes> */}

          {/* <About/> */}
        </div >
        <Navbar />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
