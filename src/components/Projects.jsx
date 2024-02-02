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
        {!translate ? (
          <h1 className="text-shadow-pop-left ">Projetcs</h1>
        ) : (
          <h1 className="text-shadow-pop-left  ">Projets</h1>
        )}

        <div className="card-project">
          {/* FIRST PROJECT */}
          <div className="projects">
            <div class="myCard GamePad">
              <div class="innerCard">
                <div class="frontSide"></div>
                <div class="backSide">
                  <Link to="/project-rawg" onClick={scrollToTop}>
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
            </div>
            <p class="titleProject">GamePad</p>
            <div className="tech">
              <span>React</span> <span>JavaScript</span> <span>MongoDB</span>
              <span> API</span> <span>Axios</span> <span>Express</span>
            </div>
          </div>

          {/* SECOND PROJECT */}
          <div className="projects">
            <div class="myCard Marvel">
              <div class="innerCard">
                <div class="frontSide"></div>
                <div class="backSide">
                  <Link to="/project-marvel" onClick={scrollToTop}>
                    <p>Click for details</p>
                  </Link>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
            <p class="titleProject">Marvel</p>
            <div className="tech">
              <span>React</span> <span>JavaScript</span> <span>MongoDB</span>
              <span> API</span> <span>Axios</span> <span>Express</span>
            </div>
          </div>
          {/* 
        

          {/* THIRD PROJECT */}
          <div className="projects">
            <div class="myCard Vinted">
              <div class="innerCard">
                <div class="frontSide"></div>
                <div class="backSide">
                  <Link to="/project-vinted" onClick={scrollToTop}>
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
            </div>
            <p class="titleProject">Vinted</p>

            <div className="tech">
              <span>React</span> <span>JavaScript</span> <span>MongoDB</span>
              <span> API</span> <span>Axios</span> <span>Express</span>
            </div>
          </div>

          {/* FOURTH PROJECT */}
        </div>
        {/* --------------- */}
      </main>
    </section>
  );
};

export default Projects;
