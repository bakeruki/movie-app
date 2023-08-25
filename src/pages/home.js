import "../App.css";
import { React, useState, useEffect } from "react";
import MovieSlider from "../components/movieslider";

function Home() {
  const [playingMovies, setPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);

  const getPlayingMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setPlayingMovies(responseJson.results);
  };

  const getPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setPopularMovies(responseJson.results);
  };

  const getPopularTV = async () => {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setPopularTV(responseJson.results);
  };

  useEffect(() => {
    getPlayingMovies();
    getPopularMovies();
    getPopularTV();
  }, []);

  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="flex justify-center items-center m-3">
      <div className="w-9/12">
        <div className="mb-2">
          <h1 className="text-slate-100 mb-2 font-regular text-xl">
            Now Playing In Theaters
          </h1>
          <MovieSlider movies={playingMovies} settings={sliderSettings} />
        </div>
        <div className="mb-2">
          <h1 className="text-slate-100 mb-2 font-regular text-xl">
            Popular Movies
          </h1>
          <MovieSlider movies={popularMovies} settings={sliderSettings} />
        </div>
        <div className="mb-2">
          <h1 className="text-slate-100 mb-2 font-regular text-xl">
            Popular TV
          </h1>
          <MovieSlider movies={popularTV} settings={sliderSettings} />
        </div>
      </div>
    </div>
  );
}

export default Home;
