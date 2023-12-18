import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

const Toast = ({ visiblity, message, duration, onClose }) => {

  useEffect(() => {
    var timer;
    if(visiblity){
         timer = setTimeout(() => {
            onClose();
          }, duration);
    }
   
    return () => clearTimeout(timer);
  }, [duration, onClose, visiblity]);

  const handleClose = () => {
    onClose();
  };

  if(!visiblity){
    return null;
  }

  return (
    <div className={`toast visible}`}>
      <span>{message}</span>
      <button className="close-button" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;