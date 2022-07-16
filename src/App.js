
import  { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light')
  const [dark, setLight] = useState('dark')
  const [area, setarea] = useState('white')
  const [text, settext] = useState('black')

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      setLight('light')
      setarea('grey')
      settext('white')
      document.body.style.backgroundColor = '#030726'
      
      
      
    }else{
      setMode('light')
      setLight('dark')
      setarea('white')
      settext('black')


      document.body.style.backgroundColor = 'white'
    }

  }
  
  return (
    <>
    <Navbar  title = "TextManipulator"  aboutUs = "About Us" mode = {mode} toggleMode = {toggleMode} text = {dark}/>
    <div className="container my-3">
   
    <div className="container my-3">
    <TextForm heading = "Enter the text below: "  textArea = {area} text = {text} />
    </div>
     {/* <About/> */}
     </div>
     <AppFooter text = {text}/>
    </>
  ); 
}

export default App;
