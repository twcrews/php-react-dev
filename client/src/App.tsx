import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [msg, setMsg] = React.useState("Fetching...");
	React.useEffect(() => {
		fetch("api/index")
			.then((res) => res.text())
			.then(setMsg);
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{msg}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
