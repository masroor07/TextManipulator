import React, {useState} from 'react'

export default function TextForm(props) {
   function toUpperCase(){
    console.log("Upper case was clicked")
    let newText = text.toUpperCase();
    setText(newText);

   }

   function onChangeHandler(event){
    setText(event.target.value);

   }
    const [text, setText] = useState('Enter text here');
  return (
    <>
<div>

    <h1>
    { props.heading}
    </h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange= {onChangeHandler} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primar" onClick={toUpperCase}>Convert toUpper Case </button>
     <button className="btn btn-count">Count the total words</button>
</div>

<div className="container">
    <h1>Text summary:</h1>
    <h6>Number of characters = {text.length}</h6>
    <h6>Number of words = {text.split(" ").length-1}</h6>
    

</div>

</>
  )
}
