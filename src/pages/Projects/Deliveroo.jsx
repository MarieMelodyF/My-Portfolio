import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import homepage from "/src/images/deliveroo/homepage.png";
import countermenu from "/src/images/deliveroo/countermenu.png";

const Deliveroo = ({ darkMode, translate, handleClick }) => {
  return (
    <>
      <section className={darkMode ? "dark " : "light "}>
        <main>
          <div className="title">
            <h1>Deliveroo </h1>

            {!translate ? (
              <h3> Food ordering site</h3>
            ) : (
              <h3> Site de commande alimentaire</h3>
            )}
            <button className="translate" onClick={handleClick}>
              {translate ? <p>Traduire Ang</p> : <p>Translate Fr</p>}
            </button>
          </div>
          <div className="underline"> </div>
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
                  <img src={countermenu} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="about-rawg">
              <br />
              <div className="about-rigth">
                {!translate ? (
                  <div className="col-left">
                    <h5>Home :</h5>
                    <p>
                      - visibility of the various dishes linked to the
                      restaurant,
                    </p>
                    <p>- Choice of one or more menus.</p>
                  </div>
                ) : (
                  <div className="col-left">
                    <h5>Home :</h5>
                    <p>
                      - Visibilité des différents plats en lien avec le
                      restaurant,
                    </p>
                    <p>- Possibilité de choisir un ou plusieurs menu.</p>
                  </div>
                )}
                {!translate ? (
                  <div className="col-rigth">
                    {/* ---- */}
                    <h5>Basket :</h5>
                    <p>- Overview of selected products,</p>
                    <p>- Option to add or remove a dish,</p>
                    <p>- Overview of basket total.</p>
                    {/* ---- */}
                  </div>
                ) : (
                  <div className="col-rigth">
                    {/* ---- */}
                    <h5>Panier :</h5>
                    <p>- Aperçu des produits sélectionés,</p>
                    <p>- Possibilité de rajouter ou retirer un plat,</p>
                    <p>Aperçu du total du panier.</p>
                    {/* ---- */}
                  </div>
                )}
              </div>
              <div className="link">
                {!translate ? (
                  <p className="text-focus-in">
                    <a
                      className={darkMode ? "dark " : "light "}
                      href="https://deliveroo-copy.netlify.app/"
                      target="_blank"
                    >
                      See project{" "}
                    </a>
                  </p>
                ) : (
                  <p className="text-focus-in">
                    <a
                      className={darkMode ? "dark " : "light "}
                      href="https://deliveroo-copy.netlify.app/"
                      target="_blank"
                    >
                      Voir le projet
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Deliveroo;
