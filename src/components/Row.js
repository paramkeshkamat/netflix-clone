import { useState, useEffect } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../styles/Row.css";
const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(fetchURL);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [fetchURL]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie, TMDBId) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie, { tmdbId: TMDBId })
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((err) => console.log("Temporary Unavailable"));
    }
  };

  return (
    <div className="Row">
      <h2 className="title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie?.id}
            onClick={() => handleClick(movie?.title, movie?.id)}
            className={`row-poster ${isLargeRow && "row-largePoster"}`}
            src={`${base_url}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.title}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
