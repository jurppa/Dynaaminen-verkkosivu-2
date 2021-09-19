import { useState } from "react"

const CountryCard = ({country}) => {
    const [countryToGuess, setCountryToGuess] = useState(country)

    
    return(<div>{countryToGuess.name}</div>)
}

export default CountryCard