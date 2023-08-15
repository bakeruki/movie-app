import "../App.css";
import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        placeholder="Type to search"
        className="rounded-lg bg-slate-700 text-gray-900 text-sm focus:ring-blue-500 dark:text-white p-1.5 w-96"
        value={props.value}
        onChange={(event) => {
          props.setQuery(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
