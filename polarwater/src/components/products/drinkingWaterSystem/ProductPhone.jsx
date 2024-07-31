import React, { useState } from "react";
import Five from "../../../images/products/drinkingWater/FiveStage.png";
import Six from "../../../images/products/drinkingWater/ROPNG.png";

function ProductPhone() {
    const [lightboxImage, setLightboxImage] = useState(null);

    const handleImageClick = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <React.Fragment>
            {/* Main container centered both vertically and horizontally */}
            <div className="container mx-auto p-4 pt-12 flex flex-col items-center justify-center">
                
                <div className="mx-auto space-y-8">
                    <h3 className="text-4xl font-extrabold font-serif uppercase text-gray-800">
                        Reverse Osmosis Systems
                    </h3>
                    <div className="w-3/5 mx-auto my-4 h-1 bg-red-700"></div>
                    <p className="w-full text-lg text-pretty px-6 text-center font-medium text-gray-800">
                        Both systems are designed for easy under-sink installation
                        and offer options for icemaker and auxiliary use points.
                        So, whether you're looking to improve the quality of your
                        drinking water or want the convenience of purified water
                        on tap, the Penguin Water Reverse Osmosis Systems are
                        perfect
                    </p>
                </div>

                {/* Product One */}
                <div id="PRODUCTONE" className="rounded-xl bg-white my-10 w-full max-w-4xl mx-auto">
                    <div className="md:flex md:flex-row-reverse items-center justify-center">
                        <img
                            className="object-contain h-96 w-96 rounded-xl shadow-md drop-shadow-lg mx-auto md:mx-0 my-4 md:my-0 cursor-pointer"
                            src={Five}
                            alt="Image Description"
                            onClick={() => handleImageClick(Five)}
                        />
                        <div className="flex flex-col p-4 md:p-7 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-black mb-4">
                                5 Stage
                            </h1>
                            <p className="text-gray-800 text-lg dark:text-gray-800 max-w-md mx-auto md:mx-0">
                                The 5-Stage Reverse Osmosis System lets you enjoy clean, pure water free from impurities and contaminants.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 pb-4"></div>

                {/* Product Two */}
                <div id="PRODUCTTWO" className="rounded-xl bg-white my-10 w-full max-w-4xl mx-auto">
                    <div className="md:flex items-center justify-center">
                        <img
                            className="object-contain h-96 w-96 rounded-xl shadow-md drop-shadow-lg mx-auto md:mx-0 my-4 md:my-0 cursor-pointer"
                            src={Six}
                            alt="Image Description"
                            onClick={() => handleImageClick(Six)}
                        />
                        <div className="flex flex-col p-4 md:p-7 text-center md:text-left">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-black mb-4">
                                6 Stage
                            </h3>
                            <p className="text-gray-800 text-lg dark:text-gray-800 max-w-md mx-auto md:mx-0">
                                The 6-Stage Reverse Osmosis System adds an additional stage of treatment from the 5 stage, providing minerals and hydrating alkalinity for your drinking water.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={closeLightbox}
                >
                    <img
                        src={lightboxImage}
                        alt="Lightbox"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}
        </React.Fragment>
    );
}

export default ProductPhone;
