import React from "react";
// import ProductBanner from "./ProductBanner";
import ProductCard from "./ProductCards";

function DrinkingWater() {
    return (
        <React.Fragment>
            <div className="grid grid-flow-row auto-rows-max">
                <div id="BANNER" className="">
                    {/* <ProductBanner /> */}
                </div>
                <div className="">
                    <p class="text-2xl">
                        Drinking Water Systems
                    </p>
                    <p class="text-lg">
                        this will have a picture here. the whole house systems as a title above picture or below banner?
                    </p>
                </div>
                <div id="DRINKINGWATERCARDS" className="">
                    <ProductCard />
                </div>
            </div>
        </React.Fragment>
    );
}

export default DrinkingWater;