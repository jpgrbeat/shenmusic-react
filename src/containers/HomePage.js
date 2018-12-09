import React from 'react'
import Carousel from './Carousel'
import ServiceDescriptor from '../components/ServiceDescriptor'
import MissionStat from '../components/MissionStat'
class HomePage extends React.Component{
  render(){
    return(
      <div className='home-container'>
        <Carousel/>
        <MissionStat/>
        <ServiceDescriptor/>
        <ServiceDescriptor/>
        <ServiceDescriptor/>
        <ServiceDescriptor/>
      </div>
    )
  }
}
export default HomePage
