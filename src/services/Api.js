import axios from "axios";
const token = "352228289732212/";
const url = "https://superheroapi.com/api.php/";

export const Api = async (request) => {
  try {
    const response = await axios.get(url + token + request);

    return response.data;
  } catch (err) {
    console.log("Erro:", err);
    return null;
  }
};
