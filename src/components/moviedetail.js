import React, { useState, useEffect } from "react";

function MovieDetail(props) {
  const [movieDetails, setMovieDetails] = useState([]);

  const getMovieDetails = async () => {
    const url = `https://api.themoviedb.org/3/${
      props.isMovie ? "movie" : "tv"
    }/${props.movie.id}?api_key=${process.env.REACT_APP_TMDBKEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovieDetails(responseJson);
  };

  useEffect(() => {
    getMovieDetails();
  }, [props.isMovie]);

  return (
    <div className="grid grid-cols-2 grid-flow-row">
      <div className="m-5 place-self-center">
        <img
          src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}
          className="object-cover rounded-md mix-blend-normal object-center"
          alt="moviePoster"
        ></img>
      </div>

      <div className="">
        <div className="text-slate-100 text-xl mt-5">
          {props.movie.title ? props.movie.title : props.movie.name}
        </div>
        <div className="flex gap-1 text-slate-300 text-md pt-2 mr-20">
          Genres:
          {props.movie.genres
            ? props.movie.genres?.map((genre, index) => (
                <p className="text-slate-300 text-md" key={index}>
                  {genre.name}
                  {index === props.movie.genres.length - 1 ? "" : ","}
                </p>
              ))
            : movieDetails.genres?.map((genre, index) => (
                <p className="text-slate-300 text-md" key={index}>
                  {genre.name}
                  {index === movieDetails.genres.length - 1 ? "" : ","}
                </p>
              ))}
        </div>
        <div className="text-slate-300 text-md mr-20">
          {props.movie.overview}
        </div>
        <div className="text-slate-400 text-md mr-20">
          {props.isMovie
            ? `Released: ${
                props.movie.release_date
                  ? props.movie.release_date
                  : movieDetails.release_date
              }`
            : `Number of seasons: ${
                props.movie.number_of_seasons
                  ? props.movie.number_of_seasons
                  : movieDetails.number_of_seasons
              }`}
        </div>
        <div className="text-slate-400 text-md mr-20">
          {props.isMovie
            ? `Runtime: ${
                props.movie.runtime ? props.movie.runtime : movieDetails.runtime
              } minutes`
            : `Number of episodes: ${
                props.movie.number_of_episodes
                  ? props.movie.number_of_episodes
                  : movieDetails.number_of_episodes
              }`}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
