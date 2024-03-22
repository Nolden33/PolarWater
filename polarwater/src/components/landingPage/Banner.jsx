import React, { useState, useEffect } from "react";
import CarOne from "./CarOne";
import CarTwo from "./CarTwo";

function Banner() {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 2; // Assuming you have 3 slides

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 10000); // Auto-advance slides every 5 seconds
        return () => clearInterval(interval);
    }, [totalSlides]);

    // Explicitly handle slide changes
    const changeSlide = (slideIndex) => {
        console.log(`Changing to slide ${slideIndex}`);
        setActiveSlide(slideIndex);
    };

    const nextSlide = () => {
        changeSlide((activeSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        changeSlide((activeSlide - 1 + totalSlides) % totalSlides);
    };

    // Adjust the translateX dynamically based on the active slide index
    const slideStyles = {
        transform: `translateX(-${activeSlide * 100}%)`,
    };

    return (
        <React.Fragment>
            <div className="relative">
                <div className="overflow-hidden w-full min-h-[350px] bg-white shadow-lg">
                    <div className="flex transition-transform duration-700  " style={slideStyles}>
                        <div className="min-w-full">
                            <CarOne />
                        </div>
                        <div className="min-w-full">
                            <CarTwo />
                        </div>
                        <div className="min-w-full hidden">
                            <div className="flex justify-center h-full bg-gray-300 p-6">
                                <span className="self-center text-4xl">Third slide</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={prevSlide} type="button" className="absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                    {/* SVG for Previous */}
                </button>
                <button onClick={nextSlide} type="button" className="absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                    {/* SVG for Next */}
                </button>
                <div className="flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                    {[...Array(totalSlides).keys()].map((index) => (
                        <button key={index} onClick={() => changeSlide(index)} className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${activeSlide === index ? 'bg-blue-700' : 'bg-gray-400'}`} aria-label={`Go to slide ${index + 1}`}>
                            {/* Button visual placeholder */}
                        </button>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Banner;


