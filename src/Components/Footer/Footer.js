import React from 'react'
import './Footer.css'
import logo from '../../assest/images/footer-logo.png'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='foooter-nav'>
        <img className='footer-logo' src={logo} alt='footer-logo'/>
        <h1>JeevShakti Foundation</h1>
        </div>
        <div className='footer-middle'>
        <p>Non Profit Organization for Animals</p>
        </div>
        <p className='footer-line'>Designed by Panacee Software Solutions Pvt. Ltd.</p>
    </div>
  )
}

export default Footer