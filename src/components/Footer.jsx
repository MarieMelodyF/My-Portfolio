import { useState } from "react";
useState;
const Footer = ({ darkMode }) => {
  return (
    <footer className={darkMode ? "dark " : "light "}>
      <div className="container">
        <div className="foot">
          <div>
            <p>Développeuse web</p>
          </div>
          <div>
            <p>Site product by Marie-Mélody Fontana ®</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
