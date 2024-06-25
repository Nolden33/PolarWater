import React from "react";
import ReBg from "../../images/landingPage/filterSection/RihannaNoBg.png";
import Rere from "../../images/landingPage/filterSection/ReRe.jpg";
import upflow from "../../images/products/wholeHouse/CarbonmMediaPNG.png";
import conditioner from "../../images/products/wholeHouse/ConditioningmediaPNG.png";
import Five from "../../images/products/drinkingWater/FiveStage.png";
import Six from "../../images/products/drinkingWater/ROPNG.png";
import tank from "../../images/products/drinkingWater/TankPNG.png";
import housing from "../../images/products/drinkingWater/FilterhousingPNG.png";

function FilterSection() {
	return (
		<React.Fragment>
			<div className="container mx-auto p-4">
				<div className="overflow-visible w-full h-full mb-8">
					<div className="flex flex-col lg:flex-row">
						{/* Image Section */}
						<div className="lg:w-1/2">
							<img
								className="w-full h-auto object-cover"
								src={ReBg}
								alt="Image Description"
								style={{ minWidth: "50%" }}
							/>
						</div>

						{/* Content Section */}
						<div className="lg:w-1/2 mt-8 h-full lg:absolute lg:top-1/4 lg:top-64 xl:top-60 2xl:top-96 lg:left-3/4 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-8 lg:pt-8">
							<div className="mb-4 xl:px-20  space-y-4">
								<h1 className="text-4xl font-extrabold font-serif uppercase text-gray-800 mb-2">
									Transform the way you experience water!
								</h1>
								<p className="text-gray-600">
								Polar Water offers customized water filtration systems to match your specific requirements, addressing issues like hard water and chlorine taste. Our expert team provides professional installation and ongoing maintenance services to ensure your system operates at peak performance. We prioritize customer satisfaction, guiding you through every step from initial consultation to post-installation support. Experience unmatched quality, reliability, and peace of mind with Polar Water.
								</p>
								
							</div>
						</div>
					</div>

					{/* Cards Row */}
                    <div className="hideScroll 2xl:top-1/3 xl:top-1/3 lg:top-2/5 lg:absolute lg:mt-40 xl:mt-60 2xl:mt-80 bottom-0 right-0 lg:left-1/3 z-20 w-full lg:overflow-hidden pe-20">
                        {/* Cards Row */}
                        <div className="flex overflow-x-auto py-2 -mx-2 lg:w-3/4">
							{/* Card 1 */}
							<div className="flex-shrink-0 min-w-[300px] bg-gray-200 rounded-lg shadow mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
										upflow
									</h3>
									{/* <p className="text-gray-600">Description of card 1.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src={upflow}
									alt="Card 1"
								/>
								<div className="p-4">
									<a href="#" className="text-blue-600 hover:underline">
                                        View more...
                                    </a>
								</div>
							</div>

							{/* Card 2 */}
							<div className="min-w-[300px] bg-gray-200 rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
									conditioner
									</h3>
									{/* <p className="text-gray-600">Description of card 2.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src={conditioner}
									alt="Card 2"
								/>
								<div className="p-4">
									<a href="#" className="text-blue-600 hover:underline">
                                        View more...
                                    </a>
								</div>
							</div>

							{/* Card 3 */}
							<div className="min-w-[300px] bg-gray-200 rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
									Five
									</h3>
									{/* <p className="text-gray-600">Description of card 3.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src={Five}
									alt="Card 3"
								/>
								<div className="p-4">
									<a href="#" className="text-blue-600 hover:underline">
                                        View more...
                                    </a>
								</div>
							</div>

							{/* Card 4 */}
							<div className="min-w-[300px] bg-gray-200 rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
										Six
									</h3>
									{/* <p className="text-gray-600">Description of card 4.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src={Six}
									alt="Card 4"
								/>
								<div className="p-4">
									<a href="#" className="text-blue-600 hover:underline">
                                        View more...
                                    </a>
								</div>
							</div>

							{/* Card 5 */}
							<div className="min-w-[300px] bg-gray-200 rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
										Tank
									</h3>
									{/* <p className="text-gray-600">Description of card 5.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src={tank}
									alt="Card 5"
								/>
								<div className="p-4">
									<a href="#" className="text-blue-600 hover:underline">
                                        View more...
                                    </a>
								</div>
							</div>

							{/* Card 6 */}
							<div className="min-w-[300px] bg-gray-200 rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
									housing
									</h3>
									{/* <p className="text-gray-600">Description of card 4.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src={housing}
									alt="Card 4"
								/>
								<div className="p-4">
									<a href="#" className="text-blue-600 hover:underline">
                                        View more...
                                    </a>
								</div>
							</div>
							<div className="hidden lg:flex flex-shrink-0 w-4 mx-10 lg:w-8"></div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default FilterSection;
