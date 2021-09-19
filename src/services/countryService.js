import axios from "axios"
export const getCountryByName = async (countryName) => {
    try
    {
        const country = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
        console.log("try", country)
        return country.data
    }
    catch (err){
        return 400
    }
}