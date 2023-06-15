import React from 'react'
import './footer.css'
import CurrentTrack from './CurrentTrack'
import ControlPlayers from './ControlPlayers'
import Volume from './Volume'

function Footer() {
  return (
    <div className="footer">
     <CurrentTrack />
     <ControlPlayers />
     <Volume />
    </div>
  )
}

export default Footer
