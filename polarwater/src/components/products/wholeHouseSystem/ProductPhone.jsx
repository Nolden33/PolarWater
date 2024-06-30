import React, { useState } from "react";
import upflow from "../../../images/products/wholeHouse/CarbonmMediaPNG.png";
import conditioner from "../../../images/products/wholeHouse/ConditioningmediaPNG.png";

function ProductPhone() {
    const [lightboxImage, setLightboxImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setLightboxImage(imageSrc);
    };

    const handleLightboxClick = () => {
        setLightboxImage(null);
    };

    return (
        <React.Fragment>
            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleLightboxClick}
                >
                    <img
                        className="max-w-full max-h-full"
                        src={lightboxImage}
                        alt="Enlarged product"
                    />
                </div>
            )}

            {/* Main container centered both vertically and horizontally */}
            <div className="container mx-auto p-4 pt-12 flex flex-col items-center justify-center">
                <div className="mx-auto space-y-8">
                    <h3 className="text-4xl font-bold text-gray-800 dark:text-black">
                        NON-ELECTRIC SYSTEMS
                    </h3>
                    <div className="w-3/4 mx-auto h-1 bg-red-700"></div>
                </div>

                {/* Product One */}
                <div id="PRODUCTONE" className="rounded-xl bg-white my-10 w-full max-w-4xl mx-auto">
                    <div className="md:flex md:flex-row-reverse items-center justify-center">
                        <img
                            className="object-contain h-96 w-96 rounded-xl shadow-md drop-shadow-lg mx-auto md:mx-0 my-4 md:my-0 cursor-pointer"
                            src={conditioner}
                            alt="Image Description"
                            onClick={() => handleImageClick(conditioner)}
                        />
                        <div className="flex flex-col p-4 md:p-7 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-black mb-4">
                                Non-Electric Conditioner
                            </h1>
                            <p className="text-gray-800 dark:text-gray-800 max-w-md mx-auto md:mx-0">
                            This innovative product uses a unique process called TAC (template-assisted crystallization) to condition your water without needing electricity or salt. TAC works by manipulating the water's mineral content, causing the minerals to structure in a manner that won't stick to pipes or appliances. This helps to prevent hard water stains and scale build-up, leaving you with clean, conditioned water for all your household needs.
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
                            src={upflow}
                            alt="Image Description"
                            onClick={() => handleImageClick(upflow)}
                        />
                        <div className="flex flex-col p-4 md:p-7 text-center md:text-left">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-black mb-4">
                                Penguin Water Non-electric<br />Upflow Filter
                            </h3>
                            <p className="text-gray-800 dark:text-gray-800 max-w-md mx-auto md:mx-0">
                                Penguin Water also offers a full line of upflow filters to
                                address various water treatment needs. Our filters are available
                                in various media, including GAC, catalytic carbon, and calcite,
                                allowing you to choose the best option for your specific water
                                quality issues.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductPhone;

