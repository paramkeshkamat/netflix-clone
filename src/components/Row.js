import { useState, useEffect } from "react";
import axios from "../axios";
import "../styles/Row.css";
const base_url = "https:/image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(fetchURL);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [fetchURL]);

  return (
    <div className="Row">
      <h2 className="title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          const { id, name, poster_path, backdrop_path } = movie;
          return (
            <img
              key={id}
              className={`row-poster ${isLargeRow && "row-largePoster"}`}
              src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
              alt={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
