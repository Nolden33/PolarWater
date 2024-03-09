import React from "react";
// import ProductBanner from "./ProductBanner";
import ProductCard from "./ProductCards";

function WholeHouse() {
    return (
        <React.Fragment>
            <div className="grid grid-flow-row auto-rows-max">
                <div id="BANNER" className="">
                    {/* <ProductBanner /> */}
                </div>
                <div className="">
                    <p class="text-2xl">
                        Whole House Systems
                    </p>
                    <p class="text-lg">
                        this will have a picture here. the whole house systems as a title above picture or below banner?
                    </p>
                </div>
                <div id="WHOLEHOUSECARDS" className="">
                    <ProductCard />
                </div>
            </div>
        </React.Fragment>
    );
}

export default WholeHouse;