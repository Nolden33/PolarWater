import React from "react";

function Footer() {
    return (
        <React.Fragment>
                <div id="FOOTER" className="border col-start-2 col-end-12">
                    <h2 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                            Footer section.
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        we've gotta find a footer we really like<br /> ...and Rihanna Money
                    </p>
                </div>
        </React.Fragment>
    );
}

export default Footer;