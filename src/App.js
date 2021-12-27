
import './App.css';
import Navbar from './compoents/Navbar';
import TextForm from './compoents/TextForm';
import React, { useState } from 'react'
import Alert from './compoents/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message,type) =>{
    setAlert({
       msg: message,
       type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#04070f';
      showalert("dark mode is enable", "Success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor  = 'white';
      showalert("light mode is enable", "Success")
    }
  }
  return ( 
   
    <>
   <Navbar title="Extractor" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className='container'>
   <TextForm showalert={showalert} Heading="Enter the text/content" mode={mode} />
   
   </div>
   </>
  );
}

export default App;
