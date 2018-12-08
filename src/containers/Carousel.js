import React from 'react'
import Slide from '../components/Slide'
import CarouselSelector from '../components/CarouselSelectors'
import {RightArrow,LeftArrow} from '../components/CarouselArrows'
class Carousel extends React.Component{
  state={
    dataId:1
  }
  changeSlide=()=>{

  }
  timeSlideChange=()=>{

  }
  activeSelector=(e)=>{
    let dot = document.getElementsByClassName('dot-active');
    if(dot.length>0){
      dot[0].className ='dot'
      e.target.className='dot-active'
    }else{
      e.target.className='dot-active'
    }
  }
  render(){
    let {dataId} = this.state;
    return(
      <div className='carousel-container'>
        <div className='slider-controls'>
          <button><LeftArrow/></button>
          <div className='selector-div'>
            <CarouselSelector activeSelector={this.activeSelector}/>
          </div>
          <button><RightArrow/></button>
        </div>
        <Slide dataId={dataId}/>


      </div>
    )
  }
}
export default Carousel
