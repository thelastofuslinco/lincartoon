import React from "react";
import styles from "./HeroModal.module.scss";
import swords from "../../assets/images/swords.png";
import armorChest from "../../assets/images/armor.png";
import brain from "../../assets/images/brain.png";
import power from "../../assets/images/flash.png";
import speed from "../../assets/images/speed.png";
import strength from "../../assets/images/strength.png";

export const HeroModal = ({ superHero, heroModalIsTrue, onClick }) => {
  const modalState = heroModalIsTrue && styles.modalStateTrue;
  console.log(superHero);

  return (
    <div className={styles.modal + " " + modalState}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClick}>
          &times;
        </span>
        <div>
          <span>ficha de personagem</span>
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
          <div className={styles.superHeroPowerstats}>
            <span>
              <img src={swords} alt="" />
              {superHero.powerstats.combat !== "null"
                ? superHero.powerstats.combat
                : 0}
            </span>
            <span>
              <img src={armorChest} alt="" />
              {superHero.powerstats.durability !== "null"
                ? superHero.powerstats.durability
                : 0}
            </span>
            <span>
              <img src={strength} alt="" />{" "}
              {superHero.powerstats.strength !== "null"
                ? superHero.powerstats.strength
                : 0}
            </span>
            <span>
              <img src={power} alt="" />{" "}
              {superHero.powerstats.power !== "null"
                ? superHero.powerstats.power
                : 0}
            </span>
            <span>
              <img src={speed} alt="" />{" "}
              {superHero.powerstats.speed !== "null"
                ? superHero.powerstats.speed
                : 0}
            </span>
            <span>
              <img src={brain} alt="" />{" "}
              {superHero.powerstats.intelligence !== "null"
                ? superHero.powerstats.intelligence
                : 0}
            </span>
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
      </div>
    </div>
  );
};
