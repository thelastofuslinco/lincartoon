import React from 'react'
import styles from './HeroModal.module.scss'
import swords from '../../assets/images/swords.png'
import armorChest from '../../assets/images/armor.png'
import brain from '../../assets/images/brain.png'
import power from '../../assets/images/flash.png'
import speed from '../../assets/images/speed.png'
import strength from '../../assets/images/strength.png'

export const HeroModal = ({ superHero, heroModalIsTrue, onClick }) => {
  const modalState = heroModalIsTrue && styles.modalStateTrue
  console.log(superHero)

  return (
    <div className={styles.modal + ' ' + modalState}>
      <div className={styles.modalContent}>
        <div className={styles.superHeroData}>
          <span className={styles.characterSheet}>Ficha de personagem</span>
          <span className={styles.close} onClick={onClick}>
            &times;
          </span>
          <div className={styles.superHeroInfo}>
            <div className={styles.imageContainer}>
              <p>{superHero.name}</p>

              <img
                src={superHero.image.url}
                alt={superHero.name}
                height='250px'
              />
            </div>
            <div className={styles.superHeroPowerstats}>
              <span>
                <img src={swords} alt='' />
                {superHero.powerstats.combat !== 'null'
                  ? superHero.powerstats.combat
                  : 0}
              </span>
              <span>
                <img src={armorChest} alt='' />
                {superHero.powerstats.durability !== 'null'
                  ? superHero.powerstats.durability
                  : 0}
              </span>
              <span>
                <img src={strength} alt='' />{' '}
                {superHero.powerstats.strength !== 'null'
                  ? superHero.powerstats.strength
                  : 0}
              </span>
              <span>
                <img src={power} alt='' />{' '}
                {superHero.powerstats.power !== 'null'
                  ? superHero.powerstats.power
                  : 0}
              </span>
              <span>
                <img src={speed} alt='' />{' '}
                {superHero.powerstats.speed !== 'null'
                  ? superHero.powerstats.speed
                  : 0}
              </span>
              <span>
                <img src={brain} alt='' />{' '}
                {superHero.powerstats.intelligence !== 'null'
                  ? superHero.powerstats.intelligence
                  : 0}
              </span>
            </div>

            <div className={styles.superHeroInfoContainer}>
              <div>
                <p>
                  apelidos{' '}
                  {superHero.biography.aliases.map((data) => (
                    <span>{data}</span>
                  ))}
                </p>
                <p>alinhamento do {superHero.biography.alignment}</p>
                <p>
                  Alter egos{' '}
                  {superHero.biography['alter-egos'] !== 'No alter egos found.'
                    ? superHero.biography['alter-egos']
                    : 'não possui alter egos'}
                </p>
                <p>
                  Primeira aparição {superHero.biography['first-appearance']}
                </p>
                <p>Seu nome completo {superHero.biography['full-name']}</p>
                <p>
                  Local de nascimento{' '}
                  {superHero.biography['place-of-birth'] !== '-'
                    ? superHero.biography['place-of-birth']
                    : 'desconhecido'}
                </p>
                <p>
                  Universo{' '}
                  {superHero.biography.publisher !== 'null'
                    ? `da ${superHero.biography.publisher}`
                    : 'desconhecido'}
                </p>
              </div>
              <div>
                <p>
                  group-affiliation:{' '}
                  {superHero.connections['group-affiliation']}
                </p>
                <p>relatives: {superHero.connections.relatives}</p>
              </div>
              <div>
                <p>base: {superHero.work.base}</p>
                <p>occupation: {superHero.work.occupation}</p>
              </div>
              <div>
                <p>eye-color: {superHero.appearance['eye-color']}</p>
                <p>gender: {superHero.appearance.gender}</p>
                <p>hair-color: {superHero.appearance['hair-color']}</p>
                <p>race: {superHero.appearance.race}</p>
                <p>height: {superHero.appearance.height[1]}</p>
                <p>weight: {superHero.appearance.weight[1]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
