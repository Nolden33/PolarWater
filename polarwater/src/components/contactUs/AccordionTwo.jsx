import React, { useState } from "react";
import axios from "axios";

function AccordionTwo() {
    const [customerInfo, setCustomerInfo] = useState({
        firstName: "",
        lastName: "",
        zipcode: "",
        contact: "",
        contactMethod: "text", // Default value
        bestTime: "Morning"    // Default value
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, name, value, type } = e.target;
        // Radio buttons use 'name' while other inputs use 'id'
        const key = type === "radio" ? name : id;

        console.log(e);
        setCustomerInfo({
            ...customerInfo,
            [key]: value, // Dynamically setting form fields based on the input type
        });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        console.log(customerInfo);
        try {
            // Send POST request to the Netlify function
            await axios.post("https://polarwaterllc.com/.netlify/functions/Sendemail", customerInfo);
            alert("Email sent successfully!");
        } catch (error) {
            console.error("There was an error sending the email!", error);
            alert("Failed to send email.");
        }
    };

    return (
        <React.Fragment>
            <form className="space-y-4">
                {/* Row 1: First and Last Name */}
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="firstName"
                        >
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="firstName"
                            type="text"
                            placeholder="Jane"
                            value={customerInfo.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="lastName"
                        >
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            value={customerInfo.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Row 2: Zipcode and Contact */}
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="zipcode"
                        >
                            Zipcode
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="zipcode"
                            type="text"
                            placeholder="12345"
                            value={customerInfo.zipcode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full md:w-3/4 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="contact"
                        >
                            Phone Number or Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="contact"
                            type="text"
                            placeholder="Your contact information"
                            value={customerInfo.contact}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Row 3: Preferred Method of Contact and Best Time to Contact */}
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
                                        name="contactMethod"  // Use "name" for radio buttons
                                        value="text"
                                        checked={customerInfo.contactMethod === "text"}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">Text</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="contactMethod"
                                        value="call"
                                        checked={customerInfo.contactMethod === "call"}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">Call</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="contactMethod"
                                        value="email"
                                        checked={customerInfo.contactMethod === "email"}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">Email</span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="w-full md:w-2/5 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="bestTime"
                        >
                            Best Time to Contact
                        </label>
                        <select
                            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="bestTime"
                            value={customerInfo.bestTime}
                            onChange={handleChange}
                        >
                            <option>Morning</option>
                            <option>Mid-Day</option>
                            <option>Evening</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/5 px-3">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default AccordionTwo;