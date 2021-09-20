import axios from "axios";
export const getCountryByName = async (countryName) => {
  try {
    const country = await axios.get(
      `https://restcountries.eu/rest/v2/name/${countryName}`
    );
    return country.data;
  } catch (err) {
    throw err;
  }
};
