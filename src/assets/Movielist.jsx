import { useEffect, useState } from "react";
import _ from "lodash";
import "./Movielist.css";
import Moviecard from "./Moviecard";

const Movielist = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort, filterMovies]);

  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=cdf92495b9a89f55634f7ea7874969ff"
    );
    const data = await res.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleRating = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;

    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <section className=" align-items movies-ratings">
        <h3 className="movies-header">Popular 🔥</h3>
        <div className="align-items filter-sort">
          <ul className="align_center movie_filter">
            <li
              className={minRating === 7 ? "active" : "li"}
              onClick={() => handleRating(7)}
            >
              7+ Star
            </li>
            <li
              className={minRating === 6 ? "active" : "li"}
              onClick={() => handleRating(6)}
            >
              6+ Star
            </li>
            <li
              className={minRating === 5 ? "active" : "li"}
              onClick={() => handleRating(5)}
            >
              5+ Star
            </li>
          </ul>
          <select name="by" id="" onChange={handleSort} value={sort.by}>
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select name="order" id="" onChange={handleSort} value={sort.order}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </section>
      <div className="main">
        {filterMovies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
