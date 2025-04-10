import "./Header.css";

const Header = () => {
  return (
    <nav className=" align-items nav-container ">
      <h2 className="header">🎞️ Free Movies 🎞️</h2>
        <div className="header-links">
        <ul className="align-items">
          <li>
            <a>Popular 🔥</a>
          </li>
          <li>
            <a >Top-Rated ⭐</a>
          </li>
          <li>
            <a>Upcoming 🥳</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
