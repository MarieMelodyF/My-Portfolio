// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import Home from "/src/images/rawg/Home.png/";
// import OneGame from "/src/images/rawg/OneGame.png/";
// import GameReview from "/src/images/rawg/GameReview.png/";
// import GameFav from "/src/images/rawg/GameFav.png/";
// import log from "/src/images/rawg/log.png/";
// import "swiper/css";
// import "swiper/css/navigation";

// const Rawg = ({ darkMode, handleClick, translate }) => {
//   return (
//     <>
//       <section className={darkMode ? "dark " : "light "}>
//         <main>
//           <div className="title">
//             <h1>Gamepad-Rawg</h1>

//             {!translate ? (
//               <h3>Video game census website</h3>
//             ) : (
//               <h3> Site de recensement de jeux videos</h3>
//             )}

//             <button className="translate" onClick={handleClick}>
//               {translate ? <p>Traduire Ang</p> : <p>Translate Fr</p>}
//             </button>
//           </div>
//           <div className="underline"></div>
//           <div className="rawg">
//             <div className="container-project">
//               <div className="car-rawg">
//                 <Swiper
//                   modules={[Navigation, Pagination, Scrollbar, A11y]}
//                   spaceBetween={50}
//                   slidesPerView={1}
//                   navigation
//                   pagination={{ clickable: true }}
//                   className="img-rawg"
//                 >
//                   <SwiperSlide>
//                     <img src={Home} alt="te" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src={OneGame} alt="" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src={GameReview} alt="" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src={GameFav} alt="" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src={log} alt="" />
//                   </SwiperSlide>
//                 </Swiper>
//               </div>

//               <div className="about-rawg">
//                 <div className="about-rigth">
//                   {!translate ? (
//                     <div className="col-left">
//                       <h5>Home :</h5>
//                       <p>- Displays every video game in the world.</p>
//                       <p>- The ability to change pages.</p>
//                       <p>- A login/account creation button.</p>
//                       <p>
//                         - A My Favorites button, which requires you to be logged
//                         in.
//                       </p>
//                       <p>- A logout button</p>
//                       {/* ---- */}
//                       <h5>One game:</h5>
//                       <p>
//                         - Displays game information (platform, date, genre,
//                         developer, age, description)
//                       </p>
//                       <p>- Thumbnail photos of the game.</p>
//                       <p>- Existing votes.</p>
//                       <p>- A trailer video, if available.</p>
//                       <p>
//                         - An add to collection button, which requires you to be
//                         logged in.
//                       </p>
//                       <p>
//                         - An add a review button, which requires you to be
//                         logged in
//                       </p>
//                       <p>
//                         - All games in the same series (possibility to browse
//                         the game the game with a click)
//                       </p>
//                       <p>- Existing reviews are displayed</p>
//                       <p>- Un bouton de deconnexion</p>
//                       {/* ---- */}
//                       <br />
//                     </div>
//                   ) : (
//                     <div className="col-left">
//                       <h5>Home :</h5>
//                       <p>- Affiche tout les jeux vidéos existant au monde.</p>
//                       <p>- Possibilité de changé de page.</p>
//                       <p>- Un bouton de connexion/creation de compte.</p>
//                       <p>
//                         - Un bouton Mes Favoris, qui nécessite d'être connecté
//                       </p>
//                       <p>- Un bouton de deconnexion</p>
//                       {/* ---- */}
//                       <h5>Jeu unique :</h5>
//                       <p>
//                         - Affiche les informations du jeux (plateforme, date,
//                         genre, développeur, age, description)
//                       </p>
//                       <p>- Des photos miniatures du jeux .</p>
//                       <p>- Les votes existant.</p>
//                       <p>- Une vidéo trailer, si existante.</p>
//                       <p>
//                         - Un bouton add to collection, qui nécessite d'être
//                         connecté
//                       </p>
//                       <p>
//                         - Un bouton add a review, qui nécessite d'être connecté
//                       </p>
//                       <p>
//                         - Tous les jeux de la même série (possiblité de naviguer
//                         sur le jeu au click)
//                       </p>
//                       <p>- Les commentaires existant sont affichés</p>
//                       <p>- Un bouton de deconnexion</p>
//                       {/* ---- */}
//                       <br />
//                     </div>
//                   )}

//                   {!translate ? (
//                     <div className="col-rigth">
//                       <br />

//                       <h5>My collection :</h5>

//                       <p>- See all favorite games</p>
//                       <p>
//                         Possibility to change the navigation on the favorite
//                         game, on click
//                       </p>
//                       <p>- A button for deleting a favorite game</p>
//                       <p>- A logout button</p>
//                       {/* ---- */}
//                       <br />
//                       <h5>Login :</h5>
//                       <p> - Possibility of logging in</p>
//                       <p> - Possibility to create an account</p>
//                     </div>
//                   ) : (
//                     <div className="col-rigth">
//                       <br />

//                       <h5>Ma collection :</h5>

//                       <p>- Voir tout les jeux en favoris</p>
//                       <p>
//                         - Possibilité de changé de naviguer sur le jeu favoris,
//                         au click
//                       </p>
//                       <p>- Un bouton pour supprimer un jeu en favoris</p>
//                       <p>- Un bouton de deconnexion</p>
//                       {/* ---- */}
//                       <br />
//                       <h5>Connexion :</h5>
//                       <p>- Possiblité de se connecter</p>
//                       <p>- Possibilité de créer un compte</p>
//                     </div>
//                   )}
//                 </div>
//                 <div className="link">
//                   {translate === false ? (
//                     <p className="text-focus-in">
//                       <a
//                         className={darkMode ? "dark " : "light "}
//                         href="https://rawg-clone-orion.netlify.app/"
//                         target="_blank"
//                       >
//                         See project{" "}
//                       </a>
//                     </p>
//                   ) : (
//                     <p className="text-focus-in">
//                       <a
//                         className={darkMode ? "dark " : "light "}
//                         href="https://rawg-clone-orion.netlify.app/"
//                         target="_blank"
//                       >
//                         Voir le projet
//                       </a>
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };

