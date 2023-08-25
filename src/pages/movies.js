import "../App.css";
import React, { useState, useEffect } from "react";
import MovieSlider from "../components/movieslider";
import TrendingMovieSlider from "../components/trendingmovieslider";

function Movies(props) {
  const [trending, setTrending] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreLists, setGenreLists] = useState([[]]);
  const [genresFetched, setGenresFetched] = useState(false);

  const getTrendingMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/${props.mediaType}/day?api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setTrending(responseJson.results);
  };

  const getGenres = async () => {
    const url = `https://api.themoviedb.org/3/genre/${props.mediaType}/list?api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setGenres(responseJson.genres);
  };

  const discoverByGenre = async (genreID) => {
    const url = `https://api.themoviedb.org/3/discover/${props.mediaType}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreID}&api_key=${process.env.REACT_APP_TMDBKEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    return responseJson;
  };

  const buildGenreLists = async () => {
    const tempCollection = [];
    for (var item in genres) {
      if (!genres.hasOwnProperty(item)) continue;
      const genreList = await discoverByGenre(genres[item].id);
      tempCollection.push(genreList);
    }
    setGenreLists(tempCollection);
    setGenresFetched(true);
  };

  useEffect(() => {
    setGenresFetched(false);
    getTrendingMovies();
    getGenres();
  }, [props.mediaType]);

  useEffect(() => {
    buildGenreLists();
  }, [genres]);

  useEffect(() => {}, [genresFetched]);

  const trendingSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const genreSliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="mx-32">
      <div className="text-slate-100 my-2 font-regular text-xl">
        {props.mediaType === "movie" ? "Trending Movies" : "Trending TV"}
      </div>
      <div className="w-full h-fit bg-gradient-to-r from-slate-900 to-slate-600 rounded-md">
        <div>
          <TrendingMovieSlider
            movies={trending}
            settings={trendingSliderSettings}
          ></TrendingMovieSlider>
        </div>
      </div>
      <div>
        {genresFetched
          ? genreLists.map((list, index) => (
              <div
                className="flex justify-center items-center my-3"
                key={index}
              >
                <div className="max-w-2xl">
                  <h1 className="text-slate-100 my-2 font-regular text-md">
                    Popular {genres[index].name}{" "}
                    {props.mediaType === "movie" ? "Movies" : "TV"}
                  </h1>
                  <MovieSlider
                    movies={list.results}
                    settings={genreSliderSettings}
                  ></MovieSlider>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Movies;
