import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import homepage from "/src/images/deliveroo/homepage.png";
import countermenu from "/src/images/deliveroo/countermenu.png";

// /Users/mariemelo/Desktop/Portfolio/Portfolio V2/portfolio/src/images/marvel/homepage.png
const Deliveroo = ({ darkMode }) => {
  return (
    <>
      <section className={darkMode ? "dark " : "light "}>
        <main>
          <div className="title">
            <h1>Deliveroo </h1>
            <h3> Site de commande alimentaire</h3>
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
                <div>
                  <h5>Home :</h5>
                  <p>
                    - visibilité des différents plats en lien avec le restaurant
                  </p>
                  <p>- Possibilité de choisir un ou plusieurs menu</p>
                </div>
                <div>
                  {/* ---- */}
                  <h5>Panier :</h5>
                  <p>- Aperçu des produits sélectionés</p>
                  <p>- Possibilité de rajouter ou retirer un plat</p>
                  <p>Aperçu du total du panier</p>
                  {/* ---- */}
                </div>
              </div>
            </div>
          </div>
          <div className="link">
            <p className="text-focus-in">
              <a
                className={darkMode ? "dark " : "light "}
                href="https://deliveroo-copy.netlify.app/"
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

export default Deliveroo;
