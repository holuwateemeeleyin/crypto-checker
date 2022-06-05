import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import axios from 'axios'

function App() {
  const [lightMode, setLightMode] = useState(getInitialMode())
  const [loading, setLoading] = useState(true)
  const [cryptos, setCryptos] = useState()

  useEffect(()=> {
    localStorage.setItem('LightMode', lightMode)
  }, [lightMode])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=60&page=1&sparkline=false"

  useEffect(()=> {
    setLoading(true)
    axios.get(url)
    .then((res) => {
      setCryptos(res.data)
      // console.log(res.data);
    })
    .catch((err) => console.error(err))
    setLoading(false)
  }, [])
  
  // Set initial state of the Mode
  function getInitialMode() {
    const temp = localStorage.getItem("LightMode")
    return temp === 'true'
  }

  if(loading){
    return <div className='loader-container'>
      <div className='loader'></div>
    </div>
  }
  return (
    <div className={lightMode ? null : 'App'}>
      <div className='app-container'>
        <Header lightMode={lightMode} setLightMode={setLightMode}/>
         <Home cryptos={cryptos}/>     
      </div>
    </div>
  );
}

export default App;
