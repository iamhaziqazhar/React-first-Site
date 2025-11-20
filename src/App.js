import './App.css';
// import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';


function App() {
  const [mode, setMode] = useState('light')
const [alert, setAlert] = useState(null);
const showAlert=(message,type)=>{
setAlert({
msg:message,
type:type
})
setTimeout(() => {
  setAlert(null)
},1000);
}


   const toggleMode1=()=>{
if(mode==="light"){
  setMode("dark")
   document.body.style.backgroundColor='#000000db'
   showAlert("Dark Mode has been enabled" , "success")
} else{setMode("light")
   document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled" , "success")


}}
 const toggleMode2=()=>{
if(mode==="light"){
  setMode("blue")
   document.body.style.backgroundColor='#01a6ffdb'
   showAlert("Blue Mode has been enabled" , "success")
} else{setMode("light")
   document.body.style.backgroundColor='light'
      showAlert("Light Mode has been enabled" , "success")


}}
 const toggleMode=()=>{
if(mode==="light"){
  setMode("red")
   document.body.style.backgroundColor='#9f1b1bb3'
   showAlert("red Mode has been enabled" , "success")
} else{setMode("light")
   document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled" , "success")


}

  }
  return (
    <>
<Navbar title="textutils" about="About" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode} />
<Alert alert={alert}/>   
<div className="container my-5"><TextForm showAlert={showAlert} heading= "Please Enter your text here to Analyze:" mode={mode} /></div>
{/* <About/> */}

 </>
  );
}

export default App;
