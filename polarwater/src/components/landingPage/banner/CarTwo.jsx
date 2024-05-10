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
        <div className="absolute inset-0 p-2 grid grid-cols-12 grid-rows-7">
          <div className="col-start-1 row-start-2 col-span-12 row-span-2 md:col-start-1 md:row-start-1 md:col-span-7 md:row-span-1 md:place-content-start sm:pt-8 sm:mx-auto md:pt-8 md:pe-20 xl:pe-36 xl:pt-12 2xl:pt-12">
            <p className="font-bold sm:text-gray-800 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Is Your Water<br />Safe to Drink?
            </p>
          </div>
          <div className="col-start-1 row-start-1 col-span-5 row-span-4 place-content-center lg:mt-16 lg:pt-16 2xl:pt-32 invisible lg:visible">
            {/* <div class="flex flex-col blueSix border border-gray-200 shadow-sm rounded-md p-1 "> */}
              <p className="bg-clip-text text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 sm:text-md lg:text-lg xl:text-xl 2xl:text-3xl" style={{ maxWidth: "100%" }}>
                Municipal water systems can fail to eliminate all toxins,
                including lead, pesticides, and industrial chemicals, posing
                health risks. Limitations in filtration technology and outdated
                infrastructure exacerbate these issues.
              </p>
            {/* </div> */}
          </div>
          <div className="col-start-4 row-start-5 col-span-6 row-span-1 md:col-start-9 md:row-start-7 md:col-span-5 md:row-span-1 place-content-center md:place-content-start">
            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent blueOne text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Test the Water in Your Area
            </button>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </React.Fragment>
  );
}

export default CarTwo;
