import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Transition from '../utils/Transition';

import Logo from '../images/logo.png';
import GetStartedButton from './custom/GetStartedButton';
import { DOCS_URL } from '../constants/urls';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      {/* Add a sticky promotion header for black friday deal details */}
      {/* <div className="bg-gray-900 text-white text-center py-2">
        <span>
          <span className="text-red-500"><strong>Black Friday Sale</strong></span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>30% OFF all plans with code: BLACKFRIDAY2024</span>
        </span>
      </div> */}
      
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <HashLink to="/#" className="flex" aria-label="Astuto">
              <img src={Logo} width={48} height={48} alt="Astuto Home" />
              <span className="text-3xl font-bold self-center ml-4">astuto</span>
            </HashLink>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <HashLink
                  to="/#features"
                  onClick={() => {
                    window.goatcounter.count({
                      path:  'click-features',
                      title: 'Click Features menu link',
                      event: true,
                    });
                  }}
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Features
                </HashLink>
              </li>
              {/* <li>
                <HashLink
                  to="/#pricing"
                  onClick={() => {
                    window.goatcounter.count({
                      path:  'click-pricing',
                      title: 'Click Pricing menu link',
                      event: true,
                    });
                  }}
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Pricing
                </HashLink>
              </li> */}
              <li>
                <Link
                  to={DOCS_URL}
                  target="_blank"
                  onClick={() => {
                    window.goatcounter.count({
                      path:  'click-docs',
                      title: 'Click Documentation menu link',
                      event: true,
                    });
                  }}
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Documentation
                </Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <GetStartedButton small />
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/* Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"              
              >
                <ul className="px-5 py-2">
                  <li>
                    <HashLink
                      to="/#features"
                      onClick={() => {
                        setMobileNavOpen(false);
                        window.goatcounter.count({
                          path:  'click-features',
                          title: 'Click Features menu link',
                          event: true,
                        });
                      }}
                      className="flex text-gray-600 hover:text-gray-900 py-2"
                    >
                      Features
                    </HashLink>
                  </li>
                  {/* <li>
                    <HashLink
                      to="/#pricing"
                      onClick={() => {
                        setMobileNavOpen(false);
                        window.goatcounter.count({
                          path:  'click-pricing',
                          title: 'Click Pricing menu link',
                          event: true,
                        });
                      }}
                      className="flex text-gray-600 hover:text-gray-900 py-2"
                    >
                      Pricing
                    </HashLink>
                  </li> */}
                  <li>
                    <Link
                      to={DOCS_URL}
                      target="_blank"
                      onClick={() => {
                        setMobileNavOpen(false);
                        window.goatcounter.count({
                          path:  'click-docs',
                          title: 'Click Documentation menu link',
                          event: true,
                        });
                      }}
                      className="flex text-gray-600 hover:text-gray-900 py-2"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className="py-2">
                    <GetStartedButton />
                  </li>
                </ul>
              </Transition>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
