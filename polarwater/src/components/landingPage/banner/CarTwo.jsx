import React, { useState, useEffect } from "react";
import Faucet from "../../../images/landingPage/banner/SinkBanner.webp";
import FamilySmall from "../../../images/landingPage/banner/GlassWater.webp";

function CarTwo() {
    const [currentImage, setCurrentImage] = useState(Faucet);

    useEffect(() => {
        // Function to handle the resizing logic
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCurrentImage(FamilySmall);
            } else {
                setCurrentImage(Faucet);
            }
        };

        // Call handleResize on component mount and add event listener for resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
	return (
		<React.Fragment>
			<div className="group block overflow-hidden dark:focus:outline-none relative">
                {/* Image */}
                <img
                    className="size-full object-cover"
                    src={currentImage}
                    alt="Family using fresh and clean water."
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 p-2 flex flex-col justify-center items-center">
                    <div className="text-center mx-auto p-4">
                        {/* Announcement Banner */}
                        <div className="flex justify-center">
                            <a
                                className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 py-1 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200"
                                href="#"
                            >
                                Is your water safe to drink?
                            </a>
                        </div>
                        <br />

					{/* <!-- Title --> */}
					<div className="mt-5 max-w-2xl text-center mx-auto">
						<h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                        Is your water <br />
							<span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
								{" "}
								safe to drink?
							</span>
						</h1>
					</div>
					{/* <!-- End Title --> */}

					<div className="mt-5 max-w-3xl text-center mx-auto">
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Louis XIII, and it's all on me, nigga, you just bought a shot
							Kamikaze, if you think that you gon' knock me off the top
							<br />
							Shit, your wife in the backseat of my brand new foreign car Don't
							act like you forgot
							<br />I call the shots, shots, shots Like bra, bra, bra
							<br />
							Pay me what you owe me, don't act like you forgot
						</p>
					</div>

					{/* <!-- Buttons --> */}
					<div className="mt-8 gap-3 flex justify-center">
						<a
							className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
							href="#"
						>
							Pay me here bitch
							<svg
								className="flex-shrink-0 size-4"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</a>
						<button
							type="button"
							className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						>
							$ npm i dick'er_Down
							<span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-gray-700 dark:text-gray-400">
								<svg
									className="flex-shrink-0 size-4 group-hover:rotate-6 transition"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
									<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
								</svg>
							</span>
						</button>
					</div>
					{/* <!-- End Buttons --> */}

					<div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
						<span className="text-sm text-gray-600 dark:text-gray-400">
							Package Manager:
						</span>
						<span className="text-sm font-bold text-gray-900 dark:text-white">
							dez nutz
						</span>
						<svg
							className="size-5 text-gray-300 dark:text-gray-600"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M6 13L10 3"
								stroke="currentColor"
								stroke-linecap="round"
							/>
						</svg>
						<a
							className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
							href="#"
						>
							Insertion Guide
							<svg
								className="flex-shrink-0 size-4"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
            </div>
			{/* <!-- End Hero --> */}
		</React.Fragment>
	);
}

export default CarTwo;
