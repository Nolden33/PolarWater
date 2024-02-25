import React from "react";

function ContamSection() {
    return (
        <React.Fragment>
			<div className="container mx-auto p-4 relative">
                <div className="overflow-hidden relative w-full h-full">
					<div className="flex flex-col md:flex-row">

						{/* Content Section */}
						<div className="md:w-1/2 flex flex-col items-center justify-start p-4 md:px-40 md:pt-8">
							<div className="mb-4 space-y-4">
								<h1 className="text-3xl font-bold text-gray-800 mb-2">
									Over a century of experience standing under an umbrella.
								</h1>
								<p className="text-gray-600">
									Our service combines the most advanced technology and methods
									available today. This means your customized plan is designed
									to get pests out of your home and keep them out year-round.
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
							<div className="hidden md:flex flex-shrink-0 w-4 mx-10 md:w-8"></div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
    );
}

export default ContamSection;