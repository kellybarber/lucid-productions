import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='video-container'>
          <iframe className="video" title="main-media" src="https://www.youtube.com/embed/dL-8y0ph5kw" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className='donate'>Donate</div>
      </div>
    )
  }
}
export default Home
