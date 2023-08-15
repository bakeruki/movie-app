import "../App.css";

import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieSlider from "../components/movieslider";
import MovieDetail from "../components/moviedetail";

function MovieDetails(props) {
  const params = useParams();
  const movieId = params.movieId;

  const [movie, setMovie] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [movieExists, setMovieExists] = useState(true);

  const [status, setStatus] = useState();

  const getMovieDetails = async () => {
    const url = `https://api.themoviedb.org/3/${
      props.isMovie ? "movie" : "tv"
    }/${movieId}?api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      setMovieExists(false);
      setStatus(response);
      console.log(status);
    }

    const responseJson = await response.json();

    setMovie(responseJson);
  };

  const getRecommendations = async () => {
    const url = `https://api.themoviedb.org/3/${
      props.isMovie ? "movie" : "tv"
    }/${movieId}/recommendations?api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setRecommendations(responseJson.results);
  };

  useEffect(() => {
    getMovieDetails();

    if (movieExists) {
      getRecommendations();
    }
    //eslint-disable-next-line
  }, [movieId]);

  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  if (movieExists) {
    return (
      <div className="mt-3 mx-32">
        <div className="w-full h-fit bg-gradient-to-r from-slate-900 to-slate-600 rounded-md">
          <MovieDetail movie={movie} isMovie={props.isMovie}></MovieDetail>
        </div>
        <div className="flex justify-center my-3">
          <div className="max-w-2xl">
            <div className="mb-2">
              <h1 className="text-slate-100 mb-2 font-regular text-xl">
                {props.isMovie ? `Similar Movies` : `Similar TV`}
              </h1>
              <MovieSlider movies={recommendations} settings={sliderSettings} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="text-red-300 text-xl">
          Error {status.status} occured.
        </div>
      </div>
    );
  }
}

export default MovieDetails;
