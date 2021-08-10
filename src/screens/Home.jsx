import React, { useState } from "react";
import { useGlobalContext } from "../global/GlobalContextData";

export const Home = () => {
  const { superHero, getSuperHeroData, searchHero } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <header>
        <h1>Lincartoon</h1>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            onClick={() => {
              searchHero(inputValue);
            }}
          >
            Buscar
          </button>
        </div>
      </header>
      <main>
        Main
        {superHero && (
          <div>
            card
            <p>id: {superHero.id}</p>
            <p>name: {superHero.name}</p>
            <p>
              <img
                src={superHero.image.url}
                alt={superHero.name}
                height="250px"
              />
            </p>
            <div>
              biography: //////////////
              <p>
                aliases:
                {superHero.biography.aliases.map((data) => (
                  <div>{data}</div>
                ))}
              </p>
              <p>alignment: {superHero.biography.alignment}</p>
              <p>alter-egos: {superHero.biography["alter-egos"]}</p>
              <p>first-appearance: {superHero.biography["first-appearance"]}</p>
              <p>full-name: {superHero.biography["full-name"]}</p>
              <p>place-of-birth: {superHero.biography["place-of-birth"]}</p>
              <p>publisher: {superHero.biography.publisher}</p>
            </div>
            <div>
              connections: /////////////////
              <p>
                group-affiliation: {superHero.connections["group-affiliation"]}
              </p>
              <p>relatives: {superHero.connections.relatives}</p>
            </div>
            <div>
              work: ////////////////
              <p>base: {superHero.work.base}</p>
              <p>occupation: {superHero.work.occupation}</p>
            </div>
            <div>
              powerstats: ////////////////
              <p>combat: {superHero.powerstats.combat}</p>
              <p>
                durability:
                {superHero.powerstats.durability}
              </p>
              <p>intelligence: {superHero.powerstats.intelligence}</p>
              <p>power: {superHero.powerstats.power}</p>
              <p>speed: {superHero.powerstats.speed}</p>
              <p>strength: {superHero.powerstats.strength}</p>
            </div>
            <div>
              appearance: ////////////////
              <p>eye-color: {superHero.appearance["eye-color"]}</p>
              <p>gender: {superHero.appearance.gender}</p>
              <p>hair-color: {superHero.appearance["hair-color"]}</p>
              <p>race: {superHero.appearance.race}</p>
              <p>height: {superHero.appearance.height[1]}</p>
              <p>weight: {superHero.appearance.weight[1]}</p>
            </div>
          </div>
        )}
        <button
          onClick={() => {
            getSuperHeroData(69);
          }}
        >
          Puxar dados
        </button>
      </main>
      <footer>Footer</footer>
    </div>
  );
};
