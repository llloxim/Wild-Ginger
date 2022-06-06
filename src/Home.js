
import React, {useContext} from 'react';
import Rolling from './scroll';
import Catagory from './Catagory';
import {MenuContext} from './MenuContext';
import SlideHome from './slides/homeSlide';

const Home = () =>{
	const scrollToTop = () =>{
		window.scrollTo({
		  top: 0, 
		  behavior: 'smooth'
		});
	  };
    return(
        <div>
			<div className='backImg'>

        	<div className='center'>
				<SlideHome/>
				<Rolling items={useContext(MenuContext)}/>
			</div>
				<Catagory/>
			</div>
			<button onClick={scrollToTop} id="myBtn" title="Go to top">Top</button>
        </div>

    );
}
export default Home