// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
    <h1 style={{ textAlign: 'center', }}>Technologies</h1>
    <h2 style={{ textAlign: 'center' }}>Frontend Technologies</h2>
    <ul style={{ listStyle: 'disc', padding: 0, margin: 0, textAlign: 'center' }}>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Angular</li>
      <li>Vue.js</li>
    </ul>

    <h2 style={{ textAlign: 'center' }}>Backend Technologies</h2>
    <ul style={{ listStyle: 'disc', padding: 0, margin: 0, textAlign: 'center' }}>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>Django</li>
      <li>Flask</li>
      <li>Ruby on Rails</li>
      <li>PHP</li>
    </ul>

    <h2 style={{ textAlign: 'center' }}>Full Stack Technologies</h2>
    <ul style={{ listStyle: 'disc', padding: 0, margin: 0, textAlign: 'center' }}>
      <li>MERN (MongoDB, Express.js, React, Node.js)</li>
      <li>MEAN (MongoDB, Express.js, Angular, Node.js)</li>
      <li>MEVN (MongoDB, Express.js, Vue.js, Node.js)</li>
      <li>LAMP (Linux, Apache, MySQL, PHP)</li>
    </ul>
  </div>
);