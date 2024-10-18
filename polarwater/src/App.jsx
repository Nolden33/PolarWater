import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PrimeReactProvider } from "primereact/api";
import LandingPage from "./components/landingPage/LandingPage";
import WholeHouse from "./components/products/wholeHouseSystem/WholeHouse";
import DrinkingWater from "./components/products/drinkingWaterSystem/DrinkingWater";
import ContactUs from "./components/contactUs/ContactUs";
import Banner from "./components/landingPage/banner/Banner";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./components/ScrollToTop";
import "preline/preline";

function AppWrapper() {
    return (
        <PrimeReactProvider>
            <div className="App">
                <Router>
                    <App />
                </Router>
            </div>
        </PrimeReactProvider>
    );
}

function App() {
    const location = useLocation();
    const [isSticky, setIsSticky] = useState(false);
    const [navbarPosition, setNavbarPosition] = useState('bottom');

    function ConditionalBanner() {
        if (location.pathname === '/') {
            return <Banner />;
        }
        return null;
    }

    useEffect(() => {
        const updateNavbarPosition = () => {
            if (location.pathname === '/') {
                setNavbarPosition('bottom');
            } else {
                setNavbarPosition('top');
                setIsSticky(true);
            }
        };

        updateNavbarPosition();
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const banner = document.querySelector('header');
            const navbar = document.getElementById('NAVBAR');
            if (banner && navbar && location.pathname === '/') {
                const bannerTopToDocumentTop = banner.offsetTop;
                const sticky = window.scrollY >= bannerTopToDocumentTop + banner.offsetHeight - navbar.offsetHeight;
                setIsSticky(sticky);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ensure correct initial rendering

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return (
        <>
            <ScrollToTop />
            <header>
                <ConditionalBanner />
                <div
                    id="NAVBAR"
                    className={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm transition-all duration-500 ${
                        isSticky ? 'fixed top-0 left-0 right-0' : navbarPosition === 'bottom' ? 'absolute bottom-0' : 'fixed top-0 left-0 right-0'
                    }`}
                >
                    <NavBar />
                </div>
            </header>
            <div className="app-bg mx-auto" style={{ paddingTop: isSticky ? '3rem' : '0' }}>
                <div className="col">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/products/wholeHouseSystems" element={<WholeHouse />} />
                        <Route path="/products/drinkingWaterSystems" element={<DrinkingWater />} />
                        <Route path="/contactUs" element={<ContactUs />} />
                    </Routes>
                </div>
            </div>
            <footer className="App blueOne">
                <Footer />
            </footer>
        </>
    );
}

export default AppWrapper;
