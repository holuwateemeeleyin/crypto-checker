import React, { useState } from 'react'
import './App.css';

function App() {
  const [lightMode, setLightMode] = useState(false)
  
  console.log(lightMode);
  return (
    <div className={lightMode ? null : 'App'}>
      <div className='app-container'>
        <div className='header'>
          <h5>Header</h5>
          <div>
            <input
              type='checkbox'
              onChange={() => setLightMode(!lightMode)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
