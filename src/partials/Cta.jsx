import React from 'react';
import GetStartedButton from './custom/GetStartedButton';

function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 mt-8 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-black rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">
                  Still unsure?
                </h3>
                <p className="text-white text-lg opacity-75">
                  Start your 7-day free trial in minutes, without a credit card.
                  <br />
                  You can also request more free trial time if needed.
                  <br /><br />
                  For any questions, we're here to help. <a href="mailto:info@astuto.io" className="underline">Contact us</a>.
                </p>
              </div>

              {/* CTA button */}
              <div>
                <GetStartedButton text="Start your 7-day free trial" type="secondary" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
