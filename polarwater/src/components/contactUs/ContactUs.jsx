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
            id: "one",
            title: "Contact Us",
            content: <Acc1 />
        },
        {
            id: "two",
            title: "Schedule for Us to Call You",
            content: <Acc2 />
        },
        {
            id: "three",
            title: "Social Medias",
            content: "This is the first item's accordion body. It is hidden by default..."
        }
    ];

  return (
    <React.Fragment>
      {/* Title and Banner section */}
      <div className="relative block overflow-hidden dark:focus:outline-none">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden">
          <img className="w-full h-80 object-cover" src={Water} alt="Water Filtration Systems" />
        </div>
        <div className="absolute bottom-48 lg:start-40 md:start-20 p-2">
          <div className="p-3 text-3xl font-bold text-black">
            Contact Us
          </div>
        </div>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-rows-3 gap-4 p-4">
        {/* Row 1: Banner and Title - Already included above */}

        {/* Row 2: Brief Description and Image */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="p-4 text-lg">
            <h2 className="font-bold text-xl mb-2">Operating Hours</h2>
            <p>Mon - Fri: 9am to 5pm</p>
            <p>Sat: 10am to 4pm</p>
            <p>Sun: Closed</p>
          </div>
          <div>
            <img src={Map} alt="Map of the Inland Empire" className="max-w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Row 3: Accordion for Contact Us, Schedule, and Social Medias */}
        <div className="flex flex-col gap-4">
                {accordionItems.map(({ id, title, content }) => (
                    <div key={id} className={`border ${activeId === id ? 'border-blue-600' : 'border-transparent'} rounded-lg overflow-hidden transition-colors`}>
                        <button
                            className={`flex justify-between items-center w-full px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-100 focus:outline-none ${activeId === id ? 'text-blue-600' : ''}`}
                            aria-expanded={activeId === id}
                            onClick={() => toggleAccordion(id)}
                        >
                            {title}
                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transform ${activeId === id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${activeId === id ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-max-height duration-700 ease-in-out`}>
                            <div className="p-5">
                                {typeof content === "string" ? <p className="text-gray-800">{content}</p> : content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
      </div>
    </React.Fragment>
  );
}

export default ContactUs;
