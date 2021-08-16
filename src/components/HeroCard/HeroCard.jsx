import React from "react";
import styles from "./HeroCard.module.scss";
import swords from "../../assets/images/swords.png";
import armorChest from "../../assets/images/armor.png";
import brain from "../../assets/images/brain.png";
import power from "../../assets/images/flash.png";
import speed from "../../assets/images/speed.png";
import strength from "../../assets/images/strength.png";

export const HeroCard = ({ superHero, onClick, reference }) => {
  //palette colors
  const marvel =
    (superHero.biography?.publisher ?? " ") === "Marvel Comics" &&
    styles.marvelBorder;
  const dc =
    (superHero.biography?.publisher ?? " ") === "DC Comics" && styles.dcBorder;
  const nbc =
    (superHero.biography?.publisher ?? " ") === "NBC - Heroes" &&
    styles.nbcBorder;

  return (
    <div
      ref={reference}
      onClick={onClick}
      className={styles.card + " " + dc + " " + marvel + " " + nbc}
    >
      <div className={styles.cardName}>
        <span>{superHero.name}</span>
      </div>

      <img src={superHero.image?.url} alt={superHero.name} height="250px" />

      <div className={styles.cardContent}>
        <span>
          <img src={swords} alt="" />
          {superHero.powerstats?.combat !== "null"
            ? superHero.powerstats?.combat
            : 0}
        </span>
        <span>
          <img src={armorChest} alt="" />
          {superHero.powerstats?.durability !== "null"
            ? superHero.powerstats?.durability
            : 0}
        </span>
        <span>
          <img src={strength} alt="" />{" "}
          {superHero.powerstats?.strength !== "null"
            ? superHero.powerstats?.strength
            : 0}
        </span>
        <span>
          <img src={power} alt="" />{" "}
          {superHero.powerstats?.power !== "null"
            ? superHero.powerstats?.power
            : 0}
        </span>
        <span>
          <img src={speed} alt="" />{" "}
          {superHero.powerstats?.speed !== "null"
            ? superHero.powerstats?.speed
            : 0}
        </span>
        <span>
          <img src={brain} alt="" />{" "}
          {superHero.powerstats?.intelligence !== "null"
            ? superHero.powerstats?.intelligence
            : 0}
        </span>
      </div>
    </div>
  );
};
