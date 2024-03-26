import React from "react";
import Map from "../../images/landingPage/contactInfo/InlandEmpire.gif";

function ContactInfo() {
	return (
		<React.Fragment>
			{/* Title section always full width */}
			<h1 className="sm:col-span-6 text-3xl font-bold mb-2">
				Hours and Areas of Operation
			</h1>
			<div className="flex flex-col sm:grid sm:grid-rows-1 sm:grid-cols-6 sm:gap-4 place-items-center">

				{/* Contact and Form Information that takes the other half of the grid on larger screens */}
				<div className="sm:row-span-1 sm:col-span-3 bg-white rounded-lg p-4 flex flex-col justify-between">
					<div className="flex justify-center">
						<form className="space-y-6">
							{/* Contact Info */}
							<div className="w-full px-3">
								<div className="px-3">
									<p className="mt-1 text-sm text-gray-600">
										Our customer care team is available for you five days a
										week.
									</p>
								</div>
								<div className="flex justify-center">
									<table className="lg:w-1/4 text-sm text-gray-600">
										<tbody>
											<tr className="bg-white">
												<td className="px-4">Monday</td>
												<td>9am-5pm</td>
											</tr>
											<tr className="bg-white">
												<td className="px-4">Tuesday</td>
												<td>9am-5pm</td>
											</tr>
											<tr className="bg-white">
												<td className="px-4">Wednesday</td>
												<td>9am-5pm</td>
											</tr>
											<tr className="bg-white">
												<td className="px-4">Thursday</td>
												<td>9am-5pm</td>
											</tr>
											<tr className="bg-white">
												<td className="px-4">Friday</td>
												<td>9am-5pm</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							{/* Form fields */}
							{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<input
									type="text"
									placeholder="First Name"
									className="border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								/>
								<input
									type="text"
									placeholder="Last Name"
									className="border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								/>
							</div>

							<input
								type="text"
								placeholder="+1 (000) 000-0000"
								className="w-full border border-gray-300 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							/>

							<div className="flex items-center gap-4">
								<span className="py-3 px-4 inline-flex items-center justify-center min-w-fit w-1/4 border border-gray-300 bg-gray-50 text-sm text-gray-500 rounded-md">
									City
								</span>
								<input
									type="text"
									className="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:bg-white focus:border-gray-500"
								/>
							</div> */}

							{/* Submit Button */}
							{/* <div className="flex justify-end">
								<button
									type="submit"
									className="shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
								>
									Submit
								</button>
							</div> */}
						</form>
					</div>
				</div>

				{/* Image section that takes half the grid on larger screens */}
				<div className="sm:row-span-1 sm:col-span-3 flex justify-center items-center mt-4">
					<img
						src={Map}
						alt="Map of the Inland Empire"
						className="max-w-full h-auto rounded-lg"
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ContactInfo;
