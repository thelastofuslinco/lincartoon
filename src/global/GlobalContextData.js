import React, { useState, createContext, useContext, useEffect } from "react";
import { Api } from "../services/Api";

const GlobalStateContext = createContext();

export function GlobalState({ children }) {
  // Dados do aplicativo
  const [superHeroArray, setSuperHeroArray] = useState([]);

  // Puxa os dados dos super heroi
  const getSuperHeroData = () => {
    for (let i = 1; i <= 10; i++) {
      const future = Api(i);
      future.then((response) => setSuperHeroArray((arr) => [...arr, response]));
    }
  };

  const sortByName = () => {
    console.log(superHeroArray);
    const copy = superHeroArray.sort((a, b) => a.id - b.id).reverse();
    setSuperHeroArray(copy);
    console.log(copy);
  };

  const searchHero = (searchData) => {
    const future = Api("search" + searchData);
    future.then((response) => setSuperHeroArray(response));
  };

  useEffect(() => {
    getSuperHeroData();
  }, []);

  useEffect(() => {
    console.log(superHeroArray);
  }, [superHeroArray]);

  return (
    <GlobalStateContext.Provider
      value={{
        superHeroArray,
        setSuperHeroArray,
        getSuperHeroData,
        searchHero,

        sortByName,
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

    sortByName,
  } = context;

  return {
    superHeroArray,
    setSuperHeroArray,
    getSuperHeroData,
    searchHero,

    sortByName,
  };
};
