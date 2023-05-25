import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import axios from "axios"
import "./App.css";

// import countriesJson from "./countries.json"
//components
import NavBar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./pages/CountryDetails";

function App() {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then(results => {
      console.log("resuuuuults: ", results)
      setCountries(results.data)
    })
    .catch(err => console.log(err))
  }, [])



  return <div className="App">
    <NavBar/>
    <div className="mainContainer">
      {/* <CountriesList countries={countries}/> */}
      <Routes>
        <Route path="/" element={<CountriesList countries={countries}/>} />
        {countries.map((country) => {
          return(
            <Route path={"/" + country.alpha3Code} key={country._id} element={ <CountryDetails countryData={country}/> }/>
          )
        })}
      </Routes>
    </div> 
  </div>;
}

export default App;