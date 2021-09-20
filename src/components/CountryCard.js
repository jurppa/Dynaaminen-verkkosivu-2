import { useState } from "react";

const CountryCard = ({ country, points }) => {
  const [countryToGuess] = useState(country);
  const [guess, setGuess] = useState(null);

  const [showFullInfo, setShowFullInfo] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleGuessByName = (e) => {
    e.preventDefault();
    if (guess === countryToGuess.name) {
      points++;
      setNotification("Correct!");
      setShowFullInfo(true);
    } else {
      setNotification("Not right");
      setShowFullInfo(true);
    }
  };
  if (!showFullInfo) {
    return (
      <div className="countryCard">
        {notification !== null ? notification : "Which countrys flag is this?"}
        <form>
          <input
            type="text"
            onChange={(event) => {
              setGuess(event.target.value);
            }}
          />
          <button onClick={handleGuessByName}>Guess</button>
        </form>
        <img
          src={countryToGuess.flag !== null ? countryToGuess.flag : ""}
          alt="flag of country"
          style={{
            width: "250px",
            height: "150px",
            marginTop: "17px",
            marginBottom: "17px",
          }}
        ></img>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{notification}</h1>
        <h2>Some info about the country: </h2>

        <h3>{country.name}</h3>
        <p>
          {country.name}'s capital is {country.capital} and its population is{" "}
          {country.population} and its spoken languages are{" "}
          {country.languages.map((a) => (
            <li key={a.name}>{a.name} </li>
          ))}
        </p>
      </div>
    );
  }
};

export default CountryCard;
