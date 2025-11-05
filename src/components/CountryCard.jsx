import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({name, flag,population, region, capital,data}) {
  return (
    //state - to pass the data to the routed component
    <Link className='country-card' to={`/${name}`} state={data}>
         <img src={flag} alt="flag" />
        <div className="card-text">
            <h3 className='card-title'>{name}</h3>
              <p><b>Population: </b><span className="native-name">{population}</span></p>
              <p><b>Region: </b><span className="population">{region}</span></p>
              <p><b>Capital: </b><span className="region">{capital}</span></p>
        </div>
           
    </Link>
  )
}
