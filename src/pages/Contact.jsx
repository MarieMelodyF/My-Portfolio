// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import linkedin from "../images/linkedin.png";
// import github from "../images/gitlogo.png";
// import cv from "../images/CV-MarieMelodyFontana.pdf";
// import { useNavigate } from "react-router-dom";

// function ContactForm({ darkMode, setVisible }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const navigate = useNavigate(); // Initialiser la fonction de navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://site--myportfolio-back--r2txk865xjj8.code.run/contact",
//         formData
//       );
//       toast.success("mail has been sent");
//       setTimeout(() => {
//         navigate("/");
//       }, 2500);

//       console.log("E-mail envoyé avec succès", response.data);
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//     } catch (error) {
//       console.error("Erreur lors de l'envoi de l'e-mail", error.response);
//       toast.error("Please fill in all fields");
//     }
//   };

//   return (
//     <main className={darkMode ? "dark" : "light"}>
//       <Toaster
//         toastOptions={{
//           style: {
//             borderRadius: "10px",
//             border: "2px solid #050505",
//             padding: "16px",
//             backgroundColor: "##d1d1d1",
//           },
//         }}
//       />
//       <div className="contact-form">
//         <div className="container">
//           <div className="contact">
//             <h1
//               style={{
//                 color: "rgba(25, 175, 201, 0.708)",
//                 paddingBottom: "3rem",
//               }}
//             >
//               Contactez-Moi
//             </h1>
//             <form id="myForm" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name">Nom :</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email">Email : </label>

//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message">Message :</label>
//                 <textarea
//                   rows="10"
//                   cols="50"
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                 />
//               </div>
//               <button type="submit">Envoyer</button>
//             </form>
//           </div>
//           <div className="coord container">
//             <p>Vous pouvez également me contacter par téléphone : </p>
//             <p>Marie-Mélody Fontana</p>
//             <p>06.98.39.19.90</p>
//             <a
//               href={cv}
//               target="blank"
//               className={darkMode ? "dark" : "light"}
//               style={{ textDecoration: "underline" }}
//             >
//               See Resume
//             </a>
//             <div className="logo-contact">
//               <a
//                 href="https://www.linkedin.com/in/marie-melody-fontana-250205a7/"
//                 target="_blank"
//               >
//                 <img src={linkedin} alt="logo linkedin" />
//               </a>

//               <a href="https://github.com/MarieMelodyF" target="_blank">
//                 <img src={github} alt="logo github" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default ContactForm;
// ------
// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import linkedin from "../images/linkedin.png";
// import github from "../images/gitlogo.png";
// import cv from "../images/CV-MarieMelodyFontana.pdf";
// import { useNavigate } from "react-router-dom";

// const Modal = ({ setVisible, darkMode }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const navigate = useNavigate(); // Initialiser la fonction de navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://site--myportfolio-back--r2txk865xjj8.code.run/contact",
//         formData
//       );
//       toast.success("mail has been sent");
//       setTimeout(() => {
//         navigate("/");
//       }, 2500);

//       console.log("E-mail envoyé avec succès", response.data);
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//     } catch (error) {
//       console.error("Erreur lors de l'envoi de l'e-mail", error.response);
//       toast.error("Please fill in all fields");
//     }
//   };

//   return (
//     <div className="modal-content">
//       <Toaster
//         toastOptions={{
//           style: {
//             borderRadius: "10px",
//             border: "2px solid #050505",
//             padding: "16px",
//             backgroundColor: "##d1d1d1",
//           },
//         }}
//       />

//       <div className="modal ">
//         {/* button pour fermer la modal */}
//         <button
//           onClick={() => {
//             setVisible(false);
//             console.log("fermé");
//           }}
//         >
//           X
//         </button>
//         <div className="contact">
//           <h1
//             style={{
//               color: "rgba(25, 175, 201, 0.708)",
//               paddingBottom: "3rem",
//             }}
//           >
//             Contactez-Moi
//           </h1>
//           <form id="myForm" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name">Nom :</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="email">Email : </label>

//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="message">Message :</label>
//               <textarea
//                 rows="10"
//                 cols="50"
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//               />
//             </div>
//             <button type="submit">Envoyer</button>
//           </form>
//           {/* <div className="coord container"> */}
//           <p>Vous pouvez également me contacter par téléphone : </p>
//           <p>Marie-Mélody Fontana</p>
//           <p>06.98.39.19.90</p>
//           <a
//             href={cv}
//             target="blank"
//             className={darkMode ? "dark" : "light"}
//             style={{ textDecoration: "underline" }}
//           >
//             See Resume
//           </a>
//           <div className="logo-contact">
//             <a
//               href="https://www.linkedin.com/in/marie-melody-fontana-250205a7/"
//               target="_blank"
//             >
//               <img src={linkedin} alt="logo linkedin" />
//             </a>

//             <a href="https://github.com/MarieMelodyF" target="_blank">
//               <img src={github} alt="logo github" />
//             </a>
//           </div>
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import linkedin from "../images/linkedin.png";
import github from "../images/gitlogo.png";
import cv from "../images/CV-MarieMelodyFontana.pdf";
import { useNavigate } from "react-router-dom";

const Modal = ({ setVisible, darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate(); // Initialiser la fonction de navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://site--myportfolio-back--r2txk865xjj8.code.run/contact",
        formData
      );
      toast.success("mail has been sent");
      setTimeout(() => {
        navigate("/");
      }, 2500);

      console.log("E-mail envoyé avec succès", response.data);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail", error.response);
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="modal-content">
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "10px",
            border: "2px solid #050505",
            padding: "16px",
            backgroundColor: "##d1d1d1",
          },
        }}
      />

      <div className="modal">
        {/* bouton pour fermer la modal */}
        <button
          onClick={() => {
            setVisible(false);
            console.log("fermé");
          }}
        >
          X
        </button>
        <h1
          style={{
            color: "rgba(25, 175, 201, 0.708)",
            paddingBottom: "3rem",
          }}
        >
          Contactez-Moi
        </h1>
        <div className="contact">
          <form id="myForm" onSubmit={handleSubmit}>
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
                rows="5"
                cols="50"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Envoyer</button>
          </form>
          <div className="coord container">
            <p>Vous pouvez également me contacter par téléphone : </p>
            <p>Marie-Mélody Fontana</p>
            <p>06.98.39.19.90</p>
            <a
              href={cv}
              target="blank"
              className={darkMode ? "dark" : "light"}
              style={{ textDecoration: "underline" }}
            >
              Voir CV
            </a>
            <div className="logo-contact">
              <a
                href="https://www.linkedin.com/in/marie-melody-fontana-250205a7/"
                target="_blank"
              >
                <img src={linkedin} alt="logo linkedin" />
              </a>

              <a href="https://github.com/MarieMelodyF" target="_blank">
                <img src={github} alt="logo github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
