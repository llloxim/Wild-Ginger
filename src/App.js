import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import './App.css';
import {MenuProvider} from './MenuContext';
import {CounterProvider} from './CounterProvider'
import {OrderProvider} from './OrderProvider'
import Home from './Home';
import Mt from './Mt';
import Nav from './Nav';
import ToGo from './ToGo';
import About from './socials/About';
function App() {
	return (
		<MenuProvider>

				<OrderProvider>
					<div className="app">
					{/* <div className='center'>
					<img src={require("./imgs/logo.png")} alt=""/>
					<Rolling/>
					</div>
						<div className='backImg'>
						<Catagory/>
						<Malatang/>
						</div> */}
						<BrowserRouter>
							<Nav/>
							<Routes>
								<Route path="/" element={<Home/>}/>
								<Route path="/Malatang" element={<Mt/>}/>
								<Route path="/ToGo" element={<ToGo/>}/>
								<Route path="/About" element={<About/>}/>
							</Routes>
						</BrowserRouter>
					</div>
				</OrderProvider>
		</MenuProvider>
	);
}

export default App;