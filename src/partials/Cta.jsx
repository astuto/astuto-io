import React from 'react';

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
                <h3 className="h3 text-white mb-2">Do you want to give it a try?</h3>
                <p className="text-white text-lg opacity-75">We offer a free 14 days trial. No credit card required.</p>
              </div>

              {/* CTA button */}
              <div>
                <a className="btn text-black bg-white" href="#">
                  Get started
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg> 
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
