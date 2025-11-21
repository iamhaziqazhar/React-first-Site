import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
let newText=text.toUpperCase();
setText(newText)
props.showAlert("converted to UpperCase Letters" , "success");

    }
   const handleCapCharClick = () => {
  let newText = text
    .split(" ")
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
  setText(newText);
  props.showAlert("First Letter is Being Capitalized","success" );
};
      const handleloClick=()=>{
let newText=text.toLowerCase();
setText(newText)
props.showAlert("converted to Lower Letters","success");

    }
    const handleOnChange=(event)=>{
setText(event.target.value);


    }
    const [text,setText]= useState('')
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h5 className='mx-4'><strong>{props.heading}</strong>  </h5>
<div className="container" style={{color:props.mode==='dark'?'#6d4d4d9c':'black'}}>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'#b7a8a802' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-secondary my-2 mx-2" onClick={handleUpClick}>Convert to upperCase</button>
<button disabled={text.length===0} className="btn btn-secondary my-2 mx-2" onClick={handleloClick}>Convert to lowerCase</button>
<button disabled={text.length===0} className="btn btn-secondary my-2 mx-2" onClick={handleCapCharClick}>Capitalize first letter of every word</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
      <h3>Your text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <h2>Preview</h2>
    
    <p>{text.length>0?text:'Enter Your text in the text box above to preview'}</p>
    </div>
    </>
  )
}