// export default Rawg;

// --------------

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Home from "/src/images/rawg/Home.png/";
import OneGame from "/src/images/rawg/OneGame.png/";
import GameReview from "/src/images/rawg/GameReview.png/";
import GameFav from "/src/images/rawg/GameFav.png/";
import log from "/src/images/rawg/log.png/";
import "swiper/css";
import "swiper/css/navigation";

const Rawg = ({ darkMode, handleClick, translate }) => {
  return (
    <>
      <section className={darkMode ? "dark " : "light "}>
        <main>
          <div className="title">
            <h1>Gamepad-Rawg</h1>

            {!translate ? (
              <h3>Video game census website</h3>
            ) : (
              <h3> Site de recensement de jeux videos</h3>
            )}

            <div className="link">
              {translate === false ? (
                <p className="text-focus-in">
                  <a
                    className={darkMode ? "dark " : "light "}
                    href="https://rawg-clone-orion.netlify.app/"
                    target="_blank"
                  >
                    See project{" "}
                  </a>
                </p>
              ) : (
                <p className="text-focus-in">
                  <a
                    className={darkMode ? "dark " : "light "}
                    href="https://rawg-clone-orion.netlify.app/"
                    target="_blank"
                  >
                    Voir le projet
                  </a>
                </p>
              )}
            </div>
            <button className="translate" onClick={handleClick}>
              {translate ? <p>Traduire Ang</p> : <p>Translate Fr</p>}
            </button>
          </div>
          <div className="underline"></div>
          <div className="container-project">
            <div className="car-rawg">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="img-rawg"
              >
                <SwiperSlide>
                  <img src={Home} alt="te" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={OneGame} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={GameReview} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={GameFav} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={log} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="about-rawg">
              <div className="about-rigth">
                {!translate ? (
                  <div className="col-left">
                    <h5>Home :</h5>
                    <p>- Displays every video game in the world.</p>
                    <p>- The ability to change pages.</p>
                    <p>- A login/account creation button.</p>
                    <p>
                      - A My Favorites button, which requires you to be logged
                      in.
                    </p>
                    <p>- A logout button</p>
                    {/* ---- */}
                    <h5>One game:</h5>
                    <p>
                      - Displays game information (platform, date, genre,
                      developer, age, description)
                    </p>
                    <p>- Thumbnail photos of the game.</p>
                    <p>- Existing votes.</p>
                    <p>- A trailer video, if available.</p>
                    <p>
                      - An add to collection button, which requires you to be
                      logged in.
                    </p>
                    <p>
                      - An add a review button, which requires you to be logged
                      in
                    </p>
                    <p>
                      - All games in the same series (possibility to browse the
                      game the game with a click)
                    </p>
                    <p>- Existing reviews are displayed</p>
                    <p>- Un bouton de deconnexion</p>
                    {/* ---- */}
                    <br />
                  </div>
                ) : (
                  <div className="col-left">
                    <h5>Home :</h5>
                    <p>- Affiche tout les jeux vidéos existant au monde.</p>
                    <p>- Possibilité de changé de page.</p>
                    <p>- Un bouton de connexion/creation de compte.</p>
                    <p>
                      - Un bouton Mes Favoris, qui nécessite d'être connecté
                    </p>
                    <p>- Un bouton de deconnexion</p>
                    {/* ---- */}
                    <h5>Jeu unique :</h5>
                    <p>
                      - Affiche les informations du jeux (plateforme, date,
                      genre, développeur, age, description)
                    </p>
                    <p>- Des photos miniatures du jeux .</p>
                    <p>- Les votes existant.</p>
                    <p>- Une vidéo trailer, si existante.</p>
                    <p>
                      - Un bouton add to collection, qui nécessite d'être
                      connecté
                    </p>
                    <p>
                      - Un bouton add a review, qui nécessite d'être connecté
                    </p>
                    <p>
                      - Tous les jeux de la même série (possiblité de naviguer
                      sur le jeu au click)
                    </p>
                    <p>- Les commentaires existant sont affichés</p>
                    <p>- Un bouton de deconnexion</p>
                    {/* ---- */}
                    <br />
                  </div>
                )}

                {!translate ? (
                  <div className="col-rigth">
                    <br />

                    <h5>My collection :</h5>

                    <p>- See all favorite games</p>
                    <p>
                      Possibility to change the navigation on the favorite game,
                      on click
                    </p>
                    <p>- A button for deleting a favorite game</p>
                    <p>- A logout button</p>
                    {/* ---- */}
                    <br />
                    <h5>Login :</h5>
                    <p> - Possibility of logging in</p>
                    <p> - Possibility to create an account</p>
                  </div>
                ) : (
                  <div className="col-rigth">
                    <br />

                    <h5>Ma collection :</h5>

                    <p>- Voir tout les jeux en favoris</p>
                    <p>
                      - Possibilité de changé de naviguer sur le jeu favoris, au
                      click
                    </p>
                    <p>- Un bouton pour supprimer un jeu en favoris</p>
                    <p>- Un bouton de deconnexion</p>
                    {/* ---- */}
                    <br />
                    <h5>Connexion :</h5>
                    <p>- Possiblité de se connecter</p>
                    <p>- Possibilité de créer un compte</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Rawg;
