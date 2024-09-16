import React from "react";

function AccordionOne() {
    return (
        <div className="px-4">
            <p className="text-left text-lg mb-4"> {/* Increased bottom margin for better visual separation */}
                The best way to contact Polar Water is by Phone Consultation. However, we welcome texts and emails as well.
            </p>
            <ul className="text-left list-none space-y-2"> {/* Added space between list items */}
                <li className="">
                    <span className="font-bold uppercase">Phone Number:</span><span className="hover:text-blue-600 cursor-pointer"> 951-212-5633 </span>
                </li>
                <li className="">
                    <span className="font-bold uppercase">Email:</span><span className="hover:text-blue-600 cursor-pointer"> Polarwaterllc@gmail.com </span>
                </li>
            </ul>
        </div>
    );
}

export default AccordionOne;



