import React from 'react';

const Records = () => {
    return (
        <div style={{ textAlign: 'center', padding: '', color:'white'}}>
          <h2>Stock Predictor</h2>
    
          <div style={{ width: '100%', height: '600px'}}>
            <iframe
              src="https://akshayram1-finance-try.hf.space"
              title="Alternative Stock Predictor"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '10px' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
    
          <p>You can explore the Stock news sentiment analysis.</p>
        </div>
      );
}

export default Records;