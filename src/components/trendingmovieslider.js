import "./slider.css";

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import MovieDetail from "./moviedetail";

function TrendingMovieSlider(props) {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: props.settings.slidesToShow,
    slidesToScroll: props.settings.slidesToScroll,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {props.movies.map((movie, index) => (
          <Link
            to={movie.title ? `/movies/${movie.id}` : `/tv/${movie.id}`}
            key={index}
          >
            <MovieDetail
              movie={movie}
              isMovie={movie.title ? true : false}
            ></MovieDetail>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingMovieSlider;
