import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Home from "/src/images/rawg/Home.png/";
import OneGame from "/src/images/rawg/OneGame.png/";
import GameReview from "/src/images/rawg/GameReview.png/";
import GameFav from "/src/images/rawg/GameFav.png/";
import log from "/src/images/rawg/log.png/";

import "swiper/css";
import "swiper/css/navigation";

const Rawg = ({ darkMode }) => {
  return (
    <>
      <section className={darkMode ? "dark " : "light "}>
        <main>
          <div className="title">
            <h1>Gamepad-Rawg</h1>
            <h3> Site de recensement de jeux videos</h3>
          </div>
          <div className="underline"></div>
          <div className="rawg">
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
                <div className="col-left">
                  <h5>Home :</h5>
                  <p>- Affiche tout les jeux vidéos existant au monde.</p>
                  <p>- Possibilité de changé de page.</p>
                  <p>- Un bouton de connexion/creation de compte.</p>
                  <p>- Un bouton Mes Favoris, qui nécessite d'être connecté</p>
                  <p>- Un bouton de deconnexion</p>
                  {/* ---- */}
                  <h5>Jeu unique :</h5>
                  <p>
                    - Affiche les informations du jeux (plateforme, date, genre,
                    développeur, age, description)
                  </p>
                  <p>- Des photos miniatures du jeux .</p>
                  <p>- Les votes existant.</p>
                  <p>- Une vidéo trailer, si existante.</p>
                  <p>
                    - Un bouton add to collection, qui nécessite d'être connecté
                  </p>
                  <p>- Un bouton add a review, qui nécessite d'être connecté</p>
                  <p>
                    - Tous les jeux de la même série (possiblité de naviguer sur
                    le jeu au click)
                  </p>
                  <p>- Les commentaires existant sont affichés</p>
                  <p>- Un bouton de deconnexion</p>
                  {/* ---- */}
                  <br />
                </div>
                <div className="col-rigth">
                  <br />

                  <h5>My collection :</h5>

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
              </div>
              <div className="link">
                <p className="text-focus-in">
                  <a
                    className={darkMode ? "dark " : "light "}
                    href="https://rawg-clone-orion.netlify.app/"
                    target="_blank"
                  >
                    Voir le projet
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Rawg;
