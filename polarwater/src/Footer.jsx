import React from "react";
import pete from "./images/landingPage/polarPeteDrinksHalf.png";

function Footer() {
  return (
    <React.Fragment>	
      <footer className="blueOne text-white py-8">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {/* Column 1: Logo */}
          <div className="flex mb-4 md:mb-0 justify-end items-center space-x-4 ps-4">
            <div className="flex-none text-2xl font-bold">
              Polar Water Filtration
            </div>
            <img
              className="h-20 object-contain"
              src={pete}
              alt="Image Description"
            />
          </div>

          {/* Column 2: Contact Information */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <a href="tel:+19512125633" className="text-white text-lg py-2">
              <i className="fas fa-phone mr-2"></i> +1 (951) 212-5633
            </a>
            <a
              href="mailto:Polarwaterllc@gmail.com"
              className="text-white text-lg py-2"
            >
              <i className="fas fa-envelope mr-2"></i> Polarwaterllc@gmail.com
            </a>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="flex flex-col items-center mb-4 md:mb-0 pt-4">
            <h5 className="font-bold text-lg mb-2">Follow Us</h5>
            <a
              href="https://www.instagram.com/polarwaterllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram: @polarwaterllc
            </a>
            <a
							href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61566791477918%26mibextid%3DLQQJ4d&data=05%7C02%7C%7C7cfefcb0aafb46ab64f408dcef0880a8%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638648067005298266%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=LbVihb4n4fcoF2pVvB9VubOMAXdTKdezM2oA1KgyRJE%3D&reserved=0"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline ml-2"
						>
							Facebook: Polar Water
						</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Polar Water LLC. All rights reserved.
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
