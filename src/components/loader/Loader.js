// Loader.jsx

import React from 'react';
import './loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner-container">
        <div className="spinner"></div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
