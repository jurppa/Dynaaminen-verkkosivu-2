import { useState } from "react";

const CountryCard = ({ country, points, setPoints }) => {
  const [countryToGuess] = useState(country);
  const [guess, setGuess] = useState(null);

  const [showFullInfo, setShowFullInfo] = useState(false);
  const [notification, setNotification] = useState(null);
  const [hint, setHint] = useState(null);
  const handleGuessByName = (e) => {
    e.preventDefault();
    if (guess === countryToGuess.name) {
      setPoints(points + 1);
      setNotification("Correct!");
      setShowFullInfo(true);
    } else {
      setNotification("Not quite right");
      setShowFullInfo(true);
    }
  };
  const handleGiveHint = (e) => {
    e.preventDefault();
    setHint(countryToGuess.name.substring(0, 3));
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

          {hint === null ? (
            <button onClick={handleGiveHint}>Give a hint</button>
          ) : (
            ""
          )}
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
        ></img>{" "}
        <br />
        {hint !== null ? "Three first letters of countrys name: " + hint : ""}
      </div>
    );
  } else {
    return (
      <div
        style={{ backgroundColor: "snow", padding: "4px", borderRadius: "4px" }}
      >
        <h1 style={{ textDecoration: "underline" }}>{notification}</h1>
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
