import { Link, useLocation } from "react-router-dom";
const Header = ({ darkMode, handleMode, translate }) => {
  const location = useLocation();
  const namePage = location.pathname;
  console.log(namePage);
  return (
    <header className={darkMode ? "dark" : "light"}>
      <section className="scale-in-hor-center ">
        <div className="auto-head">
          <Link to="/">
            <h2 className="myname textShine">Marie Mélody Fontana</h2>
          </Link>
          <div className=" header container">
            {namePage.includes("project") || namePage.includes("contact") ? (
              <Link
                className={darkMode ? "dark" : "light"}
                style={{ fontSize: "25px" }}
                to="/"
              >
                Projects
              </Link>
            ) : (
              <a href="#projects">
                {translate === false ? (
                  <div className={darkMode ? "dark" : "light"}>
                    <h3 className="projects">Projects</h3>
                  </div>
                ) : (
                  <div className={darkMode ? "dark" : "light"}>
                    <h3 className="projects">Projets</h3>
                  </div>
                )}
              </a>
            )}
            <Link to="/contact">
              <h3 className={darkMode ? "dark" : "light"}>Contact</h3>
            </Link>
            <Link to="/fun">
              <h3 className={darkMode ? "dark" : "light"}> Have Fun 😉</h3>
            </Link>
          </div>
          <button
            className={darkMode ? "mode-dark" : "mode-light"}
            onClick={() => {
              handleMode(!darkMode);
            }}
          >
            <p>💡</p>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
