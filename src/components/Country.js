import { getCountryByName } from "../services/countryService";
import { useState } from "react";
import CountryCard from "./CountryCard";
import { country_list } from "../arrayOfCountries";
const Country = () => {
  const [country, setCountry] = useState(null);
  const [points, setPoints] = useState(0);
  const [error, setErrorNotification] = useState("");
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
    } else {
      setErrorNotification(
        "Sorry, something went wrong, please click new country to guess button"
      );
      setTimeout(() => {
        setErrorNotification("");
      }, 2000);
    }
  };

  return (
    <div className="country">
      <h4
        style={{
          backgroundColor: "snow",
          boxShadow: "black 2px 1px 0px 1px",
          padding: "3px",
          borderRadius: "3px",
          textAlign: "start",
        }}
      >
        {error} <br />
        Points: {points}
      </h4>{" "}
      <br />
      {country !== null ? (
        <CountryCard
          country={country}
          setCountry={setCountry}
          setPoints={setPoints}
          points={points}
        />
      ) : (
        "Start the quiz!"
      )}
      <button onClick={() => fetchData()}>New country to guess</button>
    </div>
  );
};
export default Country;
