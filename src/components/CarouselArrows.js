import React from 'react'
import Right from '../images/icons8-chevron-right-64 (1).png'
import Left from '../images/icons8-chevron-left-64.png'

export const LeftArrow=()=>{
  return(
    <img className='arrow' src={Left} alt='back slide'/>
  )
}


export const RightArrow=()=>{
  return(
    <img className='arrow' src={Right} alt='forward slide'/>
  )
}
