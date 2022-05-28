import React from 'react';

const About = () =>{
    return(
        <div className='about'>
            <div className='info'>
                <h1 className='location'>Location : 1239 Park St, Alameda, CA 94501 </h1>
                <h1 className='location'>Phone Number :  510-263-8128 </h1>
                <img src={require("../imgs/logo.png")} alt=""/>
            </div>
            <ul className='hours'>Hours Of Operation
            <li>Monday
                <ul>
                <li>Closed</li>
                </ul>
            </li>
            <li>Tuesday
                <ul>
                <li>11:00 am - 2:30 pm</li>
                <li>4:30 pm - 8:30 pm</li>
                </ul>
            </li>
            <li>Wednesday
                <ul>
                <li>11:00 am - 2:30 pm</li>
                <li>4:30 pm - 8:30 pm</li>
                </ul>
            </li>
            <li>Thursday
                <ul>
                <li>11:00 am - 2:30 pm</li>
                <li>4:30 pm - 8:30 pm</li>
                </ul>
            </li>
            <li>Friday
                <ul>
                <li>11:00 am - 2:30 pm</li>
                <li>4:30 pm - 8:30 pm</li>
                </ul>
            </li>
            <li>Saturday
                <ul>
                <li>11:00 am - 2:30 pm</li>
                <li>4:30 pm - 8:30 pm</li>
                </ul>
            </li>
            <li>Sunday
                <ul>
                <li>11:00 am - 2:30 pm</li>
                <li>4:30 pm - 8:30 pm</li>
                </ul>
            </li>
            </ul>
            
        </div>
    );
}
export default About