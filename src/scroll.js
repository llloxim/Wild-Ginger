import React from 'react';

const Rolling = ({items}) => {
    const itemList = [];
    let keys = Object.keys(items);
    itemList.push(<h3 className='scrollT'>Click to Jump to Section</h3>)
    for (let i = 0; i < keys.length; i++){
        itemList.push(<li><a href={"#" + keys[i]}> {keys[i]} </a></li>)
    }
    return (
        <nav className='scroll'>
            <ul className='links'>
            {itemList}
            </ul>
        </nav>
    );
};
export default Rolling