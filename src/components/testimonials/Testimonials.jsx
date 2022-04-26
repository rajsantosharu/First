import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import {motion} from 'framer-motion'

import { useContext } from 'react'
import { themeContext } from '../../Context'
const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition={duration:2,type:"string"};
    const uthan = "https://yt3.ggpht.com/Vqw8UgaIoMQMLTJVud2gmR9ryzyKzYOyI8ea0SZl2gIcoeU73LE0Q_V2RGbMtWrWAmqr_0P9rw=s900-c-k-c0x00ffffff-no-rj"
    const dos = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTupUNOs6WZS0mHT9LbIAUvTO7HBAEazbdH1g&usqp=CAU"
    const bos = "https://play-lh.googleusercontent.com/8qSHphZGQXeT_adaJxue8mL4f3Rstwx4mZjdG4PRPyseKdAs9cNgvjD6SNjAJbNoW5k=s180-rw"
    const breaking = "https://breakingnewsapp.herokuapp.com/iconlogo.png"
    const client = [
        {
            img: uthan,
            review: "➢ Utthan Science Academy :Designed an android app for EdTech start-up that includes live and recorded video classes.Developed the overall frontend/UI/UX for the application."
        },
        {
            img: dos,
            review: "Developed an android app for online food services which delivers food at the doorstep, especially for Deoghar (Jharkhand) which gained around 2000 downloads on Google Play Store."
        },
        {
            img: bos,
            review: "➢ Bharat Online Services :Developed the overall frontend/UI/UX and graphic design of the application.It's an android app for providing different services at Deoghar (Jharkhand)."
        },
        {
            img: breaking,
            review: "Web application to deliver updated news.It is created by using the MERN stack"
        },
    ]
    return (
        <motion.div
         initial={{left:"30rem"}}
         whileInView={{left:"0rem"}}
         transition={transition}
         className='testimonial-wrapper' id='Testimonials' style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
        }}>
            <div className="t-heading">
                <span>Shortly </span>
                <span>Describe the project work </span>
                
                <dir className='blur t-blur1' style={{ background: "var(--purple)" }}></dir>
                <dir className='blur t-blur2' style={{ background: "#88c6fc" }}></dir>
            </div>

            <Swiper
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                {
                    client.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                    <img src={client.img} alt="" />
                                    <span style={{ color: darkMode ? "white" : "" }}>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </motion.div>
    )
}

export default Testimonials
