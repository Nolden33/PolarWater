import React from "react";
// import ProductBanner from "./ProductBanner";
import ProductCard from "./ProductCards";

function WholeHouse() {
    return (
        <React.Fragment>
            <div className="grid grid-cols-12">
                <div id="BANNER" className="col-span-12 ">
                    {/* <ProductBanner /> */}
                </div>
                <div id="FILTERS" className="col-start-2 col-end-12 h-full">
                    <ProductCard />
                </div>
            </div>
        </React.Fragment>
    );
}

export default WholeHouse;