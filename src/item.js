import React from 'react';


const Item = ({name, price, counterID})=>{

    return(
        <div className="item">
            <h1 >{counterID}</h1>
			<h1 >{name} :  ${price}</h1>
			<h1 >${price}</h1>
            <img src= {require('./imgs/sticker.png')} alt ={require('./imgs/sticker.png')}/>
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