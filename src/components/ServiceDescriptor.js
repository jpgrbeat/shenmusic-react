import React from 'react'
import Drum from '../images/perump.jpg'
import Staff from '../images/staff-sales-image.jpg'
import Snow from '../images/snow-shen.jpg'
import Ties from '../images/tie-fridays.jpg'
const ServiceDescriptor =()=>{
  return(
    <div className='service-container'>
      <div className='service-gallery'>
        <div className='row'>
          <img src={Ties} alt='tie fridays'/>
          <img src={Snow} alt='snow'/>
        </div>
        <div className='row'>
          <img src={Drum} alt='drum'/>
          <img src={Staff} alt='staff'/>
        </div>
      </div>
    </div>
  )
}
export default ServiceDescriptor
