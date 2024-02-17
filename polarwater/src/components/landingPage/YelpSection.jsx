import React from "react";

function YelpSection() {
    return (
        <React.Fragment>
            <div className="grid grid-cols-12">
                <div id="YELP" className="border col-span-12 text-2xl">Yelp section. pull their API</div>
                <div id="FILTERS" className="border col-start-2 col-end-12">Just a bunch of yelp shit</div>
                <div id="CONTAMS" className="border col-start-2 col-end-12">YO check it out! more yelp shit</div>
            </div>
        </React.Fragment>
    );
}

export default YelpSection;