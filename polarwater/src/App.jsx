import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import LandingPage from "./components/landingPage/LandingPage";
import NavBar from "./Navbar";
import Footer from "./Footer";

function App() {
	return (
		<PrimeReactProvider>
			<div className="App">
				<header
					id="NAVBAR"
					className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 dark:bg-gray-800"
				>
					<NavBar />
				</header>
				<div className="app-bg mx-auto">
					<Router>
						<div className="col">
							<Routes>
								{/* <Route path="/logIn" element={<LogIn />} /> */}
								<Route path="/" element={<LandingPage />} />
								{/* <Route path="generate" element={<GenerateTeam />} />
								<Route path="submitScores" element={<SubmitScores />} />
								<Route path="playerScores" element={<PlayerScores />} /> */}
							</Routes>
						</div>
					</Router>
				</div>
				<footer id="NAVBAR" className="App">
					<Footer />
				</footer>
			</div>
		</PrimeReactProvider>
	);
}

export default App;
