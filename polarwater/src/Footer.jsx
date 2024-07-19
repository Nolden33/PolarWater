import React from "react";
import ContactInfo from "./components/landingPage/ContactInfo";

function Footer() {
	return (
		<React.Fragment>
			<div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
				{/* Column 1 */}
				<div className="mb-4 md:mb-0">
					<h5 className="font-bold text-lg mb-2">polar water logo </h5>
					<p className="text-gray-400 text-sm">
						This area need the polar water logo 
					</p>
				</div>
				{/* Column 2 */}
				<div className="mb-4 md:mb-0">
					<div className="flex flex-col mt-2">
						<a href="tel:+19512125633" className="text-white py-2">
							<i className="fas fa-phone mr-2"></i>
							+1 (951) 212-5633
						</a>
						<a
							href="mailto:Polarwaterllc@gmail.com"
							className="text-white py-2"
						>
							<i className="fas fa-envelope mr-2"></i>
							Polarwaterllc@gmail.com
						</a>
					</div>
				</div>				
				{/* Column 3 */}
				{/* <div className="mb-4 md:mb-0">
					<h5 className="font-bold text-lg mb-2">Column 3</h5>
					<p className="text-gray-400 text-sm">
						Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel
						enim.
					</p>
				</div> */}
			</div>
		</React.Fragment>
	);
}

export default Footer;
