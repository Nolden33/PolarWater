import React from "react";
import ContactInfo from "./components/landingPage/ContactInfo";

function Footer() {
	return (
		<React.Fragment>
			<div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
				{/* Column 1 */}
				<div className="mb-4 md:mb-0">
                    {/* <ContactInfo /> */}
				</div>
				{/* Column 2 */}
				<div className="mb-4 md:mb-0">
					<h5 className="font-bold text-lg mb-2">Column 2</h5>
					<p className="text-gray-400 text-sm">
						Quisque elementum nibh at dolor pellentesque, a eleifend libero
						pharetra.
					</p>
				</div>
				{/* Column 3 */}
				<div className="mb-4 md:mb-0">
					<h5 className="font-bold text-lg mb-2">Column 3</h5>
					<p className="text-gray-400 text-sm">
						Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel
						enim.
					</p>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Footer;
