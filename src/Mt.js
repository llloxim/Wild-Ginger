
import React from 'react';
import Malatang from './Malatang';
import Rolling from './scroll';
import MalatangJS from './Malatang.json'
import MalatangSlide from './slides/MalatangSlide';

const Mt = () =>{
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
          <MalatangSlide/>
				  <Rolling items={MalatangJS}/>
        </div>
				  <Malatang/>
				</div>
        <button onClick={scrollToTop} id="myBtn" title="Go to top">Top</button>
      </div>
    );
}
export default Mt