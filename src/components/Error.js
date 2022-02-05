import React from 'react';

const Error = () => (
  <div style={{ textAlign: 'center' }}>
    <h2 style={{ letterSpacing: 3 }}>
      Sorry, your searching returns no result, please comeback oni-chan...
    </h2>
    <img
      src={require('../icon.svg')}
      alt="loli is pointing..."
      className="img-error"
    />
  </div>
);

export default Error;
