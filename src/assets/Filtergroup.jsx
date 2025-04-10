const Filtergroup = ({ minRating, handleRating, ratings }) => {
  return (
    <ul className="ratings">
      {ratings.map((rate) => (
        <li
          className={minRating === rate ? "active" : "li"}
          key={rate}
          onClick={() => handleRating({ rate })}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default Filtergroup;
