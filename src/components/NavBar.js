import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../images/Blue.png'
class NavBar extends React.Component{

  render(){
    return(
      <div className='nav-container'>
        <div className='response-nav'>
          <button className='menu-button'>
            <div className='menu-bar'>
            </div>
            <div className='menu-bar'>
            </div>
            <div className='menu-bar'>
            </div>
          </button>
        </div>
        <NavLink exact to= '/'>
          <img src={logo} alt='Shenandoah Music Logo' style={{float:'left',width:'85px', marginTop:'5px'}}/>
        </NavLink>
        <a className='call-link' href= "tel:5406652781">
          <button className='call-button'>Call Us!: 540-665-2781 </button>
        </a>

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
