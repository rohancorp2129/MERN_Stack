// src/Context/contextData.jsx

import React from 'react';
// Step 1: Import createContext to create context objects
import { createContext } from 'react';
// Step 2: Import the Consumer component which will use the context values
import Consumer from './Consumer';

// Step 3: Create context variables
const uName = createContext();
const uEmail = createContext();

// Step 4: Create ContextData component to provide context values
const ContextData = () => {
  return (
    // Step 5: Use Provider to pass values to children
    <uName.Provider value="Rohan">
      <uEmail.Provider value="rohan@gmail.com">
        <Consumer />
      </uEmail.Provider>
    </uName.Provider>
  );
};

// Step 6: Export both the component and the context variables
export default ContextData;
export { uName, uEmail };
