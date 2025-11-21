import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import TextForm from "./components/TextForm.js";
import React, { useState } from "react";
import Alert from "./components/Alert.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
if (document.body.style.backgroundColor === "") {
    document.body.style.backgroundColor = "#00000064";
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  
  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000000ef";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils-Dark mode Enabled";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#6d4d4d9c";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="textutils"
        about="About"
        mode={mode}
        toggleMode1={toggleMode1}
    
      />

      <Alert alert={alert} />

      <div className="container my-5">
        <Routes>
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Please Enter your text here to Analyze:"
                mode={mode}
              />
            }
          />
          <Route exact path="/About" element={<About mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
