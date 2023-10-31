import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import homepage from "/src/images/marvel/homepage.png";
import characters from "/src/images/marvel/characterss.png";
import character from "/src/images/marvel/character.png";
import fav from "/src/images/marvel/fav.png";
import sign from "/src/images/marvel/sign.png";

// /Users/mariemelo/Desktop/Portfolio/Portfolio V2/portfolio/src/images/marvel/homepage.png
const Marvel = ({ darkMode }) => {
  return (
    <>
      <section className={darkMode ? "dark " : "light "}>
        <main>
          <div className="rawg">
            <div className="car-rawg">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="img-rawg"
              >
                <SwiperSlide>
                  <img src={homepage} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={characters} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={character} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fav} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sign} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="about-rawg">
              <div>
                <h1>Marvel </h1>
                <h1> Site de recensement des comics et personnages</h1>

                <div className="underline"></div>
              </div>
              <br />
              <h5>Home :</h5>
              <p>- Entrez dans l'univers Marvel</p>

              {/* ---- */}
              <h5>Comics</h5>
              <p>- Aperçu des comcis existant.</p>
              <p>- Possibilité de changement de page</p>
              <p>- Boutton mettre favoris</p>
              <p>- Boutton Favoris</p>
              <p>- Boutton Sign up</p>
              <p>- Boutton Log in</p>

              {/* ---- */}
              <br />
              <h5>Characters :</h5>
              <p> - Aperçu des personnages existant.</p>
              <p>- Accéder au perssonnage au click</p>

              {/* ---- */}
              <br />
              <h5>Character unique :</h5>
              <p> - Aperçu d'une description du personnage</p>
              <p>
                - Listes des différents comics dans lequel apparait le
                personnage
              </p>
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
                href="https://marvel-orion.netlify.app/comics"
                target="_blank"
              >
                Voir le projet
              </a>
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Marvel;
