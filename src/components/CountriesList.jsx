import { Link } from "react-router-dom"

function CountriesList({countries}) {
    return(
        <div className="countriesList">
        <div className="row">
          <div style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
            {countries.map((country)=>{
                return(
                    <div key={country.alpha3Code}>
                    <Link to={"/" + country.alpha3Code} className="list-group-item list-group-item-action">
                    <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt={country.name.common + "flag"} style={{width: "40px", marginRight: "auto", marginLeft: "auto"}} />
                    <br/>
                        {country.name.common}
                    </Link>
                    </div>
                )
            })}
            </div>
          </div>          
        </div>
        </div>
    )
}

export default CountriesList