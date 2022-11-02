import {} from '@testing-library/react';
import React, {useState} from 'react'



export default function Textform(props) {
  const [text, setText] = useState(' ');
 
 
  const handleUpClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to Uppercase!", "success");
  }

  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("converted to Lowercase!", "success");
  }
 
  const handleClearClick = ()=>{
    let newtext = '';
    setText(newtext)
    props.showAlert("TEXT Cleared!", "success");
  }



  const handleCopy = ()=>{
    var text = document.getElementByid("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to Clipboard!", "success");
  }


const handleExtraspaces = ()=>{
  let newtext = text.split(/[ ]+/);
   setText(newtext.join(" "))
   props.showAlert("Extra Spaces Removed!", "success");
}





  const handleonChange = (event)=>{
    setText(event.target.value);
  }
 
 return (
  <>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} > Convert to Uppercase </button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick} > Convert to lowercase </button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick} > Clear Text </button>
    <button className="btn btn-primary mx-1" onClick={handleCopy} > Copy Text </button>
    <button className="btn btn-primary mx-1" onClick={handleExtraspaces} > Remove Extra Spaces </button>

</div>
<div className="container" my-4 style={{color: props.mode==='dark'?'white':'black'}}>
  <h1> your text summary </h1>
  <p> {text.split(" ").length} words, {text.length} characters</p>
    <p> {0.008 * text.split(" ").length } minutes read  </p>
    <h2> preview </h2>
    <p> {text}</p>
</div>
  </>

  )
}
