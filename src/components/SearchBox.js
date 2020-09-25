import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <input
      className = 'pa3 ba b--red'
      type = 'search'
      placeholder = 'search by name'
      onChange = {searchChange}
    />    
  );
}

export default SearchBox;