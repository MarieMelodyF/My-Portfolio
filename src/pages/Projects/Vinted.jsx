import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import homepage from "/src/images/Vinted/homepage.png";
import paypage from "/src/images/Vinted/paypage.png";
import productpage from "/src/images/Vinted/productpage.png";
import publishpage from "/src/images/Vinted/publishpage.png";

// /Users/mariemelo/Desktop/Portfolio/Portfolio V2/portfolio/src/images/marvel/homepage.png
const Vinted = ({ darkMode }) => {
  return (
    <>
      <section className={darkMode ? "dark " : "light "}>
        <main>
          <div className="title">
            <h1>Vinted </h1>
            <h3> Site de mise en vente d'affaires</h3>
          </div>
          <div className="underline"></div>
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
                  <img src={productpage} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={paypage} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ objectFit: "cover", width: "600px" }}
                    src={publishpage}
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="about-rawg">
              <div className="about-rigth">
                <div className="col-left">
                  <br />
                  <h5>Home :</h5>
                  <p>- Boutton de connexion/déconnexion</p>
                  <p>- Possibilité de publier une annonce si connecté</p>
                  <p>- Possiblité de filtré par nom</p>
                  <p>- Possibilité de filtré par prix</p>
                  <p>- Vue des différentes offres</p>

                  {/* ---- */}
                  <h5>Produit unique</h5>
                  <p>- Aperçu des informations et photos produit.</p>
                  <p>- Possibilité d'acheter si connecté</p>

                  {/* ---- */}
                  <br />
                  <h5>Paiement:</h5>
                  <p> - Mise en place d'un système de paiment (Stripe)</p>
                  <p>- Retour sur la page home</p>

                  {/* ---- */}
                </div>
                <div className="col-rigth">
                  <br />
                  <h5> Publier:</h5>
                  <p> - Ajout d'une image du produit à ventre (visible)</p>
                  <p>- Listes des informations à remplir avec exemples</p>
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
                    href="https://vinted-orion.netlify.app/"
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

export default Vinted;
