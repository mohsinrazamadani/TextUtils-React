/* import logo from "./logo.svg"; */
import "./App.css"
import Navbar from "./compennets/Navbar";
import Textform from "./compennets/Textform";
import PropTypes from 'prop-types'
import About from "./compennets/About";
import React, { useState }  from 'react';
import Alert from "./compennets/Alert";
/* import React from 'react' */
/* import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom"; */





 function  App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

 
 
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })


      setTimeout (() =>{
        setAlert (null);
      }, 1500);
      }  

const togglemode = ()=>{
   if (mode === 'light') {
   setMode('dark');
   document.body.style.backgroundColor= "#1d3248";
   showAlert("Dark mode has been enable", "success");
   document.title='TextUtils - Dark Mode';

   }

   else  {
    setMode('light');
    document.body.style.backgroundColor= "white";
    showAlert("light mode has been enable", "success");
    document.title='TextUtils - Light Mode';
    }

  }




  return (
   <>
      {<Navbar title="TextUtils" mode={mode} abouttext="About TextUtils"  togglemode={togglemode} />}
      <Alert alert={alert}/>
          <div className="container my-3" >
              <Textform showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>
             
            </div>
   
   </>
  );
}





export default App;


Navbar.PropTypes={
  title: PropTypes.string,
  abouttext: PropTypes.string        
}