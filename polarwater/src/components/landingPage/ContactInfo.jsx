import React from "react";

function ContactInfo() {
	return (
        
		<div className="flex flex-col md:flex-row -mx-3">
			<div className="w-full px-3 mb-6 md:mb-0 md:order-last">
				<div className="px-3 py-4">
					<h2 className="text-lg font-semibold text-indigo-600">Contact Us</h2>
					<p className="mt-1 text-sm text-gray-600">
						Our customer care team is available for you 24 hours a day.
					</p>
				</div>
			</div>

			<div className="w-full md:w-1/2 px-3">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <form className="space-y-4">
                    {/* First and Last Name */}
					<div>
						<div className="sm:flex rounded-lg shadow-sm">
							<span className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg  dark:border-gray-700">
								First and last name
							</span>
							<input
								type="text"
								className="py-3 px-4 pe-11 block w-full border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700  dark:focus:ring-gray-600"
							/>
							<input
								type="text"
								className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700  dark:focus:ring-gray-600"
							/>
						</div>
					</div>

                    {/* Phone Number */}
					<div>
						<label
							htmlFor="hs-inline-leading-select-label"
							className="block text-sm font-medium mb-2 dark:text-white"
						>
							Phone number
						</label>
						<div className="relative">
							<input
								type="text"
								id="hs-inline-leading-select-label"
								name="inline-add-on"
								className="py-3 px-4 ps-20 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:focus:ring-gray-600"
								placeholder="+1 (000) 000-0000"
							/>
							<div className="absolute inset-y-0 start-0 flex items-center text-gray-500 ps-px">
								<label
									htmlFor="hs-inline-leading-select-country"
									className="sr-only"
								>
									Country
								</label>
								<select
									id="hs-inline-leading-select-country"
									name="hs-inline-leading-select-country"
									className="block w-full border-transparent rounded-lg focus:ring-blue-600 focus:border-blue-600 "
								>
									<option>US</option>
									<option>CA</option>
									<option>EU</option>
								</select>
							</div>
						</div>
					</div>

                    {/* City */}
					<div>
						<div className="sm:flex rounded-lg shadow-sm">
							<span className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg  dark:border-gray-700">
								City
							</span>
							<input
								type="text"
								className="py-3 px-4 pe-11 block w-full border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700  dark:focus:ring-gray-600"
							/>
						</div>
					</div>

                    {/* Button */}
					<div className="text-right">
						<button
							type="submit"
							className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
