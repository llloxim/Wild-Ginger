import React, {useEffect, useState} from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Tweet from './tweet.js';
import './App.css'
import Recipe from "./Recipe"
import Selection from "./Selection.js"

function App(){
  const [users, setUsers] = useState([
    {name: "e", message : 'hello'},
    {name: "d", message : 'hello'},
    {name: "f", message : 'hello'}
  ]);
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    console.log("run")
  }, [counter]);

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const getRecipes = async () => {
    const response = await fetch()
    const data = await response.json();
    console.log(data);
  }
  const updateSearch = e =>{
    setSearch(e.target.value)
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className = "app">
      <form className = "searh form" onSubmit={getSearch}>
        <input className = "search-bar" type ="text" value={search} onChange={updateSearch} />
        <button className = "search-button" type= "submit">search</button>
      </form>
      <h1 onClick={()=> setCounter(counter+1)}>{counter}</h1>
      <Selection name="First" price={5} />
      <Selection name="Second" price={3} />
      <Selection name="First" price={4} />
    </div>
  );
}

export default App;