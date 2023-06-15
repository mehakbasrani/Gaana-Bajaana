import React from 'react'
import axios from 'axios';
import  { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

function Volume() {

    const [{ token }] = useStateProvider();
    const setVolume = async (e) => {
      await axios.put(
        "https://api.spotify.com/v1/me/player/volume",
        {},
        {
          params: {
            volume_percent: parseInt(e.target.value),
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
    };

  return (
    <div>
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </div>
  )
}

export default Volume
