import React from 'react';

import HeroImage from '../images/hero-image.png';
import GetStartedButton from './custom/GetStartedButton';

import { DEMO_URL } from '../constants/urls';

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-24 pb-12 md:pt-36 md:grid md:grid-cols-12 md:gap-16">

          {/* Section header */}
          <div className="text-center pb-12 max-w-xl md:text-left md:max-w-none md:w-full mx-auto md:col-span-5 md:row-start-1 md:mt-6">
            <h1 className="text-3xl font-bold leading-tighter tracking-tighter mb-8 lg:text-4xl" data-aos="zoom-y-out">
              <span>Understand your customers and build a better product</span>
            </h1>
            <p className="text-xl text-gray-600">
              Astuto helps you collect and organize feedback from your users, so you can focus on building what matters.
            </p>
            <div className="max-w-3xl mx-auto mt-8">
              <div className="max-w-xs mx-auto sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <GetStartedButton />
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 md:row-start-1md:order-1">
            <div className="relative self-center flex flex-col justify-center" data-aos="zoom-y-out" data-aos-delay="450">
              <a
                href={DEMO_URL}
                target="_blank"
                onClick={() => {
                  window.goatcounter.count({
                    path:  'click-example',
                    title: 'Click Live Example link',
                    event: true,
                  });
                }}
              >
                <img className="mx-auto rounded-lg shadow-xl border hero-image hover:scale-105 transition-all" src={HeroImage} width="960" height="731" alt="Astuto's feedback page showing some customer feedback messages" />
              </a>
              <div className="text-center mt-6">
                Check out the&nbsp;
                <a
                  href={DEMO_URL}
                  target="_blank"
                  className="underline"
                  onClick={() => {
                    window.goatcounter.count({
                      path:  'click-example',
                      title: 'Click Live Example link',
                      event: true,
                    });
                  }}
                >
                  live example
                </a>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  onClick={() => {
                    window.goatcounter.count({
                      path:  'click-example',
                      title: 'Click Live Example link',
                      event: true,
                    });
                  }}
                >
                  &nbsp;&#8593;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroHome;