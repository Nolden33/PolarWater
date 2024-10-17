import React, { useState, useEffect } from "react";
import BannerOne from "../../../images/landingPage/banner/GIFSpecialBanner.gif";
import BannerTwo from "../../../images/landingPage/banner/SpecialBannerSm.gif";

function CarThree() {
    const [currentImage, setCurrentImage] = useState(BannerOne);

    useEffect(() => {
        // Function to handle the resizing logic
        const handleResize = () => {
            if (window.innerWidth < 1281) {
                setCurrentImage(BannerTwo);
            } else {
                setCurrentImage(BannerOne);
            }
        };

        // Call handleResize on component mount and add event listener for resize
        handleResize();
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="group block overflow-hidden dark:focus:outline-none relative w-full h-full flex items-center justify-center">
            {/* Image */}
            <img
                className={`h-full object-top object-cover ${currentImage === BannerTwo ? 'w-auto' : 'w-full'}`}
                src={currentImage}
                alt="Special offer banner"
            />
        </div>
    );
}

export default CarThree;
