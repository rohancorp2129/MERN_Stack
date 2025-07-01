import React, { useEffect, useState } from 'react';

const App = () => {
  const [myName, setMyName] = useState('Rahul');
  const [myAge, setMyAge] = useState(25);
  const [myCity, setMyCity] = useState('Patna');
  const [myCountry, setMyCountry] = useState('India');
  const [myGender] = useState('Male');
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('purple'); // Define the color state

  useEffect(() => {
    setTimeout(() => {
      setColor('red'); // Update the color state after 3 seconds
    }, 3000);
  }, []); // This effect will only run once after the component mounts

  return (
    <>
      <h1 style={{ color: color }}>React commonly Hooks : useState</h1>

      <h1 style={{ color: color }}>My Name is {myName}</h1>
      <button onClick={() => setMyName('Rahul Rakh')}>Change Name</button>
      <h1 style={{ color: color }}>My Age is {myAge}</h1>
      <button onClick={() => setMyAge(26)}>Change Age</button>
      <h1 style={{ color: color }}>My City is {myCity}</h1>
      <button onClick={() => setMyCity('Delhi')}>Change City</button>
      <h1 style={{ color: color }}>My Country is {myCountry}</h1>
      <button onClick={() => setMyCountry('USA')}>Change Country</button>
      <h1 style={{ color: color }}>My myGender is {myGender}</h1>

      <hr />

      <h1 style={{ color: color }}>Hello {myName} you visited {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setCount(count - 1)}>Reduce Count</button>
      
    </>
  );
};

export default App;