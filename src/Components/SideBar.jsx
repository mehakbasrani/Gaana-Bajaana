import React from 'react'
import './sidebar.css'
import PlayLists from './PlayLists'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="top__links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <HomeIcon />
            <span>Home</span>
          </li>
          <li>
            <SearchIcon />
            <span>Search</span>
          </li>
          <li>
            <LibraryMusicIcon />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <PlayLists />
    </div>
  )
}

export default SideBar
