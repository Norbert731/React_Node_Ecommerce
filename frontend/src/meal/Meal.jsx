import React from "react";
import "./meal.scss";

function Meal() {
  return (
    <div className="meal">
      <div className="container">
        <div className="breadcrumbs"> Przystawki / Bruschetta</div>
        <h1>Bruschetta z pomidorami i bazylią</h1>
        <div className="content">
          <img
            src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="jedzenie"
          />
          <div className="action-bar">
            <div className="stars">
              <img src="./img/star.png" alt="gwiazda" />
              <img src="./img/star.png" alt="gwiazda" />
              <img src="./img/star.png" alt="gwiazda" />
              <img src="./img/star.png" alt="gwiazda" />
              <img src="./img/star.png" alt="gwiazda" />
            </div>
            <div className="action-buy">
              <p>Price: 32.54zł</p>
              <button className="default-btn">Zamów</button>
            </div>
          </div>

          <div className="recipe">
            <h3>Składniki:</h3>
            <ul>
              <li>Kromki świeżego chleba bagietki</li>
              <li>Pomidory malinowe</li>
              <li>Świeże liście bazylii</li>
              <li>Czosnek</li>
              <li>Sól</li>
              <li>Pieprz</li>
              <li>Oliwa z oliwek</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>
                Pokrój kromki świeżego chleba bagietki na grube plasterki.
              </li>
              <li>Rozgrzej patelnię lub grill.</li>
              <li>
                Połóż kromki chleba na rozgrzanej patelni i opiecz je z obu
                stron, aż staną się chrupiące i lekko zrumienione.
              </li>
              <li>
                Przekrój czosnek na pół i przetrzyj nim każdą kromkę chleba, aby
                nadać im delikatny czosnkowy aromat.
              </li>
              <li>
                Umyj i pokrój pomidory malinowe na małe, równomierne kawałki.
              </li>
              <li>Posiekaj świeże liście bazylii.</li>
              <li>Na każdą kromkę chleba połóż pokrojone pomidory.</li>
              <li>Posyp pomidory posiekaną bazylią.</li>
              <li>Skrop bruschettę oliwą z oliwek.</li>
              <li>Dopraw całość solą i pieprzem według własnego smaku.</li>
            </ol>
            <p>
              Gotowe! Teraz możesz cieszyć się smaczną bruschettą z pomidorami i
              bazylią. Smacznego!
            </p>
          </div>
        </div>
        <div className="reviews">
          <h3>Komentarze</h3>
          <div className="user">
            <div className="user-info">
              <img src="" alt="" />
              <span>Joe Doe</span>
            </div>
            <div className="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                natus, iure tempore rerum officia itaque nihil expedita cumque
                vel quos eos, harum consequatur laboriosam? Enim ipsa iure natus
                et ipsam aspernatur maiores. Consequatur, magnam minus? Officiis
                non quo debitis saepe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meal;
