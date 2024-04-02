import React, { useState, useEffect } from "react";
import Water from "../../../images/products/WaterSpread.png";
import ProductPhone from "./ProductPhone";
import ProductLarge from "./ProductLarge";

function DrinkingWater() {
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<React.Fragment>
			<div className="grid grid-flow-row auto-rows-max">
				<a className="group relative block overflow-hidden dark:focus:outline-none">
					<div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden">
						<img
							className="w-full h-80 object-cover"
							src={Water}
							alt="Image Description"
						/>
					</div>
					<div className="absolute bottom-48 sm:bottom-52 lg:start-40 md:start-20 p-2">
						<div className="p-3 text-4xl font-bold text-black">
                            Drinking Water Systems
						</div>
					</div>
				</a>

				{isLargeScreen ? (
					// Product Large Section for larger screens
					<ProductLarge />
				) : (
					// ProductPhone Component for smaller screens
					<ProductPhone />
				)}
			</div>
		</React.Fragment>
	);
}

export default DrinkingWater;
