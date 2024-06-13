import React from "react";
import water from "../../images/landingPage/IntroSection/water2.jpg";

function IntroSection() {
    return (
        <React.Fragment>
            <div className="container mx-auto p-4 relative">
                <div className="overflow-hidden relative w-full h-full my-8">
                    <h1 id="small" className="text-4xl font-extrabold font-serif uppercase text-gray-800 mb-2 2xl:hidden">
                        Get the water you expect with<br></br>Polar Water
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div id="div1" className="lg:w-1/2 max-w-3xl flex flex-col items-center justify-start p-4 md:px-24 lg:ps-24 lg:pe-4 md:pt-8">
                            <div className="mb-4 space-y-4">
                                <h1 id="large" className="hidden 2xl:block text-4xl font-extrabold font-serif uppercase text-gray-800 mb-2">
                                    Get the water you expect with Polar Water
                                </h1>
                                <p className="text-gray-600">
                                    Welcome to Polar Water, your premier destination for high-quality water filtration solutions tailored to your needs! At Polar Water, we specialize in providing top-of-the-line water filtration equipment designed to ensure clean, safe, and refreshing water for your entire household. Our comprehensive range of products includes whole-house water filtration systems that utilize cutting-edge carbon-based technology, delivering superior filtration performance without the need for salt.
                                </p>
                            </div>
                        </div>
                        <div id="div2" className="lg:w-1/2 flex items-center justify-center p-4 md:px-24 lg:ps-8 md:pt-8">
                            <img src={water} alt="Clean Water" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default IntroSection;


