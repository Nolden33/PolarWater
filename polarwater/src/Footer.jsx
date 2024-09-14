import React, { useState } from "react";

function Navbar() {
  // State to track if the navbar is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar open/close
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Polar Water Filtration
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-white block md:hidden"
          onClick={toggleNavbar}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Navbar Links (collapsible) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="md:flex md:space-x-4 text-white">
            <li className="py-2 md:py-0">
              <a href="#home" onClick={closeNavbar} className="block md:inline">
                Home
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#about" onClick={closeNavbar} className="block md:inline">
                About Us
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#services" onClick={closeNavbar} className="block md:inline">
                Services
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#contact" onClick={closeNavbar} className="block md:inline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
