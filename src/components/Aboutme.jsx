import me from "../images/Me.png";
import Skills from "./Skills";
import Projects from "./Projects";

const About = ({
  darkMode,
  setDarkMode,
  handleMode,
  handleClick,
  translate,
}) => {
  return (
    <section className={darkMode ? "dark " : "light "}>
      <main className="aboutme container">
        <button className="translate" onClick={handleClick}>
          {translate ? <p>Traduire Ang</p> : <p>Translate Fr</p>}
        </button>
        <div className="title-about">
          {!translate ? (
            <h1 className="tracking-in-contract"> About Me :</h1>
          ) : (
            <h1 className="tracking-in-contract"> A Propos de moi :</h1>
          )}
        </div>
        <div className="card-me ">
          <div className="me">
            <img src={me} style={{ height: "300px" }} alt="" />
          </div>
          <div className="text-about">
            <div>
              <p>
                {!translate ? (
                  <div>
                    <p>My name is Marie - Mélody Fontana</p>
                    <br />
                    <p>
                      I'm a Developper web FullStack based in Paris, France.
                    </p>
                    <br />
                    <p>
                      I developed several front-end and back-end website clones
                      during my studies.
                    </p>

                    <br />

                    <p>
                      I working on divers projetcs during my formation, you can
                      see this on category "projects". I'm passionate about web
                      development and how it works. I'm always looking for new
                      things to learn. I'm currently looking for a work
                      placement as part of my studies (professional
                      qualification level bac+3/4) so that I can expand my
                      knowledge more quickly and contribute the know-how I've
                      acquired through my previous experience.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>Je m'appelle Marie - Mélody Fontana</p>
                    <br />
                    <p>
                      Je suis une développeuse web FullStack basée à Paris,
                      France.
                    </p>
                    <br />

                    <p>
                      J'ai développé plusieurs clones de sites web front-end et
                      back-end pendant mes études.
                    </p>
                    <br />
                    <p>
                      J'ai travaillé sur divers projets durant ma formation,
                      vous pouvez le voir dans la catégorie "projets". Je suis
                      passionné par le développement web et son fonctionnement.
                      Je suis toujours à la recherche de nouvelles choses à
                      apprendre. Je suis actuellement à la recherche d'un stage
                      dans le cadre de mes études (qualification professionnelle
                      niveau bac+3/4) afin d'élargir plus rapidement mes
                      connaissances et d'apporter le savoir-faire que j'ai
                      acquis lors de mes précédentes expériences.
                    </p>
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
        <Skills
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleMode={handleMode}
          handleClick={handleClick}
          translate={translate}
        />
        <Projects
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleMode={handleMode}
          handleClick={handleClick}
          translate={translate}
        />
      </main>
    </section>
  );
};

export default About;
