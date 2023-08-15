import "../App.css";
import React, { useState, useEffect } from "react";
import MovieSlider from "../components/movieslider";
import TrendingMovieSlider from "../components/trendingmovieslider";

function Movies(props) {
  const [trending, setTrending] = useState([]);

  const getTrendingMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/${props.mediaType}/day?api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setTrending(responseJson.results);
    console.log(responseJson.results);
  };

  useEffect(() => {
    getTrendingMovies();
  }, [props.mediaType]);

  const trendingSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
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
    </div>
  );
}

export default Movies;
