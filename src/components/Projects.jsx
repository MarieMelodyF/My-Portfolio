import { Link } from "react-router-dom";
import marvel from "../images/marvel-project.png";
import vinted from "../images/vinted-project.png";
import deliveroo from "../images/Deliveroo-project.png";
import gamepad from "../images/gamepad-project.png";

const Projects = ({ darkMode }) => {
  return (
    <section className={darkMode ? "dark " : "light "}>
      <main id="projects" className="project container">
        <h1>Projetcs</h1>
        <div className="card-project">
          {/* FIRST PROJECT */}
          <div className="projects">
            <div className="cards">
              <h3>GAMEPAD</h3>
              <img src={gamepad} alt="" className="image" />
              <div className="middle">
                <div className="infos">
                  <Link to="/project-rawg">
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND PROJECT */}

          <div className="projects">
            <div className="cards">
              <h3>MARVEL</h3>
              <img src={marvel} alt="" className="image" />
              <div className="middle">
                <div className="infos">
                  <Link to="/project-marvel">
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div classname="projects">
            <div className="cards">
              <h3>MARVEL</h3>
              <img src={marvel} alt="" classname="image" />
              <div className="middle">
                <div className="infos">
                  <Link to="/project-marvel">
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
              <p>
                <a href="https://marvel-orion.netlify.app/" target="_blank">
                  See more
                </a>
              </p>
            </div>
          </div> */}

          {/* THIRD PROJECT */}
          <div className="projects">
            <div className="cards">
              <h3>VINTED</h3>
              <img src={vinted} alt="Avatar" className="image" />
              <div className="middle">
                {/* <div class="mp4">
                  <video loop autoPlay muted class="mp4">
                    <source src={mov_vinted} type="video/mp4" />
                  </video>
                </div> */}
                <div className="infos">
                  <Link to="/project-vinted">
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
              {/* <p>
                <a href="https://vinted-orion.netlify.app/">See more</a>
              </p> */}
            </div>
          </div>
          {/* FOURTH PROJECT */}
          <div className="projects">
            <div className="cards">
              <h3>DELIVEROO</h3>
              <img src={deliveroo} alt="Avatar" className="image" />
              <div className="middle">
                {/* <div class="mp4">
                  <video loop autoPlay muted class="mp4">
                    <source src={mov_deliveroo} type="video/mp4" />
                  </video>
                </div> */}
                <div className="infos">
                  <Link to="/project-deliveroo">
                    <p>Click for details</p>
                  </Link>
                </div>
              </div>
              {/* <p>
                <a href="https://deliveroo-copy.netlify.app/">See more</a>
              </p> */}
            </div>
          </div>
        </div>
        {/* --------------- */}
      </main>
    </section>
  );
};

export default Projects;
