import React from "react";
import Map from "../../images/landingPage/contactInfo/InlandEmpire.gif";

function ContactInfo() {
    return (
        <React.Fragment>
            <div className="my-16 container mx-auto space-y-8 relative">
                <h1 id="TITLE" className="text-4xl font-extrabold font-serif uppercase text-gray-800 mb-2 text-center">
                    Hours & Areas of Operation
                </h1>
                <div className="w-3/4 md:w-1/4 mx-auto my-4 h-1 bg-red-700"></div>
                <div className="overflow-hidden relative w-full h-full text-lg">
                    <div className="flex flex-col lg:flex-row justify-evenly items-center">
                        <div id="div1" className="lg:w-1/2 max-w-3xl bg-white md:p-6 flex flex-col">
                            <div>
                                <p className="text-2xl font-semibold text-gray-800 mb-4">
                                    Customer Care Availability
                                </p>
                                <p className="text-md text-gray-600 mb-2">
                                    Our team is here to assist you seven days a week.
                                </p>
                                <div className="text-md text-gray-600 mb-4">
                                    <p>Mon - Fri: 8am to 7pm</p>
                                    <p>Sat & Sun: 9am to 5pm</p>
                                </div>
                                <p className="text-2xl font-semibold text-gray-800 mb-4">
                                    Service Areas Include:
                                </p>
                            </div>
                            <div className="grid grid-cols-1 grid-rows-4 text-md text-gray-600">
                                <p>Riverside County</p>                            
                                <p>and</p>
                                <p>San Bernardino County</p>
                                <br></br>
                                <p>***Restrictions Apply***</p>
                            </div>
                        </div>
                        <div id="div2" className="lg:w-1/2 flex justify-center items-center p-4 mt-4 sm:mt-0">
                            <img src={Map} alt="Map of the Inland Empire" className="sm:w-100 lg:w-3/4 h-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactInfo;


