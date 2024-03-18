import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-100 d-flex flex-column justify-content-center bg-dark'>
      <div className="row p-5">
        <div className="col">
          <h4 >Media Player 2024</h4>
          <p style={{ textAlign: 'justify' }}>Discover endless entertainment possibilities with our innovative media player. Stream your favorite videos seamlessly, manage
            playlists effortlessly, and personalize your viewing experience with customizable themes. Share your media journey with friends and
            family with integrated
            social sharing features. Elevate your entertainment experience today with our versatile media player.</p>
        </div>
        <div className="col" style={{ color: '#e3d8d8' }}>
          <h4 style={{ marginLeft: '200px', color: '#e3d8d8' }}>Page Links</h4>
          <Link to={'/'} style={{ marginLeft: '200px', color: '#e3d8d8' }}>Landing</Link><br />
          <Link to={'/dashboard'} style={{ marginLeft: '200px', color: '#e3d8d8' }}>  Dashboard</Link><br />
          <Link to={'/history'} style={{ marginLeft: '200px', color: '#e3d8d8' }}>History</Link><br />
        </div>
        <div className="col">
          <h4 style={{ marginLeft: '250px' }}>References</h4>
          <a href="https://getbootstrap.com/" target="_blank" style={{ marginLeft: '270px', color: '#e3d8d8' }} >Bootstrap</a> <br />
          <a href="https://react-bootstrap.netlify.app/" target="_blank" style={{ marginLeft: '270px', color: '#e3d8d8' }}>React-Bootstrap</a><br />
          <a href="https://react.dev/" target="_blank" style={{ marginLeft: '270px', color: '#e3d8d8' }}>React</a><br />
        </div>
      </div>
      <div className='text-center '>
        <p>&copy; Media Player 2024</p>
      </div>

    </div>
  )
}

export default Footer
