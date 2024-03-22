import React from "react";
import Banner from "./Banner";
import FilterSection from "./FilterSection";
import ContamSection from "./ContamSection";
import YelpSection from "./YelpSection";
import ContactInfo from "./ContactInfo";

function LandingPage() {
    return (
        <React.Fragment>
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <Banner />
                </div>
                <div className="col-span-12 w-full h-25 blueOne hidden">
                    <div>
                    <br /><br />
                    </div>
                    <div class="hidden md:block">
                    <br /><br />
                    </div>
                </div>
                <div id="FILTERS" className="col-span-12 lg:px-20 xl:px-40 lg:py-20 bg-white h-full">
                    <FilterSection />
                </div>
                <div id="CONTAMS" className="col-span-12 lg:px-20 xl:px-40 lg:py-20 blueSix h-full">
                    <ContamSection />
                </div>
                <div id="YELP" className="border border-slate-950 col-start-2 col-end-12 hidden">
                    <YelpSection />
                </div>
                <div id="CONTACT" className="col-start-2 col-end-12 mt-16">
                    <ContactInfo />
                </div>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;