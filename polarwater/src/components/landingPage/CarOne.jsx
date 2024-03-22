import React, { useState, useEffect } from "react";
import Family from "../../images/landingPage/banner/FamilyBanner.webp";
import FamilySmall from "../../images/landingPage/banner/FamilyBannerSmall.webp";

function CarOne() {
    const [currentImage, setCurrentImage] = useState(Family);

    useEffect(() => {
        // Function to handle the resizing logic
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCurrentImage(FamilySmall);
            } else {
                setCurrentImage(Family);
            }
        };

        // Call handleResize on component mount and add event listener for resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
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

                {/* Text Overlay */}
                <div className="absolute inset-0 p-2 grid grid-cols-4 grid-rows-4 bg-black bg-opacity-50">
					<div className="col-start-0 col-end-2 row-start-1 row-end-3 text-center mx-auto p-4">
                        {/* Company Name */}
                        <h1 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200 font-bold">
                            Polar <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-tl from-blue-600 to-red-600">
                                Water
                            </span>
                        </h1>

						{/*  Contact Us Form */}
                        <h1 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200 font-bold">
                            
                        </h1>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CarOne;
