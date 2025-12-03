import React from "react";
import Logo from "../../Assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          style={{
            position: "relative",

            width: "4rem",
            height: "4rem", // adjust height
            backgroundImage: `url(${Logo})`,
            backgroundSize: "cover",
          }}
          className="pr-4 rounded-2xl shadow-xl hero"
        ></div>
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">SoapStore</h2>
          <p className="text-sm leading-6">
            Premium handcrafted soaps made with love and natural ingredients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@soapstore.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Mumbai, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SoapStore — All rights reserved.
      </div>
    </footer>
  );
}
