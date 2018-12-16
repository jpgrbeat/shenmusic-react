import React from 'react'
import Drum from '../images/perump.jpg'
import Staff from '../images/staff-sales-image.jpg'
import Snow from '../images/snow-shen.jpg'
import Ties from '../images/tie-fridays.jpg'
import {Sales,Service,Lessons,Rentals} from './Descriptors'
class ServiceDescriptor extends React.Component{
  state={
    selectorId:null
  }
  onClick=(e)=>{
    if(this.state.selectorId === e.target.id){
      this.setState({
        selectorId:null
      })
    }else{
      this.setState({
        selectorId: e.target.id
      })
    }
  }
  render(){
    let {selectorId} = this.state;
    return(
      <div className='service-container'>
        <div className='service-header'>
          <h1>Our Services</h1>
        </div>
        <div className='service-gallery'>
          <div className='row-g'>
            <div className='col'>
              <img src={Ties} alt='ties'/>
              <div className='image-overlay' id='Sales' onClick={this.onClick}>
                <h3>Sales</h3>
              </div>
            </div>
            <div className='col'>
              <img src={Drum} alt='ties'/>
              <div className='image-overlay' id='Service' onClick={this.onClick}>
                <h3>Service and Repairs</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {selectorId === 'Sales' ? <Sales/> : null}
            {selectorId === 'Service' ? <Service/> :null}
            {selectorId === 'Lessons' ? <Lessons/> : null}
            {selectorId === 'Rentals' ? <Rentals/> : null}
          </div>
          <div className='row-g'>
            <div className='col'>
              <img src={Snow} alt='ties'/>
              <div className='image-overlay' id='Rentals' onClick={this.onClick}>
                <h3>Rentals</h3>
              </div>

            </div>
            <div className='col' >
              <img src={Staff} alt='ties'/>
              <div className='image-overlay' id='Lessons' onClick={this.onClick}>
                <h3>Lessons</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
}
export default ServiceDescriptor
