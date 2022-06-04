import React, { useState } from 'react'
import './App.css';
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { BsLightbulbOffFill } from 'react-icons/bs'

function App() {
  const [lightMode, setLightMode] = useState(false)

  console.log(lightMode);
  return (
    <div className={lightMode ? null : 'App'}>
      <div className='app-container'>
        <div className='header'>
          <h3> Update </h3>
          <div>
            {
              lightMode ?
                <BsLightbulbOffFill
                  onClick={()=> setLightMode(!lightMode)}
                  size={24}
                  className='light-out'
                />
                :
                <RiLightbulbFlashLine 
                  onClick={()=> setLightMode(!lightMode) }
                  size={28}
                  className='light-icon'
                />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
