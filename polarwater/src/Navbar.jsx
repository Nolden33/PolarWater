import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(true);
	const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
	const closeDropdown = () => setIsDropdownOpen(false);
	const toggleNavbar = () => setIsCollapsed(!isCollapsed);
	const dropdownRef = useRef(null);
	const navbarRef = useRef(null); // New reference for the entire navbar
	const location = useLocation();

	useEffect(() => {
		function handleClickOutside(event) {
			// Check if the click is outside the navbar
			if (navbarRef.current && !navbarRef.current.contains(event.target)) {
				// Collapse the navbar and close dropdown if they are open
				if (!isCollapsed) {
					setIsCollapsed(true);
				}
				if (isDropdownOpen) {
					closeDropdown();
				}
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isCollapsed, isDropdownOpen]);

	const isActive = (path) => {
		return location.pathname === path || location.pathname.includes(path);
	};

	const linkClass = (path) => {
		return isActive(path)
			? "text-cyan-200 hover:text-white"
			: "text-gray-300 hover:text-white";
	};

	// Automatically close the navbar after an option is selected on small screens
	const handleNavItemClick = () => {
		if (!isCollapsed) {
			toggleNavbar();
		}
	};

	return (
		<React.Fragment>
			<div ref={navbarRef} className="relative flex flex-wrap sm:flex-nowrap z-50 w-full text-sm py-3 blueOne">
				<nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
					<div className="flex items-center justify-between w-full sm:w-auto">
						<a className="flex-none text-2xl font-bold text-white" href="/">
							Polar Water Filtration
						</a>
						<div className="sm:hidden">
							<button
								type="button"
								className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								data-hs-collapse="#navbar-with-mega-menu"
								aria-controls="navbar-with-mega-menu"
								aria-label="Toggle navigation"
								onClick={toggleNavbar}
							>
								<svg
									className={`hs-collapse-open:hidden flex-shrink-0 size-4 ${!isCollapsed ? "hidden" : ""}`}
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1={3} x2={21} y1={6} y2={6} />
									<line x1={3} x2={21} y1={12} y2={12} />
									<line x1={3} x2={21} y1={18} y2={18} />
								</svg>
								<svg
									className={`hs-collapse-open:block flex-shrink-0 size-4 ${isCollapsed ? "hidden" : ""}`}
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div id="navbar-with-mega-menu" className={`hs-collapse ${isCollapsed ? "hidden" : ""} overflow transition-all duration-300 basis-full grow sm:flex sm:items-center sm:justify-between`}>
						<div className="flex flex-col text-xl sm:flex-row gap-5 mt-5 sm:mt-0 sm:flex-1 sm:justify-center">
							<Link to="/" className={`${linkClass("/")} font-medium`} aria-current={isActive("/") ? "page" : undefined} onClick={handleNavItemClick}>
								Home
							</Link>
							<div className="hs-dropdown-hover-event [--trigger:hover] [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] flex justify-center w-md-full" ref={dropdownRef} style={{ position: "relative" }}>
								<button onClick={toggleDropdown} className={`${linkClass("/products")} flex items-center font-medium`}>
									Products
								</button>
								<div className={`absolute blueOne top-full left-1/2 transform -translate-x-1/2 mt-1 w-48 shadow-md rounded-lg p-2 transition-opacity duration-300 ${isDropdownOpen ? "opacity-100" : "opacity-0"} ${isDropdownOpen ? "visible" : "invisible"}`} style={{ zIndex: 1000 }}>
									<Link
										to="/products/wholeHouseSystems"
										className={`${linkClass("/products/wholeHouseSystems")} block py-2 px-3 rounded-lg text-sm hover:text-white`}
										aria-current={isActive("/products/wholeHouseSystems") ? "page" : undefined}
										onClick={() => {
											handleNavItemClick();
											closeDropdown();
										}}
									>
										Whole House System
									</Link>
									<Link
										to="/products/drinkingWaterSystems"
										className={`${linkClass("/products/drinkingWaterSystems")} block py-2 px-3 rounded-lg text-sm hover:text-white`}
										aria-current={isActive("/products/drinkingWaterSystems") ? "page" : undefined}
										onClick={() => {
											handleNavItemClick();
											closeDropdown();
										}}
									>
										Drinking Water System
									</Link>
								</div>
							</div>
							<Link to="/contactUs" className={`${linkClass("/contactUs")} font-medium`} aria-current={isActive("/contactUs") ? "page" : undefined} onClick={handleNavItemClick}>
								Contact Us
							</Link>
						</div>
						<div className="hidden sm:flex sm:flex-col text-gray-300 sm:ml-auto sm:flex-none sm:items-start">
							<a href="tel:+19512125633" className="text-white text-lg">
								<i className="fas fa-phone mr-2"></i>
								+1 (951) 212-5633
							</a>
							<a href="mailto:Polarwaterllc@gmail.com" className="text-white text-lg">
								<i className="fas fa-envelope mr-2"></i>
								Polarwaterllc@gmail.com
							</a>
						</div>
						<div className="flex sm:hidden flex-col text-gray-300 mt-5">
							<a href="tel:+19512125633" className="text-white text-lg">
								<i className="fas fa-phone mr-2"></i>
								+1 (951) 212-5633
							</a>
							<a href="mailto:Polarwaterllc@gmail.com" className="text-white text-lg">
								<i className="fas fa-envelope mr-2"></i>
								Polarwaterllc@gmail.com
							</a>
						</div>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
}

export default Navbar;
