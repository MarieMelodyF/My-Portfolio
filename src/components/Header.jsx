import { Link, useLocation } from "react-router-dom";
const Header = ({ darkMode, handleMode }) => {
  const location = useLocation();
  // const queryParams = new URLSearchParams(location.pathname);
  const namePage = location.pathname;
  // const currentPage = queryParams.get("name");
  console.log("=>", namePage);
  return (
    <header className={darkMode ? "dark" : "light"}>
      <section className="scale-in-hor-center">
        <Link to="/">
          <h2 className="myname textShine">Marie Mélody Fontana</h2>
        </Link>
        <div className=" header container">
          {namePage.includes("project") ? (
            <Link
              className={darkMode ? "dark" : "light"}
              style={{ fontSize: "25px" }}
              to="/"
            >
              Projects
            </Link>
          ) : (
            <a href="#projects">
              <h3 className={darkMode ? "dark" : "light"}>Projects</h3>
            </a>
          )}

          <h3>Contact</h3>
        </div>
        <button
          className={darkMode ? "mode-dark" : "mode-light"}
          onClick={() => {
            handleMode(!darkMode);
          }}
        >
          <p>💡</p>
        </button>
      </section>
    </header>
  );
};

export default Header;
