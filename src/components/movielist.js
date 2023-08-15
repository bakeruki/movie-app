import React from "react";
import { Link } from "react-router-dom";

const movieList = (props) => {
  return (
    <div className="grid grid-cols-5 grid-flow-row gap-2">
      {props.movies.map((movie, index) => (
        <Link
          to={
            movie.media_type === "movie"
              ? `/movies/${movie.id}`
              : `/tv/${movie.id}`
          }
        >
          <div>
            <div className="pr-1">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className="object-scale-down h-48 rounded"
                alt="moviePoster"
              ></img>
            </div>
            <div className="text-sm text-slate-200 pr-1 mr-3">
              {movie.title ? movie.title : movie.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default movieList;
