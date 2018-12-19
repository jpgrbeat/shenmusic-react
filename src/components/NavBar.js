import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../images/Blue.png'
import HeroIcon from './HeroIcon'
class NavBar extends React.Component{

  render(){
    return(
      <div className='nav-container'>
        <HeroIcon/>
        <button className='menu-button'>
          <div className='menu-bar'>
          </div>
          <div className='menu-bar'>
          </div>
          <div className='menu-bar'>
          </div>
        </button>
        <div className='response-nav'>
        </div>
      </div>
    )
  }
};
export default NavBar;
// <nav>
//   <ul>
//     <NavLink to='/'>Link</NavLink>
//     <NavLink to='/'>Link</NavLink>
//   </ul>
// </nav>
// <a className='call-link' href= "tel:5406652781">
//   <button className='call-button'>Call Us!: 540-665-2781 </button>
// </a>
//
// <NavLink className='link-logo' exact to= '/'>
//   <img className='logo' src={logo} alt='Shenandoah Music Logo'/>
// </NavLink>
