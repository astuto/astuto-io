import React from 'react';

function FeatureExplanationHome({ title, description, image, invert }) {

  const leftTextStyle = 'md:col-start-1 md:col-end-6';
  const rightTextStyle = 'md:col-start-8 md:col-end-13';
  const leftImageStyle = 'md:col-start-1 md:col-end-8';
  const rightImageStyle = 'md:col-start-6 md:col-end-13';

  return (
    <section className="relative my-32">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* Background color */}
      {/* <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div> */}
      {/* Vertical dash */}
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="md:grid md:grid-cols-12 md:gap-16">

            {/* Text */}
            <div className={`${invert ? rightTextStyle : leftTextStyle} max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 md:row-start-1 md:mt-6`} data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">
                  { title }
                </h3>
                <p className="text-xl text-gray-600">
                  { description }
                </p>
              </div>
            </div>

            {/* Image */}
            <div className={`${invert ? leftImageStyle : rightImageStyle} max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 md:row-start-1 mb-8 md:mb-0 md:order-1`} data-aos="zoom-y-out">
              <div className="relative flex flex-col text-center lg:text-right">  
                <div className="relative inline-flex flex-col">
                  <img className="md:max-w-none mx-auto rounded w-full" src={image} alt={`Image showing feature ${title}`} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureExplanationHome;
