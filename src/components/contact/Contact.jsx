import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import {Card} from '@material-ui/core'
import Sendmail from '../sendmail/Sendmail';
import Errorshow from '../errorshow/Errorshow';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition={duration:2,type:"string"}
    const form = useRef();
    const [done,setDone]=useState(false);
    const [err,setError]=useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        const {name,value}=e.target;
        if(!value){
           return setError(true);
        }

        emailjs.sendForm('service_qeg2sf9', 'template_3ne225e', form.current, 'seTiaE1id4-uZkb2u')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <motion.div
        
         className='contact-form' id='Contact' style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}>
            <div className="c-left">
                <div className="details">
                    <span style={{color: darkMode ? "white" : ""}} >Get in Touch</span>
                    <span>contact me</span>
                </div>
            </div>
            <div className="c-right">
                <Card style={{width:"100%"}}>
                <form ref={form} onSubmit={sendEmail} className="c-right">
                <input type="text" placeholder='Name' className='user' name='name' />
                <input type="text" placeholder='Email' className='user' name='email' />
                <textarea name="message" id="" cols="30" className='msg' rows="10" placeholder='Message'></textarea>
                <button name='send' type='submit' className='btn'>Send</button>
                { done && <Sendmail done={done} setDone={setDone}/>}
                { err && <Errorshow err={err} setError={setError} />}
                </form>
                </Card>
            </div>
        </motion.div>
    )
}

export default Contact
