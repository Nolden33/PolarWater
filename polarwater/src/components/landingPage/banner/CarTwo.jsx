import React, { useState, useEffect } from "react";
import Faucet from "../../../images/landingPage/banner/SinkBanner.webp";
import Glass from "../../../images/landingPage/banner/GlassWater.webp";

function CarTwo() {
  const [currentImage, setCurrentImage] = useState(Faucet);

  useEffect(() => {
    // Function to handle the resizing logic
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCurrentImage(Glass);
      } else {
        setCurrentImage(Faucet);
      }
    };

    // Call handleResize on component mount and add event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <div className="group block overflow-hidden dark:focus:outline-none relative">
        {/* Image */}
        <img
          className="size-full object-cover"
          src={currentImage}
          alt="Family using fresh and clean water."
        />

        {/* New Text Overlay Positioned in the Top Left Quadrant */}
        <div className="absolute inset-0 p-2 flex flex-col sm:grid sm:grid-cols-4 sm:grid-rows-4 justify-evenly">
          <div id="LEFTSIDE" className="col-span-4 row-span-3 sm:col-span-2 sm:row-span-4 flex flex-col">
            <div className="flex items-end justify-center md:mt-8 h-1/4">
              <p className="font-black uppercase sm:text-gray-800 text-red-700 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center">
                Is Your Water<br />Safe to Drink?
              </p>
            </div>
            {/* <div className="flex items-center justify-center h-3/4 pt-8 sm:pt-1 sm:px-20 block md:hidden lg:block">
              <p className="font-bold text-gray-200 sm:text-gray-800 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center" style={{ maxWidth: "100%" }}>
                Municipal water systems can fail to eliminate all toxins, including lead, pesticides, and industrial chemicals, posing health risks. Limitations in filtration technology and outdated infrastructure exacerbate these issues.
              </p>
            </div> */}
          </div>
          <div id="RIGHTSIDE" className="col-span-4 row-span-3 sm:col-span-2 sm:row-span-4 flex flex-col justify-end items-center">
            <a href="https://www.ewg.org/tapwater/" target="_blank" rel="noopener noreferrer" className="mb-16 sm:mb-24 sm:ms-40">
              <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 text-white hover:bg-blueOne disabled:opacity-50 disabled:pointer-events-none">
                Test the Water in Your Area
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </React.Fragment>
  );
}

export default CarTwo;
