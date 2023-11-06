// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import homepage from "/src/images/marvel/homepage.png";
// import characters from "/src/images/marvel/characterss.png";
// import character from "/src/images/marvel/character.png";
// import fav from "/src/images/marvel/fav.png";
// import sign from "/src/images/marvel/sign.png";

// // /Users/mariemelo/Desktop/Portfolio/Portfolio V2/portfolio/src/images/marvel/homepage.png
// const Marvel = ({ darkMode, translate, handleClick }) => {
//   return (
//     <>
//       <section className={darkMode ? "dark " : "light "}>
//         <main>
//           <div className="title">
//             <h1>Marvel</h1>
//             {!translate ? (
//               <h3> Comics and characters census site</h3>
//             ) : (
//               <h3> Site de recensement des comics et personnages</h3>
//             )}
//             <button className="translate" onClick={handleClick}>
//               {translate ? <p>Traduire Ang</p> : <p>Translate Fr</p>}
//             </button>
//           </div>
//           <div className="underline"></div>
//           <div className="rawg">
//             <div className="car-rawg">
//               <Swiper
//                 modules={[Navigation, Pagination, Scrollbar, A11y]}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 scrollbar={{ draggable: true }}
//                 onSwiper={(swiper) => console.log(swiper)}
//                 onSlideChange={() => console.log("slide change")}
//                 className="img-rawg"
//               >
//                 <SwiperSlide>
//                   <img src={homepage} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <img src={characters} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <img src={character} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <img src={fav} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <img src={sign} alt="" />
//                 </SwiperSlide>
//               </Swiper>
//             </div>

//             <div className="about-rawg">
//               <br />

//               <div className="about-rigth">
//                 {translate === false ? (
//                   <div className="col-left">
//                     <h5>Home :</h5>
//                     <p>- Entrez the Marvel universe</p>
//                     {/* ---- */}
//                     <h5>Comics</h5>
//                     <p>- Overview of existing comcis,</p>
//                     <p>- Possibility to change page,</p>
//                     <p>- Favorites button</p>
//                     <p>- Button to acces on favorites</p>
//                     <p>- Sign up button </p>
//                     <p>- Log in button</p>
//                     {/* ---- */}
//                     <br />
//                     <h5>Characters :</h5>
//                     <p>- Overview of existing characters.</p>
//                     <p>- Click to access character</p>
//                     {/* ---- */}
//                   </div>
//                 ) : (
//                   <div className="col-left">
//                     <h5>Home :</h5>
//                     <p>- Entrez dans l'univers Marvel</p>
//                     {/* ---- */}
//                     <h5>Comics</h5>
//                     <p>- Aperçu des comcis existant.</p>
//                     <p>- Possibilité de changement de page</p>
//                     <p>- Boutton mettre favoris</p>
//                     <p>- Boutton Favoris</p>
//                     <p>- Boutton Sign up</p>
//                     <p>- Boutton Log in</p>
//                     {/* ---- */}
//                     <br />
//                     <h5>Characters :</h5>
//                     <p> - Aperçu des personnages existant.</p>
//                     <p>- Accéder au personnage au click</p>
//                     {/* ---- */}
//                   </div>
//                 )}

//                 {translate === false ? (
//                   <div className="col-rigth">
//                     <h5> Unique Character :</h5>
//                     <p>- Preview of a character description</p>
//                     <p>
//                       - List of comics in which the character appears character
//                     </p>
//                     {/* ---- */}
//                     <br />
//                     <h5>Connexion :</h5>
//                     <p>- Possibility of logging in</p>
//                     <p>- Possibility to create an account</p>
//                   </div>
//                 ) : (
//                   <div className="col-rigth">
//                     <br />
//                     <h5>Character unique :</h5>
//                     <p> - Aperçu d'une description du personnage</p>
//                     <p>
//                       - Listes des différents comics dans lequel apparait le
//                       personnage
//                     </p>
//                     {/* ---- */}
//                     <br />
//                     <h5>Connexion :</h5>
//                     <p>- Possiblité de se connecter</p>
//                     <p>- Possibilité de créer un compte</p>
//                   </div>
//                 )}
//               </div>
//               <div className="link">
//                 {translate === false ? (
//                   <p className="text-focus-in">
//                     <a
//                       className={darkMode ? "dark " : "light "}
//                       href="https://marvel-orion.netlify.app"
//                       target="_blank"
//                     >
//                       See project
//                     </a>
//                   </p>
//                 ) : (
//                   <p className="text-focus-in">
//                     <a
//                       className={darkMode ? "dark " : "light "}
//                       href="https://marvel-orion.netlify.app"
//                       target="_blank"
//                     >
//                       Voir le projet
//                     </a>
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };

// export default Marvel;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import homepage from "/src/images/marvel/homepage.png";
import characters from "/src/images/marvel/characterss.png";
import character from "/src/images/marvel/character.png";
import fav from "/src/images/marvel/fav.png";
import sign from "/src/images/marvel/sign.png";

const Marvel = ({ darkMode, handleClick, translate }) => {
  return (
    <>
      <section className={darkMode ? "dark " : "light "}>
        <main>
          <div className="title">
            <h1>Marvel</h1>

            {!translate ? (
              <>
                <h3> Comics and characters census site</h3>
                <div className="underline"></div>
              </>
            ) : (
              <>
                <h3> Site de recensement des comics et personnages</h3>
                <div className="underline"></div>
              </>
            )}

            <div className="link">
              {translate === false ? (
                <p className="text-focus-in">
                  <a
                    className={darkMode ? "dark " : "light "}
                    href="https://marvel-orion.netlify.app"
                    target="_blank"
                  >
                    See project{" "}
                  </a>
                </p>
              ) : (
                <p className="text-focus-in">
                  <a
                    className={darkMode ? "dark " : "light "}
                    href="https://marvel-orion.netlify.app"
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
                  <img src={homepage} alt="te" />
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
              <br />
              <div className="about-rigth">
                {!translate ? (
                  <div className="col-left">
                    <p>- Entrez the Marvel universe</p>
                    {/* ---- */}
                    <h5>Comics</h5>
                    <p>- Overview of existing comcis,</p>
                    <p>- Possibility to change page,</p>
                    <p>- Favorites button</p>
                    <p>- Button to acces on favorites</p>
                    <p>- Sign up button </p>
                    <p>- Log in button</p>
                    {/* ---- */}
                    <br />
                    <h5>Characters :</h5>
                    <p>- Overview of existing characters.</p>
                    <p>- Click to access character</p>
                    {/* ---- */}
                    <br />
                  </div>
                ) : (
                  <div className="col-left">
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
                    <p>- Accéder au personnage au click</p>
                    {/* ---- */}
                    <br />
                  </div>
                )}

                {!translate ? (
                  <div className="col-rigth">
                    <h5> Unique Character :</h5>
                    <p>- Preview of a character description</p>
                    <p>
                      - List of comics in which the character appears character
                    </p>
                    {/* ---- */}
                    <br />
                    <h5>Connexion :</h5>
                    <p>- Possibility of logging in</p>
                    <p>- Possibility to create an account</p>
                  </div>
                ) : (
                  <div className="col-rigth">
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
                )}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Marvel;
