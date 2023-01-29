import "./searchItem.css"
import React from 'react'

export default function SearchItem() {
  return (
      <div className="searchItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/315885586.webp?k=a431145dd90d6165248a24d7262bc5be0c22556b43cd3ed98a0dff295855b619&o=&s=1" alt="" className="siImg" />
          <div className="siDesc">
              <h1 className="siTitle">Tower Street Apartments</h1>
              <span className="siDistance">500m from center</span>
              <span className="siTaxiOp">Free Airport Taxi</span>
              <span className="siSubtitle">
                  Studion Apartment With Air Conditioning
              </span>
              <span className="siFeatures">
                  Entire Studio 1bathroom 21m<sup>2</sup> 1 fullbed
              </span>              
              <span className="siCancelOp">Free Cancelation</span>
              <span className="siCancelOpSubtitle">
                  You can cancel later,so lock on this great price today     
              </span>
          </div>
          <div className="siDetails">
              <div className="siRating">
                  <span>Excellent</span>
                  <button>8.9</button>
              </div>
              <div className="siDetailTexts">
                  <span className="siPrice">$123</span>
                  <span className="siTaxOp">Includes Taxes And Fees</span>
                  <button className="siCheckButton">See Availability</button>
              </div>
          </div>
      </div>
  )
}
