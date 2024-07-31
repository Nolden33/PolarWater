import React, { useState } from "react";
import Acc1 from "./AccordionOne.jsx";
import Acc2 from "./AccordionTwo.jsx";
import Water from "../../images/products/WaterSpread.png";
import Map from "../../images/landingPage/contactInfo/InlandEmpire.gif";

function ContactUs() {
	const [activeId, setActiveId] = useState(null);

	const toggleAccordion = (id) => {
		setActiveId(activeId === id ? null : id);
	};

	const accordionItems = [
		{
			id: 1,
			title: "Contact Us",
			content: <Acc1 />,
		},
		{
			id: 2,
			title: "Schedule a Phone Consultation",
			content: <Acc2 />,
		},
		{
			id: 3,
			title: "Operating Hours",
			content: (
				<div className="text-lg text-left">
					<p>Mon - Fri: 8am to 7pm</p>
					<p>Sat & Sun: Closed</p>
				</div>
			),
		},
		{
			id: 4,
			title: "Area of Operation",
			content: (
				<div className="flex flex-col md:grid md:grid-rows-1 md:grid-cols-6 place-items-center">
				<div className="md:row-span-1 md:col-span-3 bg-white flex flex-col">

					{/* Grid for service areas */}
					<div className="grid grid-cols-3 grid-rows-5 text-md text-gray-600 place-items-center">
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

				<div className="md:row-span-1 md:col-span-3 flex justify-center items-center">
					<img
						src={Map}
						alt="Map of the Inland Empire"
						className="max-w-full h-auto"
					/>
				</div>
			</div>
			),
		},
		{
			id: 5,
			title: "Social Medias",
			content:
				"This is the first item's accordion body. It is hidden by default...",
		},
	];

	return (
		<React.Fragment>
			{/* Title and Banner section */}
			<div className="relative block overflow-hidden dark:focus:outline-none">
				<div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden">
					<img
						className="w-full h-80 object-cover"
						src={Water}
						alt="Water Filtration Systems"
					/>
				</div>
				<div className="absolute bottom-48 sm:bottom-52 lg:start-28 md:start-16 p-2">
					<div className="p-3 text-4xl font-bold text-black">
						Frequently Asked Questions
					</div>
				</div>
			</div>

			{/* Grid Layout */}
			<div className="container mx-auto p-4 lg:px-40">
				<div className="grid grid-rows-3 gap-4 p-4">
					{/* Accordion for Contact Us, Schedule, and Social Medias */}
					<div className="flex flex-col gap-4">
						{accordionItems.map(({ id, title, content }) => (
							<div
								key={id}
								className={`border ${
									activeId === id ? "border-blue-600" : "border-transparent"
								} rounded-lg overflow-hidden transition-colors`}
							>
								<button
									className={`flex justify-between items-center text-2xl w-full px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-100 focus:outline-none ${
										activeId === id ? "text-blue-600" : ""
									}`}
									aria-expanded={activeId === id}
									onClick={() => toggleAccordion(id)}
								>
									{title}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className={`w-6 h-6 transform ${
											activeId === id ? "rotate-180" : ""
										}`}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								<div
									className={`${
										activeId === id ? "h-auto" : "max-h-0"
									} overflow-hidden transition-max-height duration-700 ease-in-out`}
								>
									<div className="p-5">
										{typeof content === "string" ? (
											<p className="text-gray-800">{content}</p>
										) : (
											content
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ContactUs;
