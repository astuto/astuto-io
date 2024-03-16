import React, { useState } from 'react';
import GetStartedButton from './custom/GetStartedButton';

function PricingTables() {

  const [value, setValue] = useState(false);

  const [priceOutput] = useState({
    plan1: {
      false: ['€', '30', '/month'],
      true: ['€', '270', '/year']
    }
  });

  return (
    <section id="pricing" className="relative pt-8">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-primary-lightest pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 pb-12">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="h2" data-aos="zoom-y-out">
              Pricing
            </h2>
          </div>

          {/* Pricing tables */}
          <div>

            {/* Pricing toggle */}
            <div className="flex justify-center max-w-xs m-auto mb-4" data-aos="zoom-y-out">
              <div className="relative flex w-full mx-6 p-1 bg-gray-200 rounded">
                <span
                  className="absolute inset-0 m-1 pointer-events-none"
                  aria-hidden="true"
                >
                  <span className={`absolute inset-0 w-1/2 bg-white rounded shadow transform transition duration-150 ease-in-out ${value ? 'translate-x-full' : 'translate-x-0'}`}></span>
                </span>
                <button
                  className={`relative flex-1 text-md font-medium p-1 transition duration-150 ease-in-out ${value && 'text-gray-500'}`}
                  onClick={(e) => { e.preventDefault(); setValue(false); }}
                >
                  Bill Monthly
                </button>
                <button
                  className={`relative flex-1 text-md font-medium p-1 transition duration-150 ease-in-out ${!value && 'text-gray-500'}`}
                  onClick={(e) => { e.preventDefault(); setValue(true); }}
                >
                  Bill Yearly <span className="text-red-500 font-bold">-25%</span>
                </button>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-8 grid-cols-1 xl:gap-6 items-start">

              {/* Pricing table 1 */}
              <div className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl" data-aos="zoom-y-out">
                <div className="mb-4">
                  {/* <div className="text-lg font-bold mb-1">Starter</div> */}

                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-3xl font-bold">{priceOutput.plan1[value][0]}</span>
                    <span className="text-4xl font-bold">{priceOutput.plan1[value][1]}</span>
                    <span className="text-gray-600 pl-2">{priceOutput.plan1[value][2]}</span>
                  </div>
                  {/* Also show monthly price when yearly billing selected */}
                  {
                    value &&
                      <div className="inline-flex items-baseline mb-2">
                        <span className="text-lg ml-8">(</span>
                        <span className="text-xl font-bold">{priceOutput.plan1[value][0]}</span>
                        <span className="text-xl font-bold">{parseInt(priceOutput.plan1[value][1]) / 12}</span>
                        <span className="text-gray-600 pl-2">{'/month'}</span>
                        <span className="text-lg">)</span>
                      </div>
                  }
                  <div className="text-md text-gray-800">
                    For most small-medium organizations.
                    <br />
                    Bigger organizations can <a href="mailto:info@astuto.io" className="underline">contact us</a> for a custom plan.
                  </div>
                </div>
                <ul className="text-gray-600 text-lg grow">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current color-primary mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>All features</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current color-primary mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited feedback</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current color-primary mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited boards</span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <GetStartedButton />
                </div>
              </div>

            </div>

          </div>

        </div >
      </div >
    </section >
  );
}

export default PricingTables;
