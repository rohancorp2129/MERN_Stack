import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextData from './Context/contextData'; // Correct import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextData />
  </React.StrictMode>
);
