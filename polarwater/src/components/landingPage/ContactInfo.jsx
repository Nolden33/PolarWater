import React from "react";
import Map from "../../images/landingPage/contactInfo/InlandEmpire.gif";

function ContactInfo() {
	return (
		<React.Fragment>
			<h1 className="text-4xl font-extrabold font-serif uppercase text-gray-800 mb-2">
				Hours & Areas of Operation
			</h1>
			<div className="mb-8 flex flex-col md:grid md:grid-rows-1 md:grid-cols-6 md:gap-6 place-items-center place-content-evenly">
				<div className="md:row-span-1 md:col-span-3 bg-white p-6 flex flex-col">
					<div>
						<p className="text-xl font-semibold text-gray-800 mb-4">
							Customer Care Availability
						</p>
						<p className="text-md text-gray-600 mb-2">
							Our team is here to assist you five days a week.
						</p>
						<div className="text-md text-gray-600 mb-4">
							<p>Mon - Fri: 8am to 7pm</p>
							<p>Sat & Sun: Closed</p>
						</div>
						<p className="text-xl font-semibold text-gray-800 mb-4">
							Service Areas Include:
						</p>
					</div>

					{/* Grid for service areas */}
					<div className="grid grid-cols-3 grid-rows-5 text-md text-gray-600">
						<p>Banning</p>
						<p>Moreno Valley</p>
						<p>Riverside</p>
						<p>Chino</p>
						<p>Norco</p>
						<p>San Bernardino</p>
						<p>Colton</p>
						<p>Ontario</p>
						<p>Twentynine Palms</p>
						<p>Corona</p>
						<p>Perris</p>
						<p>Yucca Valley</p>
						<p>Fontana</p>
						<p>Rialto</p>
						<p>Rancho Cucamonga</p>
					</div>
					<div className="text-md text-gray-600 place-items-center">***Restrictions Apply***</div>
				</div>

				<div className="md:row-span-1 md:col-span-3 flex justify-center items-center mt-4 sm:mt-0">
					<img
						src={Map}
						alt="Map of the Inland Empire"
						className="max-w-full h-auto"
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ContactInfo;
