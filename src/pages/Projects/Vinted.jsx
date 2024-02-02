import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import homepage from "/src/images/Vinted/homepage.png";
import paypage from "/src/images/Vinted/paypage.png";
import productpage from "/src/images/Vinted/productpage.png";
import publishpage from "/src/images/Vinted/publishpage.png";

const Vinted = ({ darkMode, translate, handleClick }) => {
  return (
    <>
      <section className={darkMode ? "dark " : "light "}>
        <main>
          <div className="rawg">
            <div className="title">
              <h1>Vinted</h1>

              {!translate ? (
                <h3> Web site for clothing sales</h3>
              ) : (
                <h3> Site de mise en vente d'affaires</h3>
              )}
              <div className="link">
                {!translate ? (
                  <p className="text-focus-in">
                    <a
                      className={darkMode ? "dark " : "light "}
                      href="https://vinted-orion.netlify.app/"
                      target="_blank"
                    >
                      See Project{" "}
                    </a>
                  </p>
                ) : (
                  <p className="text-focus-in">
                    <a
                      className={darkMode ? "dark " : "light "}
                      href="https://vinted-orion.netlify.app/"
                      target="_blank"
                    >
                      Voir le projet
                    </a>
                  </p>
                )}
              </div>
            </div>
            <button className="translate" onClick={handleClick}>
              {translate ? <p>Traduire Ang</p> : <p>Translate Fr</p>}
            </button>

            {/* -------------------- */}

            <div className="underline"></div>
            <div className="container-project">
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
                  {!translate ? (
                    <div className="col-left">
                      <br />
                      <h5>Home :</h5>
                      <p>- Login/logout button</p>
                      <p>- Ability to post an ad if logged in</p>
                      <p>- Possibility to filter by name</p>
                      <p>- Possibility to filter by price</p>
                      <p>- View different offers</p>

                      {/* ---- */}
                      <h5>Unique product :</h5>
                      <p>- Overview of product information and photos.</p>
                      <p>- Possibility to buy if connected</p>

                      {/* ---- */}
                      <br />
                      <h5>Paiement :</h5>
                      <p>- Setting up a payment system (Stripe)</p>
                      <p>- Back to Home page</p>

                      {/* ---- */}
                    </div>
                  ) : (
                    <div className="col-left">
                      <br />
                      <h5>Home :</h5>
                      <p>- Boutton de connexion/déconnexion</p>
                      <p>- Possibilité de publier une annonce si connecté</p>
                      <p>- Possiblité de filtré par nom</p>
                      <p>- Possibilité de filtré par prix</p>
                      <p>- Vue des différentes offres</p>

                      {/* ---- */}
                      <h5>Produit unique :</h5>
                      <p>- Aperçu des informations et photos produit.</p>
                      <p>- Possibilité d'acheter si connecté</p>

                      {/* ---- */}
                      <br />
                      <h5>Paiement :</h5>
                      <p> - Mise en place d'un système de paiment (Stripe)</p>
                      <p>- Retour sur la page home</p>

                      {/* ---- */}
                    </div>
                  )}

                  {!translate ? (
                    <div className="col-rigth">
                      <br />
                      <h5> Publish :</h5>
                      <p>- Add a product image (visible)</p>
                      <p>- List of information to be filled in with examples</p>
                      {/* ---- */}

                      <br />
                      <h5>Login :</h5>
                      <p>- Possibility of logging in</p>
                      <p>- Possibility to create an account</p>
                    </div>
                  ) : (
                    <div className="col-rigth">
                      <br />
                      <h5> Publier :</h5>
                      <p> - Ajout d'une image du produit à ventre (visible)</p>
                      <p>- Listes des informations à remplir avec exemples</p>
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
          </div>
        </main>
      </section>
    </>
  );
};

export default Vinted;
