import React, { useState, createContext, useContext, useEffect } from "react";
import { Api } from "../services/Api";

const GlobalStateContext = createContext();

export function GlobalState({ children }) {
  // Dados do aplicativo
  const [superHeroArray, setSuperHeroArray] = useState([]);
  const [searchedHeroes, setSearchedHeroes] = useState([]);

  // Puxa os dados dos super heroi
  const getSuperHeroData = () => {
    for (let i = 1; i <= 10; i++) {
      const future = Api(i);
      future.then((response) => {
        if (response === null) {
          return;
        }
        setSuperHeroArray((arr) => [...arr, response]);
      });
    }
  };

  const searchHero = (searchData) => {
    const future = Api("search/" + searchData);
    future.then((response) => {
      if (response === null) {
        return;
      }
      setSearchedHeroes(response.results);
    });
  };

  useEffect(() => {
    getSuperHeroData();
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        superHeroArray,
        setSuperHeroArray,
        getSuperHeroData,
        searchHero,
        searchedHeroes,
        setSearchedHeroes,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(GlobalStateContext);

  const {
    superHeroArray,
    setSuperHeroArray,
    getSuperHeroData,
    searchHero,
    searchedHeroes,
    setSearchedHeroes,
  } = context;

  return {
    superHeroArray,
    setSuperHeroArray,
    getSuperHeroData,
    searchHero,
    searchedHeroes,
    setSearchedHeroes,
  };
};
