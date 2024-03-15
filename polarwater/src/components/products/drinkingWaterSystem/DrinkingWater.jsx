import React from "react";
import Five from "../../../images/products/drinkingWater/FiveStage.png";
import Six from "../../../images/products/drinkingWater/SixStage.png";

function DrinkingWater() {
	return (
		<React.Fragment>
			<div className="grid grid-flow-row auto-rows-max">
				<div id="BANNER" className="">
					{/* <ProductBanner /> */}
				</div>
				<div className="">
					<p class="text-2xl">Drinking Water Systems</p>
					<p class="text-lg">
						this will have a picture here. the whole house systems as a title
						above picture or below banner?
					</p>
				</div>
				<div className="container mx-auto">
					<div className="flex flex-col bg-white lg:p-4 lg:p-5">
						<div className="flex flex-col">
							<div className="overflow-x-auto">
								<div className="inline-block min-w-full p-1.5 align-middle">
									<div className="overflow-hidden">
										<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
											<thead>
												<tr>
													<th
														scope="col"
														className="px-6 py-3 text-center text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
													/>
													<th scope="col" className="">
														<img
															className="mt-2 h-40 w-full max-w-xs rounded-b-lg object-cover"
															src={Five}
															alt="Five Stage Reverse Osmosis System"
														/>
														<p className="px-6 pb-3 text-start text-lg font-medium uppercase text-gray-500 dark:text-gray-900">
															5 Stage
														</p>
													</th>
													<th scope="col" className="">
														<img
															className="mt-2 h-40 w-full max-w-xs rounded-b-lg object-cover"
															src={Six}
															alt="Six Stage Reverse Osmosis System"
														/>
														<p className="px-6 pb-3 text-start text-lg font-medium uppercase text-gray-500 dark:text-gray-900">
															6 Stage
														</p>
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
												<tr>
													<td className="whitespace-normal lg:px-6 lg:py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
														<p className="whitespace-nowrap text-lg text-gray-800">
															5 Micron Sediment Filter
														</p>
														<p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
															Reduces Dirt, Sand, and Rust
														</p>
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
												</tr>
												<tr>
													<td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
														<p className="whitespace-normal text-lg text-gray-800">
															Carbon Block Filter
														</p>
														<p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
															Reduces Chlorine, Tastes, and Odors
														</p>
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
												</tr>
												<tr>
													<td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
														<p className="whitespace-normal text-lg text-gray-800">
															1 Micron Special Blend Filter
														</p>
														<p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
															Reduces Chloramine, Lead, and Cysts
														</p>
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
												</tr>
												<tr>
													<td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
														<p className="whitespace-normal text-lg text-gray-800">
															50 GPD or 100 GPD RO Membrane
														</p>
														<p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
															Reverse Osmosis Process
														</p>
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
												</tr>
												<tr>
													<td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
														<p className="whitespace-normal text-lg text-gray-800">
															Carbon Post-Filter
														</p>
														<p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
															Refines and Enhances Taste
														</p>
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
												</tr>
												<tr>
													<td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
														<p className="whitespace-normal text-lg text-gray-800">
															Alkaline Cartridge
														</p>
														<p className="whitespace-normal px-6 text-sm text-gray-600 dark:text-gray-500">
															Increases the pH of the filtered water <br />
															typically to between 8.5 – 10.0
														</p>
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														No
													</td>
													<td className="whitespace-normal px-6 py-4 text-sm text-gray-800">
														Yes
													</td>
												</tr>
											</tbody>
										</table>
										<p className="w-full text-pretty px-6 py-4 text-center text-sm font-medium text-gray-800">
											Both systems are designed for easy under-sink installation
											and offer options for icemaker and auxiliary use points.
											So, whether you're looking to improve the quality of your
											drinking water or want the convenience of purified water
											on tap, the Penguin Water Reverse Osmosis Systems are
											perfect
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default DrinkingWater;
