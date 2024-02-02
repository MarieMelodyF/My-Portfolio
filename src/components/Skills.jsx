import js from "../images/JavaScript.png";
import html from "../images/HTML5.png";
import axios from "../images/axios.png";
import css3 from "../images/css3.png";
import mongo from "../images/Mongo.png";
import node from "../images/Node.js.png";
import postman from "../images/postman-logo.png";
import react from "../images/react.png";
import npm from "../images/npm-logo.png";
import github from "../images/github.png";

const Skills = ({ darkMode, translate }) => {
  return (
    <div className={darkMode ? "dark " : "light "}>
      <main className="text-shadow-pop-left skills ">
        {!translate ? <h1>Skills</h1> : <h1>Compétences</h1>}
        <div className="skills-logo">
          <img src={js} alt="javascript logo" />
          <img src={html} alt=" html logo" />
          <img src={css3} alt="css logo" />
          <img src={react} alt="react logo" />
          <img src={mongo} alt="mongo logo" style={{ background: "white" }} />
          <img src={node} alt="node logo" />
          <img src={npm} alt="npm logo" />
          <img
            src={postman}
            alt="postman logo"
            style={{ borderRadius: "50%" }}
          />
          <img src={github} alt="github logo" />
          <img src={axios} alt="axios logo" />
        </div>
      </main>
    </div>
  );
};

export default Skills;
