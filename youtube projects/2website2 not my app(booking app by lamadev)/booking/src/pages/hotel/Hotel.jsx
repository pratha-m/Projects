import "./hotel.css"
import React,{useState} from 'react'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

export default function Hotel() {
  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false)
  const photos=[
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/338004770.webp?k=1f7142437cbc075313c5f258137625c683c5cc5d4432f44348dc1c5c1ccf748d&o=&s=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/284887692.webp?k=d731f8c07672a829ce2591733a67da50b08a442154de2dd36751e65399f61f63&o=&s=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/172337136.webp?k=f6aa6b37f8ff6b22f52e54fb6447dfb266c216c528056755f7055160ad5c1646&o=&s=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/340360623.webp?k=16ae6132c6b4571b8d31058e3868fa7a1f910b928e4388488c5f1d248dcc816c&o=&s=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/329168953.webp?k=a447e8a8e1b7bb053471c7f2570f7b21aaf7f9ac94ba247099a09e4bfea45e1d&o=&s=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/249227071.webp?k=8f39883b98c314fcbd06271478eed8ee264b3f49db5948eddec73dcf6369858f&o=&s=1"
    },
  ];
  const handleOpen=(i)=>{
     setSlideNumber(i);
     setOpen(true)
  }
  const handleMove=(direction)=>{
      let newSlideNumber;
      if(direction==="l"){
        newSlideNumber=(slideNumber===0)?(5):(slideNumber-1)
      }
      else{
        newSlideNumber=(slideNumber===5)?(0):(slideNumber+1)
      }
      setSlideNumber(newSlideNumber);   
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>{setOpen(false)}}/>  
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>{handleMove("l")}}/>  
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>{handleMove("r")}}/>  
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton st 125 New York</span>
          </div>  
            <span className="hotelDistance">
              Excellent Location - 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>{handleOpen(i)}} src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
            </div>    
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of krakow</h1>
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, fugiat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, beatae!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, sequi.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay</h1>
                <span>
                  Located in the real heart of krakow,
                  this property has an excellent location 
                  score of 9.8
                </span>
                <h2>
                  <b>$945</b>(9 nights)
                </h2>
                <button>Reserve a book now</button>
              </div>
            </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}
