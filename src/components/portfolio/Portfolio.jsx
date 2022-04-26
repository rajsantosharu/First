import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecomerce from '../../img/ecommerce.png'
import Music from '../../img/musicapp.png'

import 'swiper/css'
import { useContext } from "react";
import { themeContext } from '../../Context'
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const url="https://lh3.googleusercontent.com/p/AF1QipOACHMvhMCrDACXgnepoJbP8Ua7LmlX5WUbh_CF=w1080-h608-p-no-v0"
  return (
    <div className='portfolio'  id='Portfolio' style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
       <span style={{color: darkMode ? "white" : ""}}>Recent Projects</span>
  

       <Swiper
       spaceBetween={30}
       slidesPerView={3}
       grabCursor={true}
       className="portfolio-slider">
           <SwiperSlide>
            <img src={url}  />
           </SwiperSlide>
           <SwiperSlide>
            <img src={url}  />
           </SwiperSlide>
           <SwiperSlide>
            <img src={url}  />
           </SwiperSlide>
           <SwiperSlide>
            <img src={url}  />
           </SwiperSlide>
           <SwiperSlide>
            <img src={url}  />
           </SwiperSlide>
           <SwiperSlide>
            <img src={url}  />
           </SwiperSlide>
       </Swiper>
    </div>
  )
}

export default Portfolio
