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
			id: 6,
			title: "Discounts",
			content: (
				<div className="text-lg text-left">
					<div>Polar Water is proud to offer discounts to the following:</div>
						<ul class="list-none md:list-disc list-inside mt-4">
							<li>
								First Responders
							</li>
							<li>
								Active Military and Veterans
							</li>
							<li>
								Healthcare Professionals 
							</li>
							<li>
								Teachers
							</li>
							<li>
								55+ 
							</li>
						</ul>
					<div className="mt-4">Contact us for details.</div>
				</div>
			),
		},
		{
			id: 7,
			title: "Referral Program",
			content: (
				<div className="text-2xl text-left font-bold">
					Earn $100 for You & $100 for Them!
					<div className="text-xl text-left font-normal mt-4">
						How It Works: Refer a friend or family member to Polar Water, and when they make a purchase, both of you receive $100.How It Works: Refer a friend or family member to Polar Water, and when they make a purchase, both of you receive $100.
					</div>
					<ul class="list-none md:list-disc list-inside text-lg text-left font-normal mt-4">
						<li>
						Once the new customer completes a purchase, both you and the new customer will receive $100 each via Visa prepaid card.
						</li>
						<li>
						Fill out the form on our website or let your Polar Water representative know to complete it. You will need the original customer’s name, phone number, and address for both the referrer and the referred party.
						</li>
						<li>
						No Limits: The more referrals you make, the more you earn!
						</li>
						<li>
						Fast Payouts: Visa cards will be mailed within 7 to 10 business days after the purchase is completed.
						</li>
					</ul>
				</div>
			),
		},
		{
			id: 3,
			title: "Operating Hours",
			content: (
				<div className="text-lg text-left">
					<p>Mon - Fri: 8am to 7pm</p>
					<p>Sat & Sun: 9am to 5pm</p>
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
						<div className="grid grid-cols-1 grid-rows-4 text-xl text-gray-600">
							<p>Riverside County</p>
							<p>and</p>
							<p>San Bernardino County</p>
							<br></br>
							<p>***Restrictions Apply***</p>
						</div>
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
			content: (
				<div className="text-lg text-left">
					Instagram:
					<a
						href="https://www.instagram.com/polarwaterllc/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline ml-2"
					>
						@polarwaterllc
					</a>
				</div>
			),
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
					<div className="p-3 text-4xl font-bold text-black">Contact Us</div>
				</div>
			</div>

			{/* Grid Layout */}
			<div className="container mx-auto p-4 lg:px-40">
				<div className="py-20">
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
										activeId === id ? "block" : "hidden"
									} transition-all duration-500 ease-in-out`}
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
