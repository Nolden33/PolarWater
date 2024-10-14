import React from "react";

function AccordionOne() {
	return (
		<div className="px-4">
			<p className="text-left text-lg mb-4">
				{" "}
				{/* Increased bottom margin for better visual separation */}
				The best way to contact Polar Water is by Phone Consultation. However,
				we welcome text messaging and emails as well.
			</p>
			<div className="hidden sm:flex sm:flex-col text-gray-800 sm:ml-auto sm:flex-none sm:items-start">
				<a href="tel:+19512125633" className="hover:text-red-700 hover:underline text-lg">
					<i className="fas fa-phone mr-2"></i>
					+1 (951) 212-5633
				</a>
				<a href="mailto:Polarwaterllc@gmail.com" className="hover:text-red-700 hover:underline text-lg">
					<i className="fas fa-envelope mr-2"></i>
					Polarwaterllc@gmail.com
				</a>
			</div>
			<div className="flex sm:hidden flex-col text-gray-800 mt-5">
				<a href="tel:+19512125633" className="text-red-700 hover:underline text-lg">
					<i className="fas fa-phone mr-2"></i>
					+1 (951) 212-5633
				</a>
				<a href="mailto:Polarwaterllc@gmail.com" className="text-red-700 hover:underline text-lg">
					<i className="fas fa-envelope mr-2"></i>
					Polarwaterllc@gmail.com
				</a>
			</div>
		</div>
	);
}

export default AccordionOne;
