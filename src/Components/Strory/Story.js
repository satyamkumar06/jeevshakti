import React from 'react'
import './Story.css'
import before from '../../assest/images/before.png'
import after from '../../assest/images/after.png'
const Story = () => {
  return (
    <div>
    <div className='story-tittle'>
    <h1 className='story-main-tittle'><span className='story-res'>Res</span><span className='story-cue'>cue</span> <span className='story-stories'>Stories</span></h1>
    </div>
    
    <div className='story-container'>
    <div className='story-left'>
    <img className='img-before' src={before} alt='before'/>
    <img className='img-after' src={after} alt='after'/>
    </div> 
    <div className='story-right'>
    <p className='abondoned'>Abandoned in Streets</p>
    <p className='text-story'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
     galley of type and scrambled it to make a type specimen book.nd more recently with desktop publishing software like Aldus 
     PageMaker including versions of Lorem Ipsum.</p>
     <p><span className='view-story'>View F</span><span className='ull-story'>ull Story</span></p>
    </div>

    </div>
    </div>
  )
}

export default Story