import React, { useState } from "react";
import upflow from "../../../images/products/wholeHouse/CarbonmMediaPNG.png";
import conditioner from "../../../images/products/wholeHouse/ConditioningmediaPNG.png";

function ProductLarge() {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleClose = (e) => {
		if (e.target.id === "lightbox") {
			setSelectedImage(null);
		}
	};

	return (
		<React.Fragment>
			<div className="container mx-auto p-4">
			<div className="mx-auto space-y-8 mt-12">
                    <h3 className="text-4xl font-bold text-gray-800 dark:text-black">
                        NON-ELECTRIC SYSTEMS
                    </h3>
                    <div className="w-1/4 mx-auto h-1 bg-red-700"></div>
                </div>
				<div
					id="PRODUCTONE"
					className="rounded-xl bg-white sm:flex justify-center my-20"
				>
					<div className="flex flex-col md:flex-col-reverse flex-wrap">
						<div className="flex h-full flex-col p-4 me-8 sm:p-7 text-center">
							<h1 className="text-3xl font-extrabold font-serif uppercase text-gray-800 mb-4">
								Non-Electric Conditioner
							</h1>
							<p className="mt-1 text-lg text-gray-800 dark:text-gray-800 max-w-md">
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
					<div>
						<div className="relative w-full flex-shrink-0 overflow-hidden rounded-r-xl shadow-md drop-shadow-lg sm:max-w-60 sm:rounded-s-xl md:max-w-xs md:rounded-s-none">
							<img
								className="productPic aspect-square object-center start-0 top-0 size-full object-contain cursor-pointer"
								src={conditioner}
								alt="Non-Electric Conditioner"
								onClick={() => handleImageClick(conditioner)}
							/>
						</div>
						<p className="text-slate-400">Click to enlarge</p>
					</div>
				</div>

				<div className="w-full max-w-sm mx-auto border-t border-gray-300 my-8"></div>

				<div
					id="PRODUCTTWO"
					className="rounded-xl bg-white sm:flex justify-center my-20"
				>
					<div>
						<div className="relative w-full flex-shrink-0 overflow-hidden rounded-t-xl shadow-md drop-shadow-lg sm:max-w-60 sm:rounded-s-xl md:max-w-xs md:rounded-se-none">
							<img
								className="productPic aspect-square object-center start-0 top-0 size-full object-contain cursor-pointer"
								src={upflow}
								alt="Penguin Water Non-electric Upflow Filter"
								onClick={() => handleImageClick(upflow)}
							/>
						</div>
						<p className="text-slate-400">Click to enlarge</p>
					</div>
					<div className="flex flex-wrap">
						<div className="flex h-full flex-col p-4 ms-8 sm:p-7">
							<h3 className="text-3xl font-extrabold font-serif uppercase text-gray-800 mb-4">
								Penguin Water Non-electric
								<br />
								Upflow Filter
							</h3>
							<p className="mt-1 text-lg text-gray-800 dark:text-gray-800 max-w-md">
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

			{selectedImage && (
				<div
					id="lightbox"
					className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
					onClick={handleClose}
				>
					<img
						className="max-w-full max-h-full"
						src={selectedImage}
						alt="Enlarged product"
					/>
				</div>
			)}
		</React.Fragment>
	);
}

export default ProductLarge;
