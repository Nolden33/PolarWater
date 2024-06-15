import React from "react";
import { Link } from "react-router-dom";

function SmCntForm() {
    return (
        <React.Fragment>
            <div className="row-start-4 col-span-6 sm:col-span-4 row-span-2 flex flex-col justify-center sm:pb-16">
                <div className="p-4 mb-4 w-full">
                    <Link to="/contactUs">
                        <button
                            type="button"
                            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent blueOne text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            Get a free quote
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SmCntForm;

