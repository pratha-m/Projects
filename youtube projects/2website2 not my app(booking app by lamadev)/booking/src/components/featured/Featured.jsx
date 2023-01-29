import "./featured.css"
import React from 'react'
import nature1 from "../../images/images"
export default function Featured() {
  return (
      <div className="featured">
          <div className="featuredItem">
              <img src={nature1} alt="hello" className="featuredImage"/>
              <div className="featuredTitles">
                  <h1>Dublin</h1>
                  <h2>123 properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="hello" className="featuredImage"/>
              <div className="featuredTitles">
                  <h1>Austin</h1>
                  <h2>532 properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="hello" className="featuredImage"/>
              <div className="featuredTitles">
                  <h1>Reno</h1>
                  <h2>533 properties</h2>
              </div>
          </div>
      </div>
  )
}
