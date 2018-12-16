import React from 'react'
import Facebook from '../images/facebook.png'

class Footer extends React.Component{
  render(){
    return(
      <div className='footer'>
        <ul>
          <li><a href='/'>Maintenance Form</a></li>
          <li><a href='/'>Rental Form</a></li>
          <li><a href='/'>Complaint Form</a></li>
          <li><a href='/'>You're Mom's Form</a></li>
        </ul>
        <div className='hours'>
          <h4>Hours</h4>
          <ul>
            <li>I</li>
            <li>assure</li>
            <li>you</li>
            <li>we're</li>
            <li>open</li>
          </ul>
        </div>
        <div className='facebook'>
          <img src={Facebook} alt='blah blah blah'/>
        </div>
      </div>
    )
  }
}
export default Footer
