import React, {useEffect, useState} from 'react';

function Selection({name, price}) {
    const [counter, setCounter] = useState(0);
    return(
        <div className='Selection'>
            <h1 className='space'>{name}</h1>
            <h1 className='space'>${price}</h1>
            <h1 onClick={()=> {
                if(counter > 0){
                    setCounter(counter-1)
                    }
                }
            } className='space'>-</h1>
            <h1 className='space'>{counter}</h1>
            <h1 onClick={()=> {
                setCounter(counter+1)
                } 
            }className='space'>+</h1>
        </div>
    )
}

export default Selection