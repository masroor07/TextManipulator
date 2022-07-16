import React, {useState} from 'react'

export default function TextForm(props) {
   function toUpperCase(){
    console.log("Upper case was clicked")
    let newText = text.toUpperCase();
    setText(newText);

   }

   function toLowerCase(){
    console.log("Lower case was clicked")
    let newText = text.toLowerCase();
    setText(newText);

   }

   function textCopy(){
   var text = document.getElementById("myBox")
   text.select();
   navigator.clipboard.writeText(text.value);

   }
   function firstToCapital(){
    console.log("Lower case was clicked")
    text.charAt(0).toUpperCase();
    setText(text.charAt(0).toUpperCase() + text.slice(1));
   
   }

   function onChangeHandler(event){
    setText(event.target.value);

   }
    const [text, setText] = useState('Enter text here');
  return (
    <>
<div  >

    <h1  style= {{color: props.text}} >
    { props.heading}
    </h1>
    <div className="mb-3" >
    <textarea className="form-control" style= {{backgroundColor: props.textArea, color: props.text}} value={text} onChange= {onChangeHandler} id="myBox" rows="8" ></textarea>
     </div >
     <button className="btn btn-primary mx-2" onClick={toUpperCase}>Convert To Upper Case </button>
     <button className="btn btn-primary mx-2"onClick={toLowerCase}>Conevert To Lower Case</button>
     <button className="btn btn-primary mx-2"onClick={firstToCapital}>Convert To Sentence Case</button>
     <button className="btn btn-primary mx-2"onClick={textCopy}>Copy To Clipboard</button>
</div>

<div className="container" style= {{color: props.text}} >
    <h1>Text summary:</h1>
    <h6>Number of characters = {text.length}</h6>
    <h6>Number of words = {text.split(" ").length-1}</h6>
    <h6>Time to read the whole text: {(0.008 * text.split(" ").length )}</h6>
    <div className="container my-3" style={{border: '.2px solid blue' }}>
    <h3>Preview of the text:</h3>
    <p>{text}</p>
    </div>
    
    

</div>

</>
  )
}
