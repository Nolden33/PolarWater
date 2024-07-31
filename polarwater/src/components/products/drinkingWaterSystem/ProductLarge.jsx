import React, { useState } from "react";
import Five from "../../../images/products/drinkingWater/FiveStage.png";
import Six from "../../../images/products/drinkingWater/ROPNG.png";

function ProductLarge() {
    const [lightboxImage, setLightboxImage] = useState(null);

    const handleImageClick = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <React.Fragment>
            <div className="container mx-auto px-4">
                <div className="mx-auto space-y-8 pt-12 pb-8">
                    <h3 className="text-4xl font-extrabold font-serif uppercase text-gray-800">
                        Reverse Osmosis Systems
                    </h3>
                    <div className="w-1/4 mx-auto h-1 bg-red-700"></div>
                </div>
                <div className="flex flex-col bg-white lg:p-4 lg:p-5">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-center text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                                                />
                                                <th scope="col" className="justify-items-center">
                                                    <img
                                                        className="object-contain h-96 w-96 mt-2 max-w-xs rounded-b-lg cursor-pointer"
                                                        src={Five}
                                                        alt="Five Stage Reverse Osmosis System"
                                                        onClick={() => handleImageClick(Five)}
                                                    />
                                                    <p className="px-6 pb-3 text-center text-2xl font-medium uppercase text-gray-500 dark:text-gray-900">
                                                        5 Stage
                                                    </p>
                                                </th>
                                                <th scope="col" className="">
                                                    <img
                                                        className="mt-2 object-contain h-96 w-96 max-w-xs rounded-b-lg cursor-pointer"
                                                        src={Six}
                                                        alt="Six Stage Reverse Osmosis System"
                                                        onClick={() => handleImageClick(Six)}
                                                    />
                                                    <p className="px-6 pb-3 text-center text-2xl font-medium uppercase text-gray-500 dark:text-gray-900">
                                                        6 Stage
                                                    </p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="whitespace-normal lg:px-6 lg:py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                    <p className="whitespace-nowrap text-xl text-gray-800">
                                                        5 Micron Sediment Filter
                                                    </p>
                                                    <p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
                                                        Reduces Dirt, Sand, and Rust
                                                    </p>
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                    <p className="whitespace-normal text-xl text-gray-800">
                                                        Carbon Block Filter
                                                    </p>
                                                    <p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
                                                        Reduces Chlorine, Tastes, and Odors
                                                    </p>
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                    <p className="whitespace-normal text-xl text-gray-800">
                                                        1 Micron Special Blend Filter
                                                    </p>
                                                    <p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
                                                        Reduces Chloramine, Lead, and Cysts
                                                    </p>
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                    <p className="whitespace-normal text-xl text-gray-800">
                                                        50 GPD or 100 GPD RO Membrane
                                                    </p>
                                                    <p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
                                                        Reverse Osmosis Process
                                                    </p>
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                    <p className="whitespace-normal text-xl text-gray-800">
                                                        Carbon Post-Filter
                                                    </p>
                                                    <p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
                                                        Refines and Enhances Taste
                                                    </p>
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                    <p className="whitespace-normal text-xl text-gray-800">
                                                        Alkaline Cartridge
                                                    </p>
                                                    <p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
                                                        Increases the pH of the filtered water <br />
                                                        typically to between 8.5 – 10.0
                                                    </p>
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    No
                                                </td>
                                                <td className="whitespace-normal px-6 py-4 text-xl text-gray-800">
                                                    Yes
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="w-full text-pretty px-6 py-4 text-center text-lg font-medium text-gray-800">
                                        Both systems are designed for easy under-sink installation
                                        and offer options for icemaker and auxiliary use points. So,
                                        whether you're looking to improve the quality of your
                                        drinking water or want the convenience of purified water on
                                        tap, the Penguin Water Reverse Osmosis Systems are perfect
                                    </p>
                                </div>
                            </div>
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

export default ProductLarge;
