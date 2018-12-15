import React from 'react'
import Fender from '../images/logos/585aad184f6ae202fedf2913.png'
import Zildjian from '../images/logos/590px-Zildjian_Logo.svg.png'
import ConnSelmer from '../images/logos/Conn-selmer_logo.png'
import Jackson from '../images/logos/Jackson_guitars_logo.svg.png'
import Kala from '../images/logos/kisspng-kala-satin-mahogany-soprano-ukulele-resonator-guit-5b095831db2871.7846319115273390578977.png'
import Martin from '../images/logos/Martin_guitar_logo.png'
import Peavey from '../images/logos/Peavey_Logo.png'
import Yamaha from '../images/logos/Yamaha_logo_text.svg.png'


class Logos extends React.Component{
  render(){
    return(
      <div className='logos-main'>
        <div className='brands'>
          <h1>We Proudly Carry</h1>
        </div>
        <div className='fender-logo'>
          <img src={Fender} alt='logo'/>
        </div>
        <div className='z-logo'>
          <img src={Zildjian} alt='logo'/>
        </div>
        <div className='conn-logo'>
          <img src={ConnSelmer} alt='logo'/>
        </div>
        <div className='jackson-logo'>
          <img src={Jackson} alt='logo'/>
        </div>
        <div className='kala-logo'>
          <img src={Kala} alt='logo'/>
        </div>
        <div className='martin-logo'>
          <img src={Martin} alt='logo'/>
        </div>
        <div className='peavey-logo'>
          <img src={Peavey} alt='logo'/>
        </div>
        <div className='yamaha-logo'>
          <img src={Yamaha} alt='logo'/>
        </div>
        <div>
        </div>
      </div>
    )
  }
}
export default Logos
