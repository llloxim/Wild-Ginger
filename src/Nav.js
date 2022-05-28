import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
    return(
        <nav>
            <ul className='nav-links'>
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
        </nav>

    );
}
export default Nav