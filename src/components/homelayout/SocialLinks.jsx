import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <FaInstagram />, name: "Instagram" },
  ];

  return (
    <div className="bg-white my-8 my-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-5">Find us on</h2>
      <div className="join w-full join-vertical">
        {links.map((link, index) => (
          <button key={index} className="btn text-base py-6 join-item">
            <span className="text-blue-600 bg-gray-200 rounded-full p-1">
              {link.icon}
            </span>
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
