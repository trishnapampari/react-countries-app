
import './CountriesListShimmer.css'
import './CountryDetails.css'

export default function CountryDetailsShimmer() {
  return (
   
        <div className='country-details'>
            <div className='shimmer-card-details'></div>
             <div className="details-text-container">
                 <div className="details-text">
                    {Array.from({length:6}).map((ele,i) => (
                        <p key={i} className='column-div'>
                        </p>
                    ))}
            </div>
             </div>
        </div>
    
  )
}
