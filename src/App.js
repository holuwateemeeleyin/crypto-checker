import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './Component/Header';

function App() {
  const [lightMode, setLightMode] = useState(getInitialMode())

  useEffect(()=> {
    localStorage.setItem('LightMode', lightMode)
  }, [lightMode])

  function getInitialMode() {
    const temp = localStorage.getItem("LightMode")
    return temp === 'true'
  }
  console.log(lightMode);
  return (
    <div className={lightMode ? null : 'App'}>
      <div className='app-container'>
        <Header lightMode={lightMode} setLightMode={setLightMode}/>      
      </div>
    </div>
  );
}

export default App;
