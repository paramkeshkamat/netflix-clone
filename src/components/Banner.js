import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../styles/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(requests.fetchNetFlixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };
    fetchMovie();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? `${str.substr(0, n - 1)}...` : str;

  return (
    <header
      className="Banner"
      style={{
        backgroundImage: `url(https:/image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p className="banner-description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner-fadebottom"></div>
    </header>
  );
};

export default Banner;
