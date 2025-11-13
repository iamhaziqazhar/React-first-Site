import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
<Navbar title="textutils" about="About"/>
<div className="container my-5"><TextForm heading="Please Enter your text here to Analyze:" /></div>

    </>
  );
}

export default App;
