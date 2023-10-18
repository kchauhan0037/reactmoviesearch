import React, { useState } from 'react';

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Searchbar;