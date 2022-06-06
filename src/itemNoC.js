import React from 'react';

const ItemNoC = ({name, price, counterID, img})=>{
    return(
        <div className="itemNoC">
            <div className='description'>           
                <h3 className='mtext'>{counterID}</h3>
                <h3 className='mtext'>{name}</h3>
			    <h3 className='mtext'>${price}</h3>
            </div>
            <img className="img" src={img} alt={"./imgs/sticker.png"} />
		</div>
    );
};

export default ItemNoC