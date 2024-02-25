import React from "react";
import Banner from "./Banner";
import FilterSection from "./FilterSection";
import ContamSection from "./ContamSection";
import YelpSection from "./YelpSection";

function LandingPage() {
    return (
        <React.Fragment>
            <div className="grid grid-cols-12">
                <div id="BANNER" className="col-span-12 ">
                    <Banner />
                </div>
                <div id="FILTERS" className="border parentContainer border-slate-950 col-start-2 col-end-12 h-full">
                    <FilterSection />
                </div>
                <div id="CONTAMS" className="border border-slate-950 col-start-2 col-end-12">
                    <ContamSection />
                </div>
                <div id="YELP" className="border border-slate-950 col-start-2 col-end-12">
                    <YelpSection />
                </div>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;