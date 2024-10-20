import React, { useState, useEffect } from "react";
import Family from "../../../images/landingPage/banner/FamilyBanner.webp";
import FamilySmall from "../../../images/landingPage/banner/FamilyBannerSmall.webp";
import SmCntForm from "./SmCntForm";
import MdCntForm from "./MdCntForm";
import LrgCntForm from "./LrgCntForm";

function CarOne() {
    const [currentImage, setCurrentImage] = useState(Family);
    const [showBreak, setShowBreak] = useState(window.innerWidth >= 640);

    // Initialize FormComponent based on current window width
    const initialForm = window.innerWidth >= 768 && window.innerWidth < 1150 ? <MdCntForm /> : <LrgCntForm />;
    const [FormComponent, setFormComponent] = useState(initialForm);

    useEffect(() => {
        const handleResize = () => {
            setCurrentImage(window.innerWidth < 640 ? FamilySmall : Family);
            setShowBreak(window.innerWidth >= 640);

            if (window.innerWidth >= 768 && window.innerWidth < 1150) {
                setFormComponent(<MdCntForm />);
            } else if (window.innerWidth > 1150) {
                setFormComponent(<LrgCntForm />);
            } else {
                setFormComponent(<SmCntForm />);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

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
            <div className="absolute inset-0 p-2 grid grid-cols-12 grid-rows-4">
                {/* Company Name */}
                <div className="col-span-12 row-span-1 sm:col-span-3 sm:row-span-2 flex justify-center lg:justify-end items-center">
                    <div className="lg:pe-12 xl:pe-16 2xl:pe-20">
                        <h1 className="text-gray-200 text-6xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">
                            Polar {showBreak && <br />}
                            <span className="bg-clip-text text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400">
                                Water
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Contact Info Form */}
                {FormComponent}
            </div>
        </div>
    );
}

export default CarOne;
