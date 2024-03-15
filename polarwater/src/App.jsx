import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import LandingPage from "./components/landingPage/LandingPage";
import WholeHouse from "./components/products/wholeHouseSystem/WholeHouse";
import DrinkingWater from "./components/products/drinkingWaterSystem/DrinkingWater";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "preline/preline";


function App() {
	return (
		<PrimeReactProvider>
			<div className="App">
			<Router>
				<header
					id="NAVBAR"
					className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm dark:bg-gray-800"
				>
					<NavBar />
				</header>
				<div className="app-bg mx-auto">
					
						<div className="col overflow-x-scroll">
							<Routes>
								{/* <Route path="/logIn" element={<LogIn />} /> */}
								<Route path="/home" element={<LandingPage />} />
								<Route path="/products/wholeHouseSystems" element={<WholeHouse />} />
								<Route path="/products/drinkingWaterSystems" element={<DrinkingWater />} />
								{/* <Route path="submitScores" element={<SubmitScores />} /> */}
								{/* <Route path="playerScores" element={<PlayerScores />} /> */}
							</Routes>
						</div>
				</div>
				<footer id="BANNER" className="App">
					<Footer />
				</footer>
			</Router>
			</div>
		</PrimeReactProvider>
	);
}

export default App;
