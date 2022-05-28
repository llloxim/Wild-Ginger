import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const MalatangSlide = ()=>{
    return (
        <div>
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="./imgs/sticker.png"
                alt="./imgs/sticker.png"
              />
              <Carousel.Caption>
                <p>Sample Text for Image One</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="./imgs/sticker.png"
                alt="./imgs/sticker.png"
              />
              <Carousel.Caption>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      );
    
};

export default MalatangSlide