import React from 'react';
import  { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light')
  const [dark, setLight] = useState('dark')
  const [area, setarea] = useState('white')
  const [text, settext] = useState('black')
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type)=>
  {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null)
    }, 1600);

  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      setLight('light')
      setarea('grey')
      settext('white')
      document.body.style.backgroundColor = '#030726'
      showAlert("Dark mode enabled", "success");
      
      
      
    }else{
      setMode('light')
      setLight('dark')
      setarea('white')
      settext('black')
      showAlert("Light mode enabled", "success");


      document.body.style.backgroundColor = 'white'
    }

  }
  
  return (
    <>
     
    <Navbar  title = "TextManipulator"  aboutUs = "About Us" mode = {mode} toggleMode = {toggleMode} text = {dark}/>
      <Alert alert = {alert}/>
      <div className="container">
        
           
            
            <TextForm heading = "Enter the text below: "  textArea = {area} text = {text} />
            
            
            {/* <About textArea = {area} text = {text}/> */}
            
          
      </div>
         <AppFooter text = {text}/>  
          
    </>
  ); 

}

export default App;





        
