import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import countriesDatalist from '../countriesData'
import CountriesListShimmer from './CountriesListShimmer'

export default function CountriesList({serachName}) {
 
const [countriesData,setCountryData]=useState([]);

// by writing this - page will render countinusly and Api will be keep on calling
if(countriesData==0){ // by writing this, Api will be called only once - but this is not the correct way to write
  fetch('https://restcountries.com/v2.1/all')
  .then(res=>res.json())
  .then((data)=>{
    setCountryData(data);
  })
}
//corret way to call APi
useEffect(()=>{
 fetch('https://restcountries.com/v2.1/all')
  .then(res=>res.json())
  .then((data)=>{
    setCountryData(data);
  })

  // this is used for cleaning purpose,  when the component unmounts, this will run
  return ()=>{
    console.log('cleaning') 
  }
},[]) // [] - dependency array - by this this will be called only once. 
      // if anything in that attay chnages, use effect will get called again

const array=countriesDatalist
          .filter((country) =>
            country.name.common.toLowerCase().includes(serachName) ||
          country.region.includes(serachName)
          )

  return (
    <>
    {array.length==0 && <CountriesListShimmer /> }
     {array.length!=0 &&  <div className="countries-container">
        {array
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            )
          })}
      </div>
}
    </>
  )
}