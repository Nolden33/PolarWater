import React from "react";
import upflow from "../../../images/products/wholeHouse/CarbonmMediaPNG.png";
import conditioner from "../../../images/products/wholeHouse/ConditioningmediaPNG.png";

function ProductLarge() {
	return (
		<React.Fragment>
			<div className="container mx-auto p-4">
				<div id="PRODUCTONE" className="rounded-xl bg-white sm:flex justify-center my-20">
                <div className="flex flex-col md:flex-col-reverse flex-wrap">
						<div className="flex h-full flex-col p-4 me-8 sm:p-7">
							<h1 className="text-3xl font-extrabold font-serif uppercase text-gray-800 mb-4">
								Non-Electric Conditioner
							</h1>
							<p className="mt-1 text-gray-800 dark:text-gray-800 max-w-md">
								This innovative product uses a unique process called TAC
								(template-assisted crystallization) to condition your water
								without needing electricity or salt. TAC works by manipulating
								the water's mineral content, causing the minerals to structure
								in a manner that won't stick to pipes or appliances. This helps
								to prevent hard water stains and scale build-up, leaving you
								with clean, conditioned water for all your household needs.
							</p>
						</div>
					</div>
					<div className="relative w-full flex-shrink-0 overflow-hidden rounded-r-xl shadow-md drop-shadow-lg sm:max-w-60 sm:rounded-s-xl md:max-w-xs md:rounded-s-none">
						<img
							className="productPic aspect-square object-center start-0 top-0 size-full object-cover"
							src={conditioner}
							alt="Image Description"
						/>
					</div>
				</div>

                <div className="w-full max-w-sm mx-auto border-t border-gray-300 my-8"></div>

				<div id="PRODUCTTWO" className="rounded-xl bg-white sm:flex justify-center my-20">
					<div className="relative w-full flex-shrink-0 overflow-hidden rounded-t-xl shadow-md drop-shadow-lg sm:max-w-60 sm:rounded-s-xl md:max-w-xs md:rounded-se-none">
						<img
							className="productPic aspect-square object-top start-0 top-0 size-full object-cover"
							src={upflow}
							alt="Image Description"
						/>
					</div>
					<div className="flex flex-wrap">
						<div className="flex h-full flex-col p-4 ms-8 sm:p-7">
							<h3 className="text-3xl font-extrabold font-serif uppercase text-gray-800 mb-4">
								Penguin Water Non-electric<br />Upflow Filter
							</h3>
							<p className="mt-1 text-gray-800 dark:text-gray-800 max-w-md">
								Penguin Water also offers a full line of upflow filters to
								address various water treatment needs. Our filters are available
								in various media, including GAC, catalytic carbon, and calcite,
								allowing you to choose the best option for your specific water
								quality issues.
							</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ProductLarge;
