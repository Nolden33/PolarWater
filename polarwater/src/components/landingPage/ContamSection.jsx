import React from "react";
import Lead from "../../images/landingPage/contamSection/Lead.png";
import Arsenic from "../../images/landingPage/contamSection/arsenic.jpeg";
import Chlorine from "../../images/landingPage/contamSection/chlorine.jpg";
import Flouride from "../../images/landingPage/contamSection/Flouride.jpg";
import Pesticides from "../../images/landingPage/contamSection/pesticides.jpg";
import Pharmaceuticals from "../../images/landingPage/contamSection/Pharmaceuticals.jpg";

function ContamSection() {
    const contams = [
        { title: "Lead", description: "Lead exposure can cause developmental issues in children, including learning disabilities and behavioral problems. In adults, it can lead to kidney problems and high blood pressure.", image: Lead },
        { title: "Flouride", description: "Excessive fluoride exposure can lead to dental fluorosis (discoloration and pitting of teeth) and skeletal fluorosis (pain and damage to bones and joints).", image: Flouride },
        { title: "Arsenic", description: "Long-term exposure to arsenic in drinking water can cause skin damage, cardiovascular disease, and an increased risk of cancer, particularly skin, bladder, and lung cancers.", image: Arsenic },
        { title: "Pesticides", description: "Exposure to pesticides in drinking water can cause a range of health effects, including endocrine disruption, reproductive issues, and an increased risk of cancer.", image: Pesticides },
        { title: "Pharmaceuticals", description: "Effects of pharmaceuticals in drinking water can cause antibiotic resistance, hormonal imbalances, and other health issues depending on the specific medication and exposure level.", image: Pharmaceuticals },
        { title: "Chlorine", description: "Chlorine can cause respiratory problems, skin irritation, and has been linked to an increased risk of certain cancers over long-term exposure.", image: Chlorine }
    ];

    const Card = ({ title, description, image }) => (
        <div className="flex-shrink-0 min-w-[300px] max-w-[300px] mx-2 h-full">
            <div className="p-4 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
                    <p className="text-gray-600 text-lg min-h-[180px]">{description}</p>
                </div>
                <div className="flex justify-center mt-4">
                    <img className="h-48 w-48 object-cover mt-2 rounded-full shadow" src={image} alt={title} />
                </div>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <div className="container mx-auto p-4 relative">
                <div className="overflow-hidden relative w-full h-full">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 max-w-3xl flex flex-col items-center justify-start p-4 md:px-24 md:pt-8">
                            <div className="mb-4 space-y-8">
                                <h1 className="text-4xl font-extrabold font-serif uppercase text-gray-800 mb-4">
                                    Common Water Contaminates
                                </h1>
                                <div className="w-3/4 md:w-2/5 mx-auto my-4 h-1 bg-red-700"></div>
                                <p className="text-gray-600 text-lg">
                                    These are the most common water contaminates in our public drinking water that are caused by either water treatment, industrial runoff, or occurring naturally:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full hideScroll">
                        <div className="flex overflow-x-auto pb-4 -mx-2">
                            {contams.map(card => (
                                <Card key={card.title} {...card} />
                            ))}
                            <div className="hidden lg:flex flex-shrink-0 w-4 mx-10 lg:w-8"></div>
                        </div>
                    </div>
                    {/* Arrows for Horizontal Sliding Cards */}
						<div className="flex lg:left-1/3 items-center justify-center md:me-0 w-3/4 md:w-3/5 mx-auto my-4">
							<div className="mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-red-700"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</div>
							<div className="flex-grow h-1 bg-red-700"></div>
							<div className="ml-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-red-700"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</div>
                    <div className="flex justify-center md:justify-end">
                        <a href="https://www.ewg.org/tapwater/" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="mt-12 mb-4 md:mb-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent blueOne text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                Test the Water in Your Area
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContamSection;
