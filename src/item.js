import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({name, price, counterID, imgLink})=>{
    return(
        <div className="item">
            <div className='description'>
                <h1 className='homefont'>{counterID}</h1>
			    <h1 className='homefont'>{name}</h1>
                <h1 className='homefont'>${price}</h1>
            </div>
            <Carousel className='imgH' >
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={imgLink}
                alt="./imgs/sticker.png"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="./imgs/sticker.png"
                alt="./imgs/sticker.png"
              />
            </Carousel.Item>
            </Carousel>
            {/* <img className="imgH" src= {require('./imgs/sticker.png')} alt ={require('./imgs/sticker.png')}/> */}
            {/*<h1 className="space">
                <button className="buttonMinus" onClick={() => {
                let copy = [...counter]
                copy[counterID] -= 1
                if (counter[counterID] > 0){
                    setCounter(copy)
                }
                }}> - </button>

                {counter[counterID]}
                <button className="buttonPlus" onClick={() => {
                let copy = [...counter]
                copy[counterID] += 1
                setCounter(copy)
                let cart = {...order}
                if (name in order){
                    cart[name] += 1
                } else {
                    cart[name] = 1
                }
                setOrder(cart)
                Object.entries(cart).forEach(([key, value]) => {
                    console.log(key, value);
                 });
                }}> + </button>
            </h1>*/}
            
		</div>
    );
};

export default Item