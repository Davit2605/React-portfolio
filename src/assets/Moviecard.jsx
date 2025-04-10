import "./Moviecard.css";

const Moviecard = ({ movie }) => {
  return (
    <div className="movie-card">
      <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie poster"
        />

        <div className="card-details">
          <h3>{movie.original_title}</h3>
          <div className="date-rating">
            <p>{movie.release_date}</p>
            <p>{movie.vote_average.toFixed(1)} ⭐</p>
          </div>
          <p>{movie.overview.slice(0, 100) + "..."}</p>
        </div>
      </a>
    </div>
  );
};

export default Moviecard;
