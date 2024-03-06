import React from "react";

function ContamSection() {
    return (
        <React.Fragment>
			<div className="container mx-auto p-4 relative">
                <div className="overflow-hidden relative w-full h-full">
					<div className="flex flex-col lg:flex-row">

						{/* Content Section */}
						<div className="lg:w-3/4 max-w-3xl flex flex-col items-center justify-start p-4 md:px-24 md:pt-8">
							<div className="mb-4 space-y-4">
								<h1 className="text-3xl font-bold text-gray-800 mb-2">
									RiRi is under an umbrella cuz of these bullshit photos.
								</h1>
								<p className="text-gray-600">
									You would think she would be showered in money but no! Just shitty, contaminated water...
								</p>
							</div>
						</div>
					</div>

					{/* Cards Row */}
					<div className="w-full">
						{/* Cards Row */}
						<div className="flex overflow-x-auto py-2 -mx-2">
							{/* Card 1 */}
							<div className="flex-shrink-0 min-w-[300px] mx-2">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 1
									</h3>
									<p className="text-gray-600">Description of card 1.</p>
								</div>
                                <div className="flex justify-center">
                                    <img
									className="h-48 w-48 object-cover mt-2 rounded-full shadow"
									src="https://source.unsplash.com/random/260x160?sig=1"
									alt="Card 1"
                                    />
                                </div>
							</div>

							{/* Card 2 */}
							<div className="flex-shrink-0 min-w-[300px] mx-2">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 2
									</h3>
									<p className="text-gray-600">Description of card 2.</p>
								</div>
                                <div className="flex justify-center">
                                    <img
									className="h-48 w-48 object-cover mt-2 rounded-full shadow"
									src="https://source.unsplash.com/random/260x160?sig=2"
									alt="Card 2"
                                    />
                                </div>
							</div>

							{/* Card 3 */}
							<div className="flex-shrink-0 min-w-[300px] mx-2">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 3
									</h3>
									<p className="text-gray-600">Description of card 3.</p>
								</div>
                                <div className="flex justify-center">
                                    <img
									className="h-48 w-48 object-cover mt-2 rounded-full shadow"
									src="https://source.unsplash.com/random/260x160?sig=3"
									alt="Card 3"
                                    />
                                </div>
							</div>

							{/* Card 4 */}
							<div className="flex-shrink-0 min-w-[300px] mx-2">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 4
									</h3>
									<p className="text-gray-600">Description of card 4.</p>
								</div>
                                <div className="flex justify-center">
                                    <img
									className="h-48 w-48 object-cover mt-2 rounded-full shadow"
									src="https://source.unsplash.com/random/260x160?sig=4"
									alt="Card 4"
                                    />
                                </div>
							</div>

							{/* Card 5 */}
							<div className="flex-shrink-0 min-w-[300px] mx-2">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 5
									</h3>
									<p className="text-gray-600">Description of card 5.</p>
								</div>
                                <div className="flex justify-center">
                                    <img
									className="h-48 w-48 object-cover mt-2 rounded-full shadow"
									src="https://source.unsplash.com/random/260x160?sig=5"
									alt="Card 5"
                                    />
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

export default ContamSection;