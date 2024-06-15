import React from "react";

function AccordionTwo() {
    return (
        <React.Fragment>
            <form className="space-y-4">
						{/* Row 1: First and Last Name */}
						<div className="flex flex-wrap -mx-3">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									htmlFor="grid-first-name"
								>
									First Name
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="text"
									placeholder="Jane"
								/>
							</div>
							<div className="w-full md:w-1/2 px-3">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									htmlFor="grid-last-name"
								>
									Last Name
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
									id="grid-last-name"
									type="text"
									placeholder="Doe"
								/>
							</div>
						</div>

						{/* Row 2: Zipcode and Phone Number or Email */}
						<div className="flex flex-wrap -mx-3">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									htmlFor="grid-zip"
								>
									Zipcode
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
									id="grid-zip"
									type="text"
									placeholder="12345"
									maxLength="5"
								/>
							</div>
							<div className="w-full md:w-3/4 px-3">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									htmlFor="grid-contact"
								>
									Phone Number or Email
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
									id="grid-contact"
									type="text"
									placeholder="Your contact information"
								/>
							</div>
						</div>

						{/* Row 3: Preferred Method of Contact and Best Time to Contact */}
						<div className="flex flex-wrap -mx-3 items-center">
                    <div className="w-full md:w-2/5 px-3 mb-6 md:mb-0 flex items-center">
                        <fieldset className="w-full">
                            <legend className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Preferred Method of Contact
                            </legend>
                            <div className="flex justify-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="contactMethod"
                                        value="text"
                                    />
                                    <span className="ml-2">Text</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="contactMethod"
                                        value="call"
                                    />
                                    <span className="ml-2">Call</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="contactMethod"
                                        value="email"
                                    />
                                    <span className="ml-2">Email</span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="w-full md:w-2/5 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-time"
                        >
                            Best Time to Contact
                        </label>
                        <select
                            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-time"
                        >
                            <option>Morning</option>
                            <option>Mid-Day</option>
                            <option>Evening</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/5 px-3">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </div>
					</form>
        </React.Fragment>
    );
}

export default AccordionTwo;
