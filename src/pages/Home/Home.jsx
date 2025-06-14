import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/cards/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias quibusdam sapiente quisquam fugiat,
             amet pariatur dolorum soluta cum esse ea sed numquam. Dolor voluptatibus eius fugit! Dignissimos, exercitationem omnis?</p>
             <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt=""/>More Info</button>
             </div>
             <TitleCards/>
        </div>
      </div> 
      <div className="more-cards">
        <TitleCards title={"Action Movies"}/>
        <TitleCards title={"Only on Netflix"}/>
        <TitleCards title={"Upcoming"}/>
        <TitleCards title={"Top Picks for You🔥"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home