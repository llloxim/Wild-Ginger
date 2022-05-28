import React, {useContext} from 'react';
import Item from './item';
import {MenuContext} from './MenuContext';

const Catagory = ()=>{
    const items = useContext(MenuContext);
    const itemList = [];
    const keys = Object.keys(items);

    var place = 0
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        const parts = items[key];
        itemList.push(<h1 className="catagory" id={key} key={key}>{key}</h1>)
        var wrapper = []
        for(let j = 0; j < parts.length; j++){
            const food = parts[j];
            wrapper.push(<Item name={food.Name} price={food.Price} key={food.Name} counterID={place}/>)
            place += 1
        }
        itemList.push(<div className='wrapper'>{wrapper}</div>)
    }
    return(
        <div className="class">
            {itemList}
		</div>
    );
};
export default Catagory