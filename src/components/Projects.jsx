import { Link } from "react-router-dom";
import marvel from "../images/marvel-project.png";
import vinted from "../images/vinted-project.png";
import deliveroo from "../images/Deliveroo-project.png";
import gamepad from "../images/gamepad-project.png";

const Projects = ({ darkMode, translate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className={darkMode ? "dark " : "light "}>
      <main id="projects" className="project container">
        {!translate ? <h1>Projetcs</h1> : <h1>Projets</h1>}

        <div className="card-project">
          {/* FIRST PROJECT */}
          <div className="projects">
            <div className="cards">
              <h3>GAMEPAD</h3>
              <img src={gamepad} alt="" className="image" />
              <div className="middle">
                <div className="infos">
                  <Link to="/project-rawg" onClick={scrollToTop}>
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tech">
              <span>React</span> <span>JavaScript</span> <span>MongoDB</span>
              <span> API</span> <span>Axios</span> <span>Express</span>
            </div>
          </div>

          {/* SECOND PROJECT */}

          <div className="projects">
            <div className="cards">
              <h3>MARVEL</h3>
              <img src={marvel} alt="" className="image" />
              <div className="middle">
                <div className="infos">
                  <Link to="/project-marvel" onClick={scrollToTop}>
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tech">
              <span>React</span> <span>JavaScript</span> <span>MongoDB</span>
              <span> API</span> <span>Axios</span> <span>Express</span>
            </div>
          </div>
          {/* 
        

          {/* THIRD PROJECT */}
          <div className="projects">
            <div className="cards">
              <h3>VINTED</h3>
              <img src={vinted} alt="Avatar" className="image" />
              <div className="middle">
                <div className="infos">
                  <Link to="/project-vinted" onClick={scrollToTop}>
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tech">
              <span>React</span> <span>JavaScript</span> <span>MongoDB</span>
              <span> API</span> <span>Axios</span> <span>Express</span>
            </div>
          </div>

          {/* FOURTH PROJECT */}
          <div className="projects">
            <div className="cards">
              <h3>DELIVEROO</h3>
              <img src={deliveroo} alt="Avatar" className="image" />
              <div className="middle">
                <div className="infos">
                  <Link to="/project-deliveroo" onClick={scrollToTop}>
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tech">
              <span>React</span> <span>JavaScript</span> <span>MongoDB</span>
              <span> API</span>
            </div>
          </div>
        </div>
        {/* --------------- */}
      </main>
    </section>
  );
};

export default Projects;
