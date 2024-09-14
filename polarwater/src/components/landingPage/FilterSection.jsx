import React, { useState } from "react";
import pete from "../../images/landingPage/polarPete.png";
import ReBg from "../../images/landingPage/filterSection/RihannaNoBg.png";
import upflowImage from "../../images/products/wholeHouse/CarbonmMediaPNG.png";
import conditionerImage from "../../images/products/wholeHouse/ConditioningmediaPNG.png";
import fiveImage from "../../images/products/drinkingWater/FiveStage.png";
import sixImage from "../../images/products/drinkingWater/ROPNG.png";
import tankImage from "../../images/products/drinkingWater/TankPNG.png";
import housingImage from "../../images/products/drinkingWater/FilterhousingPNG.png";

const cardData = [
    {
        id: 1,
        title: "Carbon Filters",
        image: upflowImage,
        alt: "Upflow",
        linkText: "../products/wholeHouseSystems"
    },
    {
        id: 2,
        title: "Filtersorb SP3 Conditioner",
        image: conditionerImage,
        alt: "Conditioner",
        linkText: "../products/wholeHouseSystems"
    },
    {
        id: 3,
        title: "Under Sink System",
        image: fiveImage,
        alt: "Five",
        linkText: "../products/drinkingWaterSystems"
    },
    {
        id: 4,
        title: "Alkaline Under Sink System",
        image: sixImage,
        alt: "Six",
        linkText: "../products/drinkingWaterSystems"
    },
    {
        id: 5,
        title: "RO Tank",
        image: tankImage,
        alt: "Tank",
        linkText: "../products/drinkingWaterSystems"
    },
    {
        id: 6,
        title: "20in Filter",
        image: housingImage,
        alt: "Housing",
        linkText: "../products/drinkingWaterSystems"
    },
];

function FilterSection() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = (e) => {
        if (e.target.id === "lightbox") {
            setSelectedImage(null);
        }
    };

    return (
        <React.Fragment>
            <div className="container mx-auto p-4 py-16">
                <div className="overflow-visible w-full h-full">
                    <div className="flex flex-col lg:flex-row">
                        {/* Image Section */}
                        <div className="lg:w-1/2">
                            <img
                                className="w-full h-auto object-cover lg:pb-40 2xl:pb-28"
                                src={pete}
                                alt="Image Description"
                                style={{ minWidth: "50%" }}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-1/2 mt-8 h-full lg:absolute lg:top-1/4 lg:top-60 xl:top-60 2xl:top-60 lg:left-2/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-4 xl:px-8 lg:pt-8">
                            <div className="mb-4 space-y-8">
                                <h1 className="text-4xl font-extrabold font-serif uppercase text-gray-800 mb-2">
                                    Transform the way you experience water!
                                </h1>
                                <div className="w-3/4 md:w-3/5 mx-auto my-4 h-1 bg-red-700"></div>
                                <p className="text-gray-600 text-lg">
                                    Polar Water offers customized water filtration systems to match your specific requirements, addressing issues like hard water and chlorine taste. Our expert team provides professional installation and ongoing maintenance services to ensure your system operates at peak performance. We prioritize customer satisfaction, guiding you through every step from initial consultation to post-installation support. Experience unmatched quality, reliability, and peace of mind with Polar Water.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cards Row */}
                    <div className="hideScroll 2xl:top-1/3 xl:top-1/3 lg:top-1/3 lg:absolute lg:mt-56 xl:mt-48 bottom-0 right-0 lg:left-1/3 z-20 w-full lg:overflow-hidden md:pe-20">
                        <div className="flex overflow-x-auto py-2 -mx-2 lg:w-3/4">
                            {cardData.map(card => (
                                <div key={card.id} className="flex-shrink-0 min-w-[300px] max-w-[300px] bg-gray-200 rounded-lg shadow mx-4">
                                    <div className="p-4">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <img
                                        className="h-40 w-full object-contain mt-2 cursor-pointer"
                                        src={card.image}
                                        alt={card.alt}
                                        onClick={() => handleImageClick(card.image)}
                                    />
                                    <div className="p-4">
                                        <a href={card.linkText} className="text-red-700 hover:underline">
                                            View More...
                                        </a>
                                    </div>
                                </div>
                            ))}
                            <div className="hidden lg:flex flex-shrink-0 w-4 mx-10 lg:w-8"></div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div
                    id="lightbox"
                    className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
                    onClick={handleClose}
                >
                    <img
                        className="max-w-full max-h-full"
                        src={selectedImage}
                        alt="Enlarged product"
                    />
                </div>
            )}
        </React.Fragment>
    );
}

export default FilterSection;
