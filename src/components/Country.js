import { getCountryByName } from "../services/countryService";
import { useState } from "react";
import CountryCard from "./CountryCard";
import { country_list } from "../arrayOfCountries";
const Country = () => {
  const [country, setCountry] = useState(null);
  const [points, setPoints] = useState(0);
  const fetchData = async () => {
    setCountry(null);
    const arrayOfCountries = country_list;
    const randomCountryNumber = (Math.random() * country_list.length).toFixed(
      0
    );
    const countryData = await getCountryByName(
      arrayOfCountries[randomCountryNumber]
    );

    if (countryData) {
      setCountry(countryData[0]);
    }
  };

  return (
    <div className="country">
      Points: {points} <br />
      {country !== null ? (
        <CountryCard
          country={country}
          setCountry={setCountry}
          points={points}
        />
      ) : (
        "Start the quiz!"
      )}
      <button onClick={() => fetchData()}>Arvo maa</button>
    </div>
  );
};
export default Country;
