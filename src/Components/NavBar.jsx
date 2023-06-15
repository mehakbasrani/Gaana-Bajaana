import React from 'react'
import { useStateProvider } from "../utils/StateProvider";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navbar.css'


function NavBar({ navBackground }) {
  
  const [{userInfo}] = useStateProvider();
  
  return (
    <div className="navbar" navBackground={navBackground}
    // style ={{ backgroundColor: ${({ navBackground }) =>
    // navBackground ? "rgba(0,0,0,0.7)" : "none"}}
    //  style = {{ backgroundColor: `${({navBackground})=> navBackground ? "rgba(0,0,0,0.7)" : "none"}`}}
    > 
      <div className="search__bar">
        <SearchIcon />
        <input type="text" placeholder="Artists, Songs, or Podcasts" />
      </div>
      <div className="avatar">
        <a href= "#">
          <AccountCircleIcon />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  )
}

export default NavBar
