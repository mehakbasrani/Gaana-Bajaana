import React, { useEffect, useRef, useState } from 'react'
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import SideBar from './SideBar';
import './spotify.css'
import axios from 'axios';
import  { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

function Spotify() {
const [{ token }, dispatch] = useStateProvider();
const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyRef = useRef();
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        //userUrl: data.external_urls.spotify,
        userName: data.display_name,
      };
     
      dispatch({type: reducerCases.SET_USER, userInfo})
      
    };
    getUserInfo();
  }, [dispatch, token]);
  return (
    <div className="parent">
      <div className="spotify__body">
        <SideBar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled} >
          <NavBar  navBackground={navBackground} />
          <div className="body__contents">
            <Main />
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </div>
  )
}

export default Spotify
