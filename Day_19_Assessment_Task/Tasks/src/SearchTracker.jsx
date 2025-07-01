import React, { useEffect, useState } from 'react';

const SearchTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm.length > 3) {
      console.log(`Search term changed: ${searchTerm}`);
    }
  }, [searchTerm]);

  return (
    <>
    <hr />
      <h2> 6 : useEffect Dependency Practice</h2>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <hr />
    </>
  );
};

export default SearchTracker;
