import axios from "axios";
const token = "352228289732212";
const url = `https://superheroapi.com/api.php/${token}/`;

export const Api = async (request) => {
  try {
    const response = await axios.get(url + request);

    return response.data;
  } catch (err) {
    console.log("Erro:", err);
    return null;
  }
};
