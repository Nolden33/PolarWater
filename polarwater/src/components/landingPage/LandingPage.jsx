import React from "react";
import Banner from "./Banner";

function LandingPage() {
    return (
        <React.Fragment>
            <div className="grid grid-cols-12">
                <div id="BANNER" className="col-span-12 ">
                    <Banner />
                </div>
                <div id="FILTERS" className="border col-start-2 col-end-12">Filter section. orkin</div>
                <div id="CONTAMS" className="border col-start-2 col-end-12">contaminate section. orkin</div>
                <div id="YELP" className="border col-start-2 col-end-12">Yelp section. pull their API</div>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;