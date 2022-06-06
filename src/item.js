import React from 'react';


const Item = ({name, price, counterID})=>{

    return(
        <div className="item">
            <div className='description'>
                <h1 className='homefont'>{counterID}</h1>
			    <h1 className='homefont'>{name}</h1>
                <h1 className='homefont'>${price}</h1>
            </div>
            <img className="imgH" src= {require('./imgs/sticker.png')} alt ={require('./imgs/sticker.png')}/>
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