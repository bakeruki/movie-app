import "./slider.css";

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const MovieSlider = (props) => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: props.settings.slidesToShow,
    slidesToScroll: props.settings.slidesToScroll,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {props.movies.map((movie, index) => (
          <Link
            to={movie.title ? `/movies/${movie.id}` : `/tv/${movie.id}`}
            key={index}
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className="object-scale-down h-48 rounded-md"
                alt="moviePoster"
              ></img>
              <h1 className="text-slate-100 pr-2 text-sm pt-2">
                {movie.title ? movie.title : movie.name}
              </h1>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
