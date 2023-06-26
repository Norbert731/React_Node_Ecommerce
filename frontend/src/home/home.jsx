import React from "react";
import "./home.scss";
import Hero from "../components/Hero/Hero";
import Guarantee from "../components/guarantee/guarantee";
import ReSlider from "../components/reSlider/ReSlider";
import { cards, meals } from "../data";
import CategoryCard from "../components/categoryCard/CategoryCard";
import NewMealCard from "../components/newMealCard/NewMealCard";

function Home() {
  return (
    <div className="container">
      <Hero />
      <Guarantee />
      <ReSlider slidesToShow={4} arrowsScroll={2}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </ReSlider>
      <div className="extended-desc">
        <div className="container">
          <h2>Witaj w naszej aplikacji kulinarnej!</h2>
          <p>
            To tutaj doskonałe smaki i najwyższa jakość składników spotykają się
            w wyjątkowych potrawach!
          </p>
          <p>
            Jesteśmy dumni, że możemy zapewnić naszym użytkownikom tylko
            najlepsze składniki do ich ulubionych dań. Przywiązujemy ogromną
            wagę do jakości i pochodzenia każdego składnika, które używamy w
            naszych recepturach. Dlatego współpracujemy wyłącznie z zaufanymi
            dostawcami, którzy gwarantują świeżość i najwyższą jakość produktów.
          </p>
          <p>
            Nasi znakomici szefowie kuchni to prawdziwi artyści, których pasją
            jest tworzenie niezwykłych smaków i zapachów. Każde danie jest
            starannie przygotowywane, z dbałością o detale i harmonię smaków.
            Dzięki ich wiedzy i kreatywności, nasze menu oferuje szeroki wybór
            dań, które zadowolą nawet najbardziej wymagające podniebienia.
          </p>
          <p>
            W naszej aplikacji znajdziesz wiele różnych rodzajów dań,
            dopasowanych do różnych preferencji i diet. Niezależnie od tego, czy
            jesteś miłośnikiem kuchni tradycyjnej, eksperymentujesz z nowymi
            smakami czy wybierasz zdrowe i dietetyczne posiłki, mamy dla Ciebie
            odpowiednią propozycję. Od klasycznych potraw po nowoczesne i
            innowacyjne kompozycje.
          </p>
          <p>
            Pragniemy, abyś doświadczył najwyższej jakości i satysfakcji podczas
            korzystania z naszej aplikacji. Dlatego oferujemy szeroki wybór
            smaków i dań. Niezależnie od tego, czy szukasz przepisu na szybki
            obiad, romantyczną kolację czy imponujące danie na specjalną okazję,
            nasza aplikacja jest idealnym miejscem do odkrywania i eksploracji
            kulinarnych możliwości.
          </p>
          <p>
            Przygotuj się na kulinarne przygody, które ożywią Twoje zmysły i
            zaspokoją Twoje kulinarne pragnienia. Zapraszamy do naszej
            skorzystania z aplikacji, gdzie najlepsze składniki, znakomici
            szefowie kuchni i różnorodność dań czekają na Ciebie! Smacznego!
          </p>
        </div>
      </div>

      <ReSlider slidesToShow={4} arrowsScroll={2}>
        {meals.map((meal) => (
          <NewMealCard meal={meal} key={meal.id} />
        ))}
      </ReSlider>
    </div>
  );
}

export default Home;
