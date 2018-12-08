import React from 'react'

const CarouselSelector =(props)=>{
  return(
    <div className='dots'>
      <span className='dot' onClick={props.activeSelector} id='1'></span>
      <span className='dot' id='2' onClick={props.activeSelector}></span>
      <span className='dot' id='3'onClick={props.activeSelector}></span>
      <span className='dot' id='4' onClick={props.activeSelector}></span>
    </div>
  )
}
export default CarouselSelector
