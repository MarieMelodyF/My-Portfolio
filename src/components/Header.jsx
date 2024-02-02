import { Link, useLocation } from "react-router-dom";
import logo from "/src/images/logo-png.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../pages/Contact";

const Header = ({ darkMode, handleMode, translate, setVisible, visible }) => {
  const location = useLocation();
  const namePage = location.pathname;

  const toggleContactModal = () => {
    setVisible(!visible); // Inverser la valeur de `visible` à chaque clic
  };

  return (
    <header className={darkMode ? "dark" : "light"}>
      <section className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <div className="auto-head">
          {/* <Link to="/">
            <h2 className="myname textShine">Marie Mélody Fontana</h2>
          </Link> */}
          <div className="text container">
            {namePage.includes("project") || namePage.includes("contact") ? (
              <Link
                className={darkMode ? "dark" : "light"}
                style={{ fontSize: "25px" }}
                to="/"
              >
                Projects
              </Link>
            ) : (
              <a href="/#projects">
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
            <a>
              <h3 className="projects" onClick={toggleContactModal}>
                Contact
              </h3>
            </a>

            <Link to="/fun">
              {translate === false ? (
                <div className={darkMode ? "dark" : "light"}>
                  <h3 className="projects">Have fun 😊</h3>
                </div>
              ) : (
                <div className={darkMode ? "dark" : "light"}>
                  <h3 className="projects">Amuse toi 😊</h3>
                </div>
              )}
            </Link>
            <button
              className={darkMode ? "mode-dark" : "mode-light"}
              onClick={() => {
                handleMode(!darkMode);
              }}
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="mode-icon"
              />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL*/}
      {visible && (
        <div className="modal-root">
          <div>
            <ContactForm darkMode={darkMode} setVisible={setVisible} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
