import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static is-medium">Search</button>
        </p>
        <p className="control">
          <input
            className="input is-medium input-control"
            type="text"
            placeholder="Burger samosa chai"
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">NEAR</button>
        </p>
        <p className="control">
          <input
            className="input is-medium input-control"
            type="text"
            placeholder="Your email"
          />
        </p>
        <div
          Style={"background: red"}
          className="button is-medium search-button"
        >
          <span Style={"color: white"} className="icon is-small">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
