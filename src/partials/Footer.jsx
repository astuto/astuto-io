import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Logo from '../images/logo.png';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="xs:col-span-6 sm:col-span-6 md:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Product</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <HashLink to="/#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Home
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink to="/#features" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Features
                </HashLink>
              </li>
              {/* <li className="mb-2">
                <HashLink to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Pricing
                </HashLink>
              </li> */}
            </ul>
          </div>

          {/* 2nd block */}
          <div className="xs:col-span-6 sm:col-span-6 md:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="https://docs.astuto.io" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Documentation
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="xs:col-span-6 sm:col-span-6 md:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">We are on</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="https://github.com/astuto/astuto" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  GitHub
                </Link>
              </li>
              <li className="mb-2">
                <Link to="https://www.producthunt.com/products/astuto" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Product Hunt
                </Link>
              </li>
              <li className="mb-2">
                <Link to="https://discord.gg/SrtUMRp" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Discord
                </Link>
              </li>
              <li className="mb-2">
                <Link to="https://crwd.in/astuto" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Crowdin
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="xs:col-span-6 sm:col-span-6 md:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">About</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/credits" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Credits
                </Link>
              </li>
            </ul>

            <div className="mt-8 mb-2">
              {/* Logo */}
              <HashLink to="/#" className="inline-block" aria-label="Cruip">
                <img src={Logo} width={32} height={32} />
              </HashLink>

              {/* Copyrights note */}
              <div className="text-sm text-gray-600 mr-4">
                &copy; {new Date().getFullYear()} Astuto
              </div>
            </div>
          </div>      
        </div>
      </div>
    </footer>
  );
}

export default Footer;
