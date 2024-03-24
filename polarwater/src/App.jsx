import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PrimeReactProvider } from "primereact/api";
import LandingPage from "./components/landingPage/LandingPage";
import WholeHouse from "./components/products/wholeHouseSystem/WholeHouse";
import DrinkingWater from "./components/products/drinkingWaterSystem/DrinkingWater";
import Banner from "./components/landingPage/banner/Banner";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "preline/preline";


function App() {
	const [isSticky, setIsSticky] = useState(false);
	
	function ConditionalBanner() {
		const location = useLocation(); // Now safely within the <Router>
		
		if (location.pathname === '/home') {
		  return <Banner />;
		}
		
		return null;
	}
  
	useEffect(() => {
	  const handleScroll = () => {
		const banner = document.querySelector('header');
		const navbar = document.getElementById('NAVBAR');
		// Calculate the distance from the banner's top to the top of the document
		const bannerTopToDocumentTop = banner.offsetTop;
		// Determine when the top of the navbar reaches the top of the viewport
		const sticky = window.scrollY >= bannerTopToDocumentTop + banner.offsetHeight - navbar.offsetHeight;
		setIsSticky(sticky);
	  };
  
	  window.addEventListener('scroll', handleScroll);
  
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);
  
	return (
		<PrimeReactProvider>
			<div className="App">
			<Router>
				<header>
					<ConditionalBanner />
					<div
						id="NAVBAR"
						className={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm ${isSticky ? 'fixed top-0 left-0 right-0' : ''}`}
					>
						<NavBar />
					</div>
				</header>
				<div className="app-bg mx-auto" style={{ paddingTop: isSticky ? '3rem' : '0' }}>
					
						<div className="col">
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
				<footer className="App blueOne">
					<Footer />
				</footer>
			</Router>
			</div>
		</PrimeReactProvider>
	);
}

export default App;
