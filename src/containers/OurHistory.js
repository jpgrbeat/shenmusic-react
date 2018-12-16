import React from 'react'

class OurHistory extends React.Component{
  render(){
    return(
      <div className='history'>
        <div className='history-header'>
          <h1>A Little About Who We Are</h1>
        </div>
        <div className='history-content'>
          <p>In 1986, Roger Strosnider did some stuff with money and that led to this store opening. The end.</p>
          <p>In 2018, Matt Strosnider did more stuff with money and now the store is his.</p>
          <p>Here's a video about who we are</p>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
      </div>
    )
  }
}
export default OurHistory
