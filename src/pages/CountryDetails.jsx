import { Link, useParams } from "react-router-dom"


function CountryDetails({countryData}) {
  const {alpha3Code} = useParams()
  // console.log("useparamsssss: ", alpha3Code)
    // console.log("countryData: ", countryData)
    return(
        <div className="countryDetails">
            <h1>{countryData.name.common} ({alpha3Code})</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{countryData.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {countryData.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {countryData.borders.map((borderCountry) => {
                        console.log()
                       return <li key={borderCountry}><Link to={"/" + borderCountry}> {borderCountry} </Link></li>
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetails