import React, { useState } from 'react';
import logo from './logo.svg';
import Toast from './Toast';
import './App.css';

const App = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
  };

  const hideToast = () => {
    setToastVisible(false);
  };

  return (
    <div>
      <div className='toast-button-container'>
        <img height="180px" src={logo} className="App-logo" alt="logo" /> <br/>
        <button className='toast-button' onClick={showToast}>Show Toast</button>
      </div>
      
        <Toast visiblity={toastVisible} message="This is a toast message with a duration of five seconds!" duration={5000} onClose={hideToast} />
      
    </div>
  );
};

export default App;