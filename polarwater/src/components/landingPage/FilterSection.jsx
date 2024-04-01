import React from "react";
import ReBg from "../../images/landingPage/filterSection/RihannaNoBg.png";

function FilterSection() {
	return (
		<React.Fragment>
			<div className="container mx-auto p-4">
				<div className="overflow-visible w-full h-full">
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
						<div className="lg:w-1/2 mt-8 h-full lg:absolute lg:top-1/4 xl:top-60 2xl:top-96 lg:left-3/4 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-8 lg:pt-8">
							<div className="mb-4 xl:px-20  space-y-4">
								<h1 className="text-3xl font-bold text-gray-800 mb-2">
									Transform the way you experience water!
								</h1>
								<p className="text-gray-600">
								Polar Water LLC offers premier water filtration solutions tailored to your unique needs, ensuring your home enjoys clean, safe, and refreshing water. Our range of cutting-edge, carbon-based, whole-house systems are designed for superior performance without salt, catering to various water quality issues. We provide personalized systems, professional installation, and dedicated ongoing maintenance for optimal functionality. Committed to customer satisfaction, our team ensures a seamless process from consultation to post-installation support. Choose Polar Water LLC for quality, reliability, and a healthier water experience.
								</p>
								
							</div>
						</div>
					</div>

					{/* Cards Row */}
                    <div className="hideScroll 2xl:top-1/3 xl:top-1/3 lg:top-1/3 lg:absolute lg:mt-40 xl:mt-52 2xl:mt-80 bottom-0 right-0 lg:left-1/3 z-20 w-full lg:overflow-hidden">
                        {/* Cards Row */}
                        <div className="flex overflow-x-auto py-2 -mx-2 lg:w-3/4">
							{/* Card 1 */}
							<div className="flex-shrink-0 min-w-[300px] blueSix rounded-lg shadow mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
										Product 1
									</h3>
									{/* <p className="text-gray-600">Description of card 1.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src="https://source.unsplash.com/random/260x160?sig=6"
									alt="Card 1"
								/>
								<div className="p-4">
									<p className="text-gray-600">View more...</p>
								</div>
							</div>

							{/* Card 2 */}
							<div className="min-w-[300px] blueSix rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
										Product 2
									</h3>
									{/* <p className="text-gray-600">Description of card 2.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src="https://source.unsplash.com/random/260x160?sig=7"
									alt="Card 2"
								/>
								<div className="p-4">
									<p className="text-gray-600">View more...</p>
								</div>
							</div>

							{/* Card 3 */}
							<div className="min-w-[300px] blueSix rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
										Product 3
									</h3>
									{/* <p className="text-gray-600">Description of card 3.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src="https://source.unsplash.com/random/260x160?sig=8"
									alt="Card 3"
								/>
								<div className="p-4">
									<p className="text-gray-600">View more...</p>
								</div>
							</div>

							{/* Card 4 */}
							<div className="min-w-[300px] blueSix rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
										Product 4
									</h3>
									{/* <p className="text-gray-600">Description of card 4.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src="https://source.unsplash.com/random/260x160?sig=9"
									alt="Card 4"
								/>
								<div className="p-4">
									<p className="text-gray-600">View more...</p>
								</div>
							</div>

							{/* Card 5 */}
							<div className="min-w-[300px] blueSix rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-2xl font-semibold text-gray-800 mb-2">
										Product 5
									</h3>
									{/* <p className="text-gray-600">Description of card 5.</p> */}
								</div>
								<img
									className="h-40 w-full object-cover mt-2"
									src="https://source.unsplash.com/random/260x160?sig=10"
									alt="Card 5"
								/>
								<div className="p-4">
									<p className="text-gray-600">View more...</p>
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
