import me from "../images/Me.png";
import Skills from "./Skills";
import Projects from "./Projects";

const About = ({ darkMode, setDarkMode, handleMode }) => {
  return (
    <section className={darkMode ? "dark " : "light "}>
      <main className="aboutme container">
        <div className="title-about">
          <h1 className="tracking-in-contract"> About Me :</h1>
        </div>
        <div className="card-me">
          <div className="me">
            <img src={me} style={{ height: "300px" }} alt="" />
          </div>
          <div className="text-about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              maxime minima odit sapiente itaque quibusdam rem odio recusandae
              dolor! Aut nesciunt enim facilis odio aspernatur rerum adipisci
              quaerat sint dolores. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam quas atque nobis praesentium corporis
              saepe aut eveniet odio eaque natus cum illum esse, non ab ut
              vitae, delectus in autem! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tempora maxime minima odit sapiente itaque
              quibusdam rem odio recusandae dolor! Aut nesciunt enim facilis
              odio aspernatur rerum adipisci quaerat sint dolores. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Aliquam quas atque
              nobis praesentium corporis saepe aut eveniet odio eaque natus cum
              illum esse, non ab ut vitae, delectus in autem!
            </p>
          </div>
        </div>
        <Skills
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleMode={handleMode}
        />
        <Projects
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleMode={handleMode}
        />
      </main>
    </section>
  );
};

export default About;
