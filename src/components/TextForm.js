import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
let newText=text.toUpperCase();
setText(newText)

    }
   const handleCapCharClick = () => {
  let newText = text
    .split(" ")
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
  setText(newText);
};
      const handleloClick=()=>{
let newText=text.toLowerCase();
setText(newText)

    }
    const handleOnChange=(event)=>{
setText(event.target.value);


    }
    const [text,setText]= useState('Enter your text here')
  return (
    <>
    <div>
        <h5>{props.heading}  </h5>
<div className="container">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to upperCase</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleloClick}>Convert to lowerCase</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleCapCharClick}>Capitalize first letter of every word</button>

    </div>
    <div className="container my-3" >
      <h3>Your text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}

