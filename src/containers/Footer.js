import React from 'react'


class Footer extends React.Component{
  render(){
    return(
      <div className='footer'>
        <ul>
          <li><a href='/'>Link</a></li>
          <li><a href='/'>Link</a></li>
          <li><a href='/'>Link</a></li>
          <li><a href='/'>Link</a></li>
        </ul>
        <div className='hours'>
          <h4>Hours</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Footer
