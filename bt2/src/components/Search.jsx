import React from 'react'
import bgr from '../img/bgr.jpg'
const Search = () => {
  return (
    <div className='search' style={{ backgroundImage: `url(${bgr})` }}>
      <div className='search-content'>
        <h1>Unsplash</h1>
        <p>The internet's source of freely-usable images.</p>
        <p>Powered by creators everywhere.</p>
        <div>
          <input type="text" placeholder='Search free high-resolution photos' className='nav-search' />
        </div>
        <p>Trending:flowerwallpapersbackgroundshappylove</p>
      </div>

    </div>
  )
}

export default Search