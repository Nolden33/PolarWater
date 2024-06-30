import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const isActive = (path) => {
    return location.pathname === path || location.pathname.includes(path);
  };

  const linkClass = (path) => {
    return isActive(path)
      ? "text-cyan-200 hover:text-white"
      : "text-gray-300 hover:text-white";
  };

  return (
    <React.Fragment>
      <div className="relative flex flex-wrap sm:justify-between sm:flex-nowrap z-50 w-full text-sm py-3 bg-blue-900">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex justify-between items-center w-full sm:w-auto">
            <a
              className="flex-none text-2xl font-semibold dark:text-white"
              href="/home"
            >
              Polar Water Filtration
            </a>
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:hidden"
              data-hs-collapse="#navbar-with-mega-menu"
              aria-controls="navbar-with-mega-menu"
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <svg
                className={`hs-collapse-open:hidden flex-shrink-0 size-4 ${
                  !isCollapsed ? "hidden" : ""
                }`}
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
                className={`hs-collapse-open:block flex-shrink-0 size-4 ${
                  isCollapsed ? "hidden" : ""
                }`}
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
          <div className="hidden sm:flex sm:items-center w-full justify-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {/* Home */}
              <Link
                to="/home"
                className={`${linkClass("/home")} font-medium`}
                aria-current={isActive("/home") ? "page" : undefined}
              >
                Home
              </Link>
              {/* Dropdown */}
              <div
                className="relative flex justify-center"
                ref={dropdownRef}
              >
                <button
                  onClick={toggleDropdown}
                  className={`${linkClass(
                    "/products"
                  )} flex items-center font-medium`}
                >
                  Products
                </button>
                <div
                  className={`absolute bg-blue-900 top-full left-1/2 transform -translate-x-1/2 mt-1 w-48 shadow-md rounded-lg p-2 transition-opacity duration-300 ${
                    isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  style={{ zIndex: 1000 }}
                >
                  <Link
                    to="/products/wholeHouseSystems"
                    className={`${linkClass(
                      "/products/wholeHouseSystems"
                    )} block py-2 px-3 rounded-lg text-sm hover:text-white`}
                    aria-current={
                      isActive("/products/wholeHouseSystems") ? "page" : undefined
                    }
                    onClick={closeDropdown}
                  >
                    Whole House System
                  </Link>
                  <Link
                    to="/products/drinkingWaterSystems"
                    className={`${linkClass(
                      "/products/drinkingWaterSystems"
                    )} block py-2 px-3 rounded-lg text-sm hover:text-white`}
                    aria-current={
                      isActive("/products/drinkingWaterSystems") ? "page" : undefined
                    }
                    onClick={closeDropdown}
                  >
                    Drinking Water System
                  </Link>
                </div>
              </div>
              {/* Contact */}
              <Link
                to="/contactUs"
                className={`${linkClass("/contactUs")} font-medium`}
                aria-current={isActive("/contactUs") ? "page" : undefined}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center ml-auto">
            <div className="flex flex-col sm:items-end gap-2">
              <a href="tel:+19512125633" className="text-white">
                +1 (951) 212-5633
              </a>
              <a href="mailto:Polarwaterllc@gmail.com" className="text-white">
                Polarwaterllc@gmail.com
              </a>
            </div>
          </div>
        </nav>
        {/* Collapsible Menu */}
        <div
          className={`${
            isCollapsed ? "hidden" : "block"
          } sm:hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-4 bg-blue-900">
            <Link
              to="/home"
              className={`${linkClass("/home")} py-2 font-medium`}
              aria-current={isActive("/home") ? "page" : undefined}
              onClick={toggleNavbar}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`${linkClass("/products")} py-2 font-medium flex items-center justify-between`}
              >
                Products
                <svg
                  className={`transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
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
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } mt-1 space-y-1 bg-blue-900`}
              >
                <Link
                  to="/products/wholeHouseSystems"
                  className={`${linkClass(
                    "/products/wholeHouseSystems"
                  )} block py-2 px-4`}
                  aria-current={
                    isActive("/products/wholeHouseSystems") ? "page" : undefined
                  }
                  onClick={toggleNavbar}
                >
                  Whole House System
                </Link>
                <Link
                  to="/products/drinkingWaterSystems"
                  className={`${linkClass(
                    "/products/drinkingWaterSystems"
                  )} block py-2 px-4`}
                  aria-current={
                    isActive("/products/drinkingWaterSystems") ? "page" : undefined
                  }
                  onClick={toggleNavbar}
                >
                  Drinking Water System
                </Link>
              </div>
            </div>
            <Link
              to="/contactUs"
              className={`${linkClass("/contactUs")} py-2 font-medium`}
              aria-current={isActive("/contactUs") ? "page" : undefined}
              onClick={toggleNavbar}
            >
              Contact Us
            </Link>
            <div className="flex flex-col mt-2">
              <a href="tel:+19512125633" className="text-white py-2">
                <i className="fas fa-phone mr-2"></i>
                +1 (951) 212-5633
              </a>
              <a href="mailto:Polarwaterllc@gmail.com" className="text-white py-2">
                <i className="fas fa-envelope mr-2"></i>
                Polarwaterllc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
