import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
           <h2>The Generics</h2>
        </div>
        <div className='icon-div'>
            <FaFacebook/>
            <FaXTwitter />
            <FaInstagram/>
        </div>
    </div>
  )
}

export default Footer