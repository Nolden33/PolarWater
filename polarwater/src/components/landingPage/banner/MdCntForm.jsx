import React from "react";
import { Link } from "react-router-dom";

function MdCntForm() {
    return (
        <React.Fragment>
            <div className="row-start-4 col-span-12 row-span-2 flex flex-col justify-end">
                <div className="mb-20 w-full">
                    <Link
                        to="/contactUs"
                        className="block uppercase underline decoration-red-700 tracking-wide blueTextOne text-lg font-black mb-2 text-left tracking-widest ps-8 mb-4"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/contactUs"
                        className="block uppercase underline decoration-red-700 tracking-wide blueTextOne text-lg font-black mb-2 text-left tracking-widest ps-8 mb-4"
                    >
                        Schedule a Phone Consultation
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MdCntForm;


// {/* <form className="space-y-4">
// {/* Form's First Row: First Name, Last Name, and Zipcode */}
// <div className="flex flex-wrap -mx-3">
// 	<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
// 		<input
// 			className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
// 			id="grid-first-name"
// 			type="text"
// 			placeholder="First Name"
// 		/>
// 	</div>
// 	<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
// 		<input
// 			className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
// 			id="grid-last-name"
// 			type="text"
// 			placeholder="Last Name"
// 		/>
// 	</div>
// 	<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
// 		<input
// 			className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
// 			id="grid-contact"
// 			type="text"
// 			placeholder="Phone Number or Email"
// 		/>
// 	</div>
// </div>

// {/* Form's Second Row: Phone Number or Email, Preferred Method of Contact, and Best Time to Contact */}
// <div className="flex flex-wrap -mx-3">
// 	<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
// 		<input
// 			className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
// 			id="grid-zip"
// 			type="text"
// 			placeholder="Zipcode"
// 			maxLength="5"
// 		/>
// 	</div>
// 	<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center">
// 		<fieldset className="w-full">
// 			<legend className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
// 				Preferred Method
// 			</legend>
// 			<div className="flex justify-around">
// 				<label className="inline-flex items-center">
// 					<input
// 						type="radio"
// 						className="form-radio"
// 						name="contactMethod"
// 						value="text"
// 					/>
// 					<span className="ml-2">Text</span>
// 				</label>
// 				<label className="inline-flex items-center">
// 					<input
// 						type="radio"
// 						className="form-radio"
// 						name="contactMethod"
// 						value="call"
// 					/>
// 					<span className="ml-2">Call</span>
// 				</label>
// 				<label className="inline-flex items-center">
// 					<input
// 						type="radio"
// 						className="form-radio"
// 						name="contactMethod"
// 						value="email"
// 					/>
// 					<span className="ml-2">Email</span>
// 				</label>
// 			</div>
// 		</fieldset>
// 	</div>
// 	<div className="w-full md:w-1/4 px-3">
// 		<select
// 			className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
// 			id="grid-time"
// 			placeholder="Phone Number or Email"
// 		>
// 			<option>Morning</option>
// 			<option>Mid-Day</option>
// 			<option>Evening</option>
// 		</select>
// 	</div>
// 	<div className="w-full md:w-1/4 px-3">
// 		<button
// 			type="submit"
// 			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// 		>
// 			Submit
// 		</button>
// 	</div>
// </div>
// </form> */}