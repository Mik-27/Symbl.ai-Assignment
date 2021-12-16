import "./App.css";
import React, { useState, useEffect } from "react";
import sampleData from "./sample.json";
import Navbar from "./components/navbar";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		var arr = sampleData["data"];

		arr.sort((a, b) => {
			return a.id - b.id;
		});
		setData(arr);
	}, []);

	console.log(data);
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				{data.map((item) => {
					return (
						<h2 key={item.id}>
							{item.id} - {item.name}
						</h2>
					);
				})}
			</div>
		</div>
	);
}

export default App;
