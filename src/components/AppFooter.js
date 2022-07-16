import React from 'react'

export default function AppFooter(props) 
{
  return (
    <div  >
      
      <footer className="py-3 my-4" style= {{color: props.text}} >
    
        <ul className="nav justify-content-center border-bottom pb-3 mb-3"  >
      
          <li className="nav-item py-3 my-1 mx-3">Home</li>
          <li className="nav-item py-3 my-1 mx-3">Features</li>
          <li className="nav-item py-3 my-1 mx-3">Pricing</li>
          <li className="nav-item py-3 my-1 mx-3">FAQs</li>
          <li className="nav-item py-3 my-1 mx-3">About</li>
        </ul>
        <p className="text-center">© 2022 Masroor Shah, TextManipulator</p>
      </footer>
    </div>
  )
}
