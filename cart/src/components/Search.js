import React from "react";

const Search = ({ searchCourse, courseSearchUserFunction }) => {
  return (
    <header className="App-header">
      <h1>My Shopping Cart</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for GFG products..."
          value={searchCourse}
          onChange={courseSearchUserFunction}
        />
      </div>
    </header>
  );
}

export default Search;
