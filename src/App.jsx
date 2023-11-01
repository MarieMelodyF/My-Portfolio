import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import Header from "./components/Header";
import About from "./components/Aboutme";
import Marvel from "./pages/Projects/Marvel";
import Vinted from "./pages/Projects/Vinted";
import Deliveroo from "./pages/Projects/Deliveroo";
import Rawg from "./pages/Projects/GamePad";
import Footer from "./components/Footer";
import ContactForm from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(Cookies.get("mode") || false);

  const handleMode = (mode) => {
    if (mode) {
      Cookies.set("mode", mode, { expires: 15 });
      setDarkMode(mode);
    } else {
      Cookies.remove("mode");
      setDarkMode(false);
    }
  };

  const [translate, settranslate] = useState(false);

  const handleClick = () => {
    settranslate(!translate);
  };

  return (
    <div>
      <Router>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleMode={handleMode}
          translate={translate}
        />
        <Routes>
          <Route
            path="/"
            element={
              <About
                darkMode={darkMode}
                handleClick={handleClick}
                translate={translate}
              />
            }
          ></Route>
          <Route
            path="/project-rawg"
            element={
              <Rawg
                darkMode={darkMode}
                handleClick={handleClick}
                translate={translate}
              />
            }
          ></Route>
          <Route
            path="/project-marvel"
            element={
              <Marvel
                darkMode={darkMode}
                handleClick={handleClick}
                translate={translate}
              />
            }
          ></Route>
          <Route
            path="/project-vinted"
            element={
              <Vinted
                darkMode={darkMode}
                handleClick={handleClick}
                translate={translate}
              />
            }
          ></Route>
          <Route
            path="/project-deliveroo"
            element={
              <Deliveroo
                darkMode={darkMode}
                handleClick={handleClick}
                translate={translate}
              />
            }
          ></Route>
          <Route
            path="/contact"
            element={<ContactForm darkMode={darkMode} />}
          ></Route>
        </Routes>
      </Router>

      <Footer
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleMode={handleMode}
      />
    </div>
  );
}

export default App;
