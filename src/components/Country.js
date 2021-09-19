import { getCountryByName } from "../services/countryService"
import { useState } from "react"
import CountryCard from "./CountryCard"
const Country = () => {
    const [country, setCountry] = useState(null)
    const fetchData = async () => {

        const countryData = await getCountryByName("eesti")
       
            setCountry(countryData[0])
    }   
    return(
    <div className="country">{country !== null ? <CountryCard country={country} /> : "Start the quiz!"}<button onClick={() => fetchData()}>Arvo maa</button></div>)
}

export default Country