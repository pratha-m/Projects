import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <div className='adminPage'>
      Welcome to Admin Panel
      <div className="leftSideBar">
          <div className="eachOption">Create Owner</div>
          <div className="eachOption">Create Product</div>
          <div className="eachOption">Edit Product</div>
      </div>
    </div>
  )
}

export default Home