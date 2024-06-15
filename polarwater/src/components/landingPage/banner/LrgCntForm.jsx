import React from "react";
import { Link } from "react-router-dom";

function LrgCntForm() {
	return (
			<React.Fragment>
            <div className="row-start-4 col-span-12 row-span-2 flex flex-col justify-end">
                <div className="lg:mb-20 xl:mb-32 2xl:mb-52 w-full">
                    <Link
                        to="/contactUs"
                        className="block uppercase underline decoration-red-700 tracking-wide blueTextOne md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black mb-2 text-left tracking-widest ps-8 mb-4"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/contactUs"
                        className="block uppercase underline decoration-red-700 tracking-wide blueTextOne md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black mb-2 text-left tracking-widest ps-8 mb-4"
                    >
                        Schedule a Phone Consultation
                    </Link>
                </div>
            </div>
        </React.Fragment>
	);
}

export default LrgCntForm;

{/* <div className="row-start-3 col-span-5 row-span-2 flex ms-8 justify-left items-center">
			<div class="flex flex-col blueSix border border-gray-200 shadow-sm rounded-md p-1 ">
				<div className="p-2 mb-4 w-full">
					<h1 className="block uppercase underline decoration-red-700 tracking-wide text-red-600 text-xs font-black mb-2 text-left tracking-widest ps-8 mb-4">
						Contact Us
					</h1>
					<form className="space-y-4 mx-3">
						
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
                            className="blueOne hover:text-cyan-200 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </div>
					</form>
				</div>
				</div>
			</div> */}