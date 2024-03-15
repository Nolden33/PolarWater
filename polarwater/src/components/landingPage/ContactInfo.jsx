import React from "react";
import Map from "../../images/landingPage/contactInfo/InlandEmpire.gif"

function ContactInfo() {
	return (
		<div className="flex flex-col lg:flex-row -mx-3 justify-evenly items-start lg:px-72 items-stretch space-y-6 lg:space-y-0">
			<div className="flex flex-col items-center w-full lg:w-1/3 px-3 mb-6 lg:mb-0 mx-4">
				{/* Title above the image */}
				<h1 className="text-3xl font-bold mb-4">
					Polar Water's Area of Operations
				</h1>

				{/* Image Section */}
				<img
					src={Map}
					alt="Map of the Inland Empire"
					className="w-full h-auto rounded-lg"
				/>
			</div>

			{/* Contact and Form Information */}
			<div className="w-full lg:w-2/3 px-3 mx-4">
				<div className="bg-white rounded-lg p-4">
					<form className="space-y-6">

						{/* Contact Info */}
						<div className="w-full px-3 mb-6 md:mb-0">
							<div className="px-3">
								<h2 className="text-3xl font-bold mb-4">
									Contact Us
								</h2>
								<p className="mt-1 text-sm text-gray-600">
									Our customer care team is available for you six day a week.
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
										<tr className="bg-white">
										<td className="px-4">Saturday</td>
											<td>9am-5pm</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						{/* Form fields */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
						</div>

						{/* Submit Button */}
						<div className="flex justify-end">
							<button
								type="submit"
								className="shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
