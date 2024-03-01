import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import LandingPage from "./components/landingPage/LandingPage";
import ProductPage from "./components/products/ProductsPage";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "preline/preline";


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
								<Route path="/products" element={<ProductPage />} />
								{/* <Route path="submitScores" element={<SubmitScores />} /> */}
								{/* <Route path="playerScores" element={<PlayerScores />} /> */}
							</Routes>
						</div>
					</Router>
				</div>
				<footer id="BANNER" className="App">
					<Footer />
				</footer>
			</div>
		</PrimeReactProvider>
	);
}

export default App;
