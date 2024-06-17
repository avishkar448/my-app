//import logo from './logo.svg';
import "./App.css";
import Alert1 from "./components/Alert1";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'

function App() {
  const [mode,setmode]=useState('light')
  const [alert,setAlert]=useState("")

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode=()=>{ 
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#2e2c2c'
      showAlert("Dark mode is enable","success")
    } 
    else{ 
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode is enable","success")

    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert1 alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analysis below" mode={mode} />
    {/* <About/> */}
      
      </div>
    </>
  );
}

export default App;
