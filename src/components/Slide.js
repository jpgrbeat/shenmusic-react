import React from 'react'
import Mixer from '../images/mixer-slider.jpg'
class Slide extends React.Component{
  render(){
    return(
      <div className='slide'>
        <img style={{width:'100%'}}className='slide-image' src={Mixer} alt=''/>
      </div>
    )
  }
}
export default Slide
