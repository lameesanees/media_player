import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center ' style={{ height: '80vh' }}>
        <div className="row p-5 shadow">
          <div className="col d-flex flex-column justify-content-center">
            <h1>Media Player</h1>
            <p>
              Discover endless entertainment possibilities with our innovative media player. Stream your favorite videos seamlessly, manage
              playlists effortlessly, and personalize your viewing experience with customizable themes. Elevate your entertainment experience today with our versatile media player.
            </p>
            <div>
              <Link to={'/dashboard'} className='btn bg-black'>Explore</Link>

            </div>
          </div>

          <div className="col">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Media_Player_Windows_11_logo.svg/2048px-Media_Player_Windows_11_logo.svg.png" style={{ borderRadius: '20px', marginLeft: '250px', width: '50vh' }} className='image fluid' alt="" />
          </div>
        </div>
      </div>


      <div className="mt-3 p-5">
        <h2 className='text-center'>Features</h2>
        <div className="d-flex mt-2 flex-row justify-content-between">

          {/* card 1 */}
          <div className="card" style={{ width: ' 18rem' }}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/4625326/screenshots/19602645/media/a38d52a0a465a2265aee186316cfa590.gif" style={{ height: '300px' }} alt="Card image cap" />
            <div className="card-body" style={{ color: "white" }}>
              <h5 className="card-title">Upload Video</h5>
              <p className="card-text">Easily upload your media with intuitive playlist controls. </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card" style={{ width: ' 18rem' }}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/1369921/screenshots/3697952/yt---music.gif" style={{ height: '300px' }} alt="Card image cap" />
            <div className="card-body" style={{ color: "white" }}>
              <h5 className="card-title">Watch Videos</h5>
              <p className="card-text">Discover your videos by creating a categories on your preferences.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card" style={{ width: ' 18rem' }}>
            <img className="card-img-top" src="https://i.pinimg.com/originals/2e/40/2f/2e402fad559cd73ebc13d7429588cfc0.gif" style={{ height: '300px' }} alt="Card image cap" />
            <div className="card-body" style={{ color: "white" }}>
              <h5 className="card-title">View History</h5>
              <p className="card-text">Discover new content based on your viewing history and preferences.</p>
            </div>
          </div>

        </div>
        <br /> <br /> <br />

        <div className="row  mt-5 d-flex justify-content-center align-items-center ">
          <div className="col">
          <h2>Simple, fast and secured.</h2>
          <p style={{ textAlign: 'justify' }}>Media player 2024 is a platform for simple and faster youtube video uploading and management. It will store the video watch history too along with that you get a simple video player interface with the app itself</p>
        </div>
        <div className='col' style={{ marginLeft: '100px' }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Wnydl7IXH-A?si=GY3dhj2K1xj2oawA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
      </div>
    </>

  )
}

export default Landing
