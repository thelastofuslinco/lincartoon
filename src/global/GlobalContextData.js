import React, { useState, createContext, useContext, useEffect } from "react";
import { Api } from "../utils/Api";

const GlobalStateContext = createContext();

export function GlobalState({ children }) {
  // Dados do aplicativo
  const [superHero, setSuperHero] = useState(null);
  const [superHeroArray, setSuperHeroArray] = useState(null);

  // Puxa os dados dos super heroi
  const getSuperHeroData = (id) => {
    const future = Api(id);
    future.then((response) => setSuperHero(response));
  };

  const searchHero = (searchData) => {
    const future = Api("search" + searchData);
    future.then((response) => setSuperHeroArray(response));
  };

  useEffect(() => {
    console.log(superHeroArray);
  }, [superHeroArray]);

  return (
    <GlobalStateContext.Provider
      value={{
        superHero,
        getSuperHeroData,
        searchHero,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(GlobalStateContext);

  const { superHero, getSuperHeroData, searchHero } = context;

  return {
    superHero,
    getSuperHeroData,
    searchHero,
  };
};
