import React, { useState, useEffect } from "react";
import CarOne from "./CarOne";
import CarTwo from "./CarTwo";
import CarThree from "./CarThree";

function Banner() {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 10000); // Auto-advance slides every 10 seconds
        return () => clearInterval(interval);
    }, [totalSlides]);

    const changeSlide = (slideIndex) => {
        setActiveSlide(slideIndex);
    };

    const nextSlide = () => {
        changeSlide((activeSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        changeSlide((activeSlide - 1 + totalSlides) % totalSlides);
    };

    const slideStyles = {
        transform: `translateX(-${activeSlide * 100}%)`,
    };

    return (
        <React.Fragment>
            <div className="relative" style={{ height: 'calc(100vh - 3rem)' }}>
                <div className="overflow-hidden w-full h-full bg-white shadow-lg">
                    <div className="flex transition-transform duration-700 w-full h-full" style={slideStyles}>
                        {/* Each Slide Component */}
                        <div className="min-w-full h-full flex items-center justify-center">
                            <CarOne />
                        </div>
                        <div className="min-w-full h-full flex items-center justify-center">
                            <CarThree />
                        </div>
                        <div className="min-w-full h-full flex items-center justify-center">
                            <CarTwo />
                        </div>
                    </div>
                </div>
                <button onClick={prevSlide} type="button" className="absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                    {/* SVG for Previous */}
                </button>
                <button onClick={nextSlide} type="button" className="absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                    {/* SVG for Next */}
                </button>
                <div className="flex justify-center absolute start-0 end-0 space-x-2" style={{ bottom: '3rem' }}>
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
