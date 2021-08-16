import React, { useState } from "react";
import { HeroCard } from "../components/HeroCard/HeroCard";
import { useGlobalContext } from "../global/GlobalContextData";
import styles from "../assets/scss/Home.module.scss";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { HeroModal } from "../components/HeroModal/HeroModal";

export const Home = () => {
  const { superHeroArray, searchHero, sortByName } = useGlobalContext();

  const [inputValue, setInputValue] = useState("");
  const [heroModal, setheroModal] = useState(false);
  const [superHero, setSuperHero] = useState({});

  return (
    <div className="container">
      <header className={styles.headerContainer}>
        <h1>Lincartoon</h1>

        <div>
          <Input
            type={"text"}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Button
            text={"Buscar"}
            onClick={() => {
              searchHero(inputValue);
            }}
          />
        </div>
        <div>
          <Button
            text={"ordena por nome"}
            onClick={() => {
              sortByName();
            }}
          />
        </div>
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.cardContainer}>
          {heroModal && (
            <HeroModal
              superHero={superHero}
              heroModalIsTrue={heroModal}
              onClick={() => setheroModal(false)}
            />
          )}

          {superHeroArray.length &&
            superHeroArray.map((superHero) => (
              <HeroCard
                key={superHero.id}
                superHero={superHero}
                onClick={() => {
                  setSuperHero(superHero);
                  setheroModal(true);
                }}
              />
            ))}
        </div>
      </main>
      <footer className={styles.footerContainer}>
        ©Copyright 2021 - thelastofuslinco
      </footer>
    </div>
  );
};
