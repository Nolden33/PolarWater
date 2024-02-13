import logo from "./logo.svg";
import "./App.css";
import { PrimeReactProvider } from "primereact/api";

function App() {
	return (
		<PrimeReactProvider>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Polar Water Site is ready.
					</p>
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
		</PrimeReactProvider>
	);
}

export default App;
