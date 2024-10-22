import React, { useState } from 'react';

const Prediction = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Stock Predictor on Hugging Face</h2>
          <a href="https://huggingface.co/spaces/Akshayram1/Stock" target="_blank" rel="noopener noreferrer">
            <img
              src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
              alt="Hugging Face Stock Predictor"
              style={{ width: '300px', borderRadius: '10px' }}
            />
          </a>
          <p>Click the image to open the Stock Predictor in a new tab.</p>
        </div>
      );
};

export default Prediction;
