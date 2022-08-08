import React from 'react'
import {BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
          <a href='https://www.facebook.com/wildgingerstreetfood'><BottomNavigationAction color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} /></a>
          <a href='https://www.instagram.com/wildgingerstreetfood/?hl=en'><BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} /> </a>
        </div>
)
}

export default Footer