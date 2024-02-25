import React from "react";
import ReRe from "../../images/landingPage/filterSection/ReRe.jpg";

function FilterSection() {
	return (
		<React.Fragment>
			<div className="container mx-auto p-4 relative">
				<div className="flex flex-col md:flex-row">
					{/* Image Section */}
					<div className="md:w-1/2">
						<img
							className="w-full h-auto object-cover"
							src={ReRe}
							alt="Image Description"
							style={{ minWidth: "50%" }}
						/>
					</div>

					{/* Content Section */}
					<div className="md:w-1/2 flex flex-col justify-center p-4 md:pl-8">
						<div className="mb-4">
							<h2 className="text-3xl font-semibold text-gray-800 mb-2">
								Your Title Section
							</h2>
							<p className="text-gray-600">
								Description of your title section.
							</p>
						</div>

						{/* Cards Row */}
                        <div className="flex overflow-x-auto py-2 -mx-2 md:absolute bottom-0 right-0 md:left-1/3 z-10 md:z-0 w-full md:w-3/4">
							{/* Card 1 */}
							<div className="flex-shrink-0 min-w-[260px] bg-white rounded-lg shadow">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 1
									</h3>
									<p className="text-gray-600">Description of card 1.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=1"
									alt="Card 1"
								/>
							</div>

							{/* Card 2 */}
							<div className="min-w-[260px] bg-white rounded-lg shadow flex-shrink-0">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 2
									</h3>
									<p className="text-gray-600">Description of card 2.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=2"
									alt="Card 2"
								/>
							</div>

							{/* Card 3 */}
							<div className="min-w-[260px] bg-white rounded-lg shadow flex-shrink-0">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 3
									</h3>
									<p className="text-gray-600">Description of card 3.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=3"
									alt="Card 3"
								/>
							</div>

							{/* Card 4 */}
							<div className="min-w-[260px] bg-white rounded-lg shadow flex-shrink-0">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 4
									</h3>
									<p className="text-gray-600">Description of card 4.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=4"
									alt="Card 4"
								/>
							</div>

							{/* Card 5 */}
							<div className="min-w-[260px] bg-white rounded-lg shadow flex-shrink-0">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 5
									</h3>
									<p className="text-gray-600">Description of card 5.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=5"
									alt="Card 5"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default FilterSection;
