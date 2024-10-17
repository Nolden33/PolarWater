import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Faucet from "../../../images/landingPage/banner/SinkBanner.webp";
import Glass from "../../../images/landingPage/banner/GlassWater.webp";

function CarTwo() {
    const [currentImage, setCurrentImage] = useState(Faucet);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCurrentImage(Glass);
            } else {
                setCurrentImage(Faucet);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="group block overflow-hidden dark:focus:outline-none relative w-full h-full flex items-center justify-center">
            {/* Image */}
            <img
                className="w-full h-full object-top object-cover"
                src={currentImage}
                alt="Family using fresh and clean water."
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 p-2 grid grid-cols-5 grid-rows-5">
                {/* Title Section */}
                <div id="TITLE" className="col-span-5 row-span-2 md:col-span-2 md:row-span-2 flex items-end justify-center">
                    <p className="font-black uppercase sm:text-gray-800 text-red-700 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center">
                        Is Your Water<br />Safe to Drink?
                    </p>
                </div>
                
                {/* Center Button Section */}
                <div id="BUTTON" className="col-span-5 row-span-3 flex justify-center items-center">
                    <Link to="/contactUs?accordionId=2">
                        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm md:text-5xl font-semibold rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 text-white hover:bg-blueOne disabled:opacity-50 disabled:pointer-events-none">
                            Get a Free<br />In-Home Water Test
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CarTwo;
