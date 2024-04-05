import React, { useState, useEffect } from "react";
import Faucet from "../../../images/landingPage/banner/SinkBanner.webp";
import FamilySmall from "../../../images/landingPage/banner/GlassWater.webp";

function CarTwo() {
  const [currentImage, setCurrentImage] = useState(Faucet);

  useEffect(() => {
    // Function to handle the resizing logic
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCurrentImage(FamilySmall);
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
        <div className="absolute inset-0 p-2 grid grid-cols-2 grid-rows-4">
          <div className="col-start-1 row-start-1 col-span-1 row-span-1 place-content-center pt-20">
            <p className="font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              Is Your Water Safe to Drink?
            </p>
            <br />
            <p className="bg-clip-text text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 text-2xl" style={{ maxWidth: "100%" }}>
              Municipal water systems can fail to eliminate all toxins,
              including lead, pesticides, and industrial chemicals, posing
              health risks. Limitations in filtration technology and outdated
              infrastructure exacerbate these issues.
              </p>
            </div>
          </div>
        </div>
      {/* <!-- End Hero --> */}
    </React.Fragment>
  );
}

export default CarTwo;
