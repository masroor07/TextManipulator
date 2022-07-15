
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar  title = "TextManipulator"  aboutUs = "About Us" />
    <div className="container my-3">
   
    <div className="container my-3">
    <TextForm heading = "Enter the text below: "/>
    </div>
     {/* <About/> */}
     </div>
    </>
  ); 
}

export default App;
