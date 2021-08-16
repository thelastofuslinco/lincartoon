import React, { useEffect, useState } from "react";
import { HeroCard } from "../components/HeroCard/HeroCard";
import { useGlobalContext } from "../global/GlobalContextData";
import styles from "../assets/scss/Home.module.scss";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { HeroModal } from "../components/HeroModal/HeroModal";

export const Home = () => {
  const { superHeroArray, searchHero, searchedHeroes, setSearchedHeroes } =
    useGlobalContext();

  const [inputValue, setInputValue] = useState("");
  const [heroModal, setheroModal] = useState(false);
  const [superHero, setSuperHero] = useState({});

  useEffect(() => {
    if (inputValue === "") {
      setSearchedHeroes([]);
    }
  }, [inputValue, setSearchedHeroes]);

  return (
    <div className="container">
      <header className={styles.headerContainer}>
        <h1>Lincartoon</h1>

        <div>
          <Input
            type={"text"}
            value={inputValue}
            onKeyDown={(event) =>
              event.key === "Enter" && searchHero(inputValue)
            }
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Button
            text={"Buscar"}
            onClick={() => {
              searchHero(inputValue);
            }}
          />
        </div>
        <div></div>
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

          {searchedHeroes.length > 0 && inputValue !== "" ? (
            searchedHeroes.map((superHero) => (
              <HeroCard
                key={superHero.id}
                superHero={superHero}
                onClick={() => {
                  setSuperHero(superHero);
                  setheroModal(true);
                }}
              />
            ))
          ) : (
            <div></div>
          )}

          {inputValue === "" ? (
            superHeroArray.map((superHero) => (
              <HeroCard
                key={superHero.id}
                superHero={superHero}
                onClick={() => {
                  setSuperHero(superHero);
                  setheroModal(true);
                }}
              />
            ))
          ) : (
            <div></div>
          )}

          {inputValue === "" && superHeroArray.length < 10 ? (
            <div>Loading...</div>
          ) : (
            <div></div>
          )}
        </div>
      </main>
      <footer className={styles.footerContainer}>
        ©Copyright 2021 - thelastofuslinco
      </footer>
    </div>
  );
};
