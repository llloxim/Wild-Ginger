import React from 'react';

const ItemNoC = ({name, price, counterID, img})=>{
    return(
        <div className="itemNoC">
            <h3 >{counterID}</h3>
            <h3 >{name}</h3>
			<h3 >${price}</h3>
            <img className="img" src={img} alt={"./imgs/sticker.png"} />
		</div>
    );
};

export default ItemNoC