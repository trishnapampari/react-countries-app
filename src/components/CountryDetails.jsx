import { useEffect, useState } from 'react';
import './CountryDetails.css';
import { data, Link, useLocation, useParams } from 'react-router-dom';
import CountryDetailsShimmer from './CountryDetailsShimmer.jsx';

const CountryDetails = () => {

    const params=useParams();
      console.log(params);

    // const countryname=new URLSearchParams(window.location.search).get('name');
    const countryname = params.countryDetails;
    const [countryData, setcountryData] = useState(null)
    const [notFound, setNotFound] = useState(false);

    const {state}=useLocation(); // To get the passed state data
    console.log(state);
    
    useEffect(() => {
        
        fetch(`https://restcountries.com/v2/name/${countryname}?fullText=true`)
            .then((res) => res.json())
            .then(([data]) => [
              
                setcountryData({
                    name: data.name,
                    population: data.population,
                    nativeName: data.nativeName,
                    region: data.region,
                    subregion: data.subregion,
                    capital: data.capital,
                    tld: data.topLevelDomain,
                    currencies: data.currencies.map((currency) => currency.name).join(', '),
                    languages: data.languages.map((language) => language.name).join(', '),
                    flag: data.flag,
                    borders:[]
                }),

              // this return a promises of array
                // data.borders?.map((border)=>{
                //   return  fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                //     .then((res)=> res.json())
                //     .then(([borderCountry])=>borderCountry.name.common)
                // })
            
                Promise.all(data.borders?.map((border)=>{
                   return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then((res)=> res.json())
                    .then(([borderCountry])=>borderCountry.name.common)
                })).then((borders)=>{
                  setcountryData((prevData)=>({
                    ...prevData,
                    borders: borders
                  }))
                })


                
            ]).catch((err) => {
                setNotFound(true)
            })
    }, [countryname]) // Added countryname as dependency to refetch when it changes
 
  if(notFound){
    return <h2>Country Not Found</h2>
  }
    
    return (
       // countryData && 
     countryData=== null ? <CountryDetailsShimmer/> :  (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={()=>history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
          {countryData.borders.length!=0 &&  <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {countryData.borders.map((border)=> <Link key={border} to={`/${border}`}>{border}</Link>)}
            </div>
          }
          </div>
        </div>
      </div>
    </main>
  ))
}

export default CountryDetails;
