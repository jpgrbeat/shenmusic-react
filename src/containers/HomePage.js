import React from 'react'
import Carousel from './Carousel'
import ServiceDescriptor from '../components/ServiceDescriptor'
import MissionStat from '../components/MissionStat'
import Logos from './Logos'
import OurHistory  from './OurHistory'
import BlogContainer from './BlogContainer'
class HomePage extends React.Component{
  render(){
    return(
      <div className='home-container'>
        <Carousel/>
        <MissionStat/>
        <OurHistory/>
        <ServiceDescriptor/>
        <Logos/>
        <BlogContainer/>
      </div>
    )
  }
}
export default HomePage
