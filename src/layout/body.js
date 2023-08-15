import "../App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Movies from "../pages/movies";
import Search from "../pages/search";
import MovieDetails from "../pages/moviedetails.js";

function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies mediaType={"movie"} />} />
      <Route
        path="/movies/:movieId"
        element={<MovieDetails isMovie={true} />}
      />
      <Route path="/search" element={<Search />} />
      <Route path="/tv" element={<Movies mediaType={"tv"} />} />
      <Route path="/tv/:movieId" element={<MovieDetails isMovie={false} />} />
    </Routes>
  );
}

export default Body;
