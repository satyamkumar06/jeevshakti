import React from 'react'
import './Stories.css'
import first from '../../assest/images/firsrt.png'
import second from '../../assest/images/second.png'
import third from '../../assest/images/third.png'
const Stories = () => {
  return (
    <div className='Stories-container'>
    <div className='stories-right'>
        <img className='first-image' src={first} alt='first-story'/>
        
        <img className='second-image' src={second} alt='second-story'/>
        
        <img className='third-image' src={third} alt='third-story'/>
        
        <img className='fourth-image' src={third} alt='third-story'/>
        
    </div>
        <div className='stories-left'>
        <button className='all-stories'>View all stories -- </button>
        </div>
    </div>
  )
}

export default Stories