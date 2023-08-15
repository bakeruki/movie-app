import "../App.css";
import { React, useState, useEffect } from "react";
import SearchBox from "../components/searchbox";
import MovieList from "../components/movielist";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const getSearchResults = async () => {
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.results) {
      setSearchResults(responseJson.results);
    }
  };

  useEffect(() => {
    getSearchResults();
  }, [query]);

  return (
    <div>
      <div className="text-slate-200 my-2">
        <div className="flex justify-center text-lg p-1">
          Search for Movies and TV
        </div>
        <div className="flex justify-center p-1">
          <SearchBox query={query} setQuery={setQuery} />
        </div>
      </div>
      <div className="flex justify-center items-center my-3">
        <div className="max-w-screen-md">
          <div className="text-slate-100 pb-2 text-xl font-regular">
            {query !== ""
              ? "Results"
              : "Start typing to find movies and shows!"}
          </div>
          <MovieList movies={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default Search;
