import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="inline-flex bg-slate-900 w-full">
      <div className="inline-flex ml-2 my-2">
        <ul className="text-slate-300 inline-flex p-1">
          <li className="px-2 font-medium hover:text-white">
            <Link to="/">Movie App</Link>
          </li>
          <li className="px-2 hover:text-white">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="px-2 hover:text-white">
            <Link to="/tv">TV</Link>
          </li>
          <li className="px-2 hover:text-white">
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
