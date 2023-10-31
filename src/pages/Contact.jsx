// ContactForm.js
import React, { useState } from "react";
import axios from "axios";
import linkedin from "../images/linkedin.png";
import github from "../images/gitlogo.png";

function ContactForm({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/contact",
        formData
      );
      console.log("E-mail envoyé avec succès", response.data);
      // Réinitialisez le formulaire ou effectuez d'autres actions après l'envoi
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail", error);
    }
  };

  return (
    <main className={darkMode ? "dark" : "light"}>
      <div className="contact-form">
        <div className="container">
          <div className="contact">
            <h1
              style={{
                color: "rgba(25, 175, 201, 0.708)",
                paddingBottom: "3rem",
              }}
            >
              Contactez-Moi
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nom :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email : </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Message :</label>
                <textarea
                  rows="10"
                  cols="50"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Envoyer</button>
            </form>
          </div>
          <div className="coord container">
            <p>Vous pouvez également me cotnacter par téléphone : </p>
            <p>Marie-Mélody Fontana</p>
            <p>06.98.39.19.90</p>
            <div className="logo-contact">
              <a href="https://www.linkedin.com/in/marie-melody-fontana-250205a7/">
                <img src={linkedin} alt="logo linkedin" />
              </a>

              <a href="https://github.com/MarieMelodyF">
                <img src={github} alt="logo github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactForm;
