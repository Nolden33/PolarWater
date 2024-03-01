import React from "react";
import ReRe from "../../images/landingPage/filterSection/ReRe.jpg";

function FilterSection() {
	return (
		<React.Fragment>
			<div className="container mx-auto p-4 relative">
				<div className="overflow-hidden relative w-full h-full">
					<div className="flex flex-col md:flex-row">
						{/* Image Section */}
						<div className="md:w-1/2">
							<img
								className="w-full h-auto object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Rihanna_Fenty_2018.png"
								alt="Image Description"
								style={{ minWidth: "50%" }}
							/>
						</div>

						{/* Content Section */}
						<div className="md:w-1/2 flex flex-col items-center justify-start p-4 md:px-40 md:pt-48">
							<div className="mb-4 space-y-4">
								<h1 className="text-3xl font-bold text-gray-800 mb-2">
									Over a century of experience standing under an umbrella.
								</h1>
								<p className="text-gray-600">
									Bad girl RiRi now <br />
									Swerve, swerve, swerve, swerve, leave it now
									<br />
									On your pulse like its EDM
									<br />
									Gas in the bitch like its premium
									<br />
									Haul ass on a bitch all in the fast lane
									<br />
									Been a bad bitch way before any cash came
									<br />
									I'm established, hundred carats on my name
									<br />
									Run the atlas, Im a natural, I'm alright
									<br />
								</p>
							</div>
						</div>
					</div>

					{/* Cards Row */}
					<div className="md:absolute bottom-8 right-0 md:left-1/3 z-20 w-full">
						{/* Cards Row */}
						<div className="flex overflow-x-auto py-2 -mx-2 md:w-3/4">
							{/* Card 1 */}
							<div className="flex-shrink-0 min-w-[300px] bg-white rounded-lg shadow mx-4">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 1
									</h3>
									<p className="text-gray-600">Description of card 1.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=6"
									alt="Card 1"
								/>
							</div>

							{/* Card 2 */}
							<div className="min-w-[300px] bg-white rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 2
									</h3>
									<p className="text-gray-600">Description of card 2.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=7"
									alt="Card 2"
								/>
							</div>

							{/* Card 3 */}
							<div className="min-w-[300px] bg-white rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 3
									</h3>
									<p className="text-gray-600">Description of card 3.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=8"
									alt="Card 3"
								/>
							</div>

							{/* Card 4 */}
							<div className="min-w-[300px] bg-white rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 4
									</h3>
									<p className="text-gray-600">Description of card 4.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=9"
									alt="Card 4"
								/>
							</div>

							{/* Card 5 */}
							<div className="min-w-[300px] bg-white rounded-lg shadow flex-shrink-0 mx-4">
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										Card Title 5
									</h3>
									<p className="text-gray-600">Description of card 5.</p>
								</div>
								<img
									className="h-40 w-full object-cover mt-2 rounded-b-lg"
									src="https://source.unsplash.com/random/260x160?sig=10"
									alt="Card 5"
								/>
							</div>
							<div className="hidden md:flex flex-shrink-0 w-4 mx-10 md:w-8"></div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default FilterSection;
