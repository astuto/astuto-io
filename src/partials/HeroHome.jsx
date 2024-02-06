import React from 'react';
import { HashLink } from 'react-router-hash-link';

import HeroImage from '../images/hero-image.png';

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 md:grid md:grid-cols-12 md:gap-16">

          {/* Section header */}
          <div className="text-left pb-12 md:pb-16 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 md:row-start-1 md:mt-6">
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-8" data-aos="zoom-y-out">
              <span>Understand your customers and build a better product</span>
            </h1>
            <p className="text-xl text-gray-600">
              Astuto helps you collect and organize feedback from your users, so you can focus on building what matters to them.
            </p>
            <div className="max-w-3xl mx-auto mt-8">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a href="https://github.com/astuto/astuto" className="btn btn-primary w-full sm:w-auto sm:ml-4">
                    Get started
                    <svg className="w-3 h-3 fill-current text-white shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 md:row-start-1 mb-8 md:mb-0 md:order-1">
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={HeroImage} width="1908" height="1400" alt="Hero" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroHome;