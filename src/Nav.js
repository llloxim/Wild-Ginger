import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
    const [isActive, setActive] = useState(false);
    const [style, setStyle] = useState("nav-links");
    const handleToggle = () => {
      setActive(!isActive);
      if (!isActive){
        setStyle("nav-active");
      } else {
        setStyle("nav-links");
      }
    };
    return(
        <nav>
            <ul className={style}>

                <li>
                    <Link to={`/`} className="Toolbar">Home</Link>
                </li>
                <li>
                    <Link to={`/Malatang`} className="Toolbar">Create Your Own Malatang</Link>
                </li>
                <li>
                    <Link to={`/ToGo`} className="Toolbar">ToGo</Link>
                </li>
                <li>
                    <Link to={`/About`} className="About">About</Link>
                </li>
            </ul>
            <div className='burger' 
            style={{
                transform: !isActive ? "rotate(0deg)" : "rotate(90deg)",
            }} onClick={handleToggle}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>

    );
}
export default Nav