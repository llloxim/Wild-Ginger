import React from 'react';
import ItemNoC from './itemNoC';
import MalatangJS from './Malatang.json'
import Footer from './socials/Footer';
const Malatang = ()=>{
    const itemList = [];
    const keys = Object.keys(MalatangJS);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        const parts = MalatangJS[key];
        itemList.push(<h1 className="catagoryNoC" key={key} id ={key}>{key}</h1>)
        var wrapper = []
        for(let j = 0; j < parts.length; j++){
            const food = parts[j];
            wrapper.push(<ItemNoC name={food.Name} price={food.Price} key={food.Name} counterID={0} img={food.img}/>)
        }
        itemList.push(<div className='wrapper'>{wrapper}</div>)
    }
    return(
        <div className="classM">
            <h1 className="Malatang"> Malatang </h1>
            {itemList}
            <Footer/>
		</div>
    );

};
export default Malatang