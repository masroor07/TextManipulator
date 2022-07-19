import React from 'react'

export default function About(props) {
   

  

  

    
   

  return (
        <div className="container" style= {{color: props.text}}>
            <h1>About Us:</h1>
            <div className="accordion" id="accordionExample"   >
                <div className="accordion-item" style= {{backgroundColor: props.textArea, color: props.text}} >
                 <h2 className="accordion-header" id="headingOne" >
              <button className="accordion-button" style= {{backgroundColor: props.textArea, color: props.text}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
              Project briefing
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        <strong>This is a simple text manipulator project using reactJs:</strong>We use different HTML, CSS and Java Script concepts to implement various features in this web application<code>. ReactJS</code>, is what we trying to learn in this prject.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style= {{backgroundColor: props.textArea, color: props.text}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                         Various text operations
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style= {{backgroundColor: props.textArea, color: props.text}}>
                        <strong>This is the second item's accordion body.</strong>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree" >
                    <button className="accordion-button collapsed"  style= {{backgroundColor: props.textArea, color: props.text}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                        About the developer
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        <strong>This is the third item's accordion body.</strong> Masroor Hussain Shah, is the author of this application.
                    </div>
                    </div>
                </div>
                </div>
                

        </div>
    
  )
}
