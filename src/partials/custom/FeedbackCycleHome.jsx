import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';

import FeedbackCycleElement01 from '../../images/feedback-cycle-1.png';
import FeedbackCycleElement02 from '../../images/feedback-cycle-2.png';
import FeedbackCycleElement03 from '../../images/feedback-cycle-3.png';

function FeedbackCycleHome() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab-1]) {
      tabs.current.style.height = tabs.current.children[tab-1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section id="features" className="relative pt-8">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-primary-lightest pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
            <h1 className="h2 mb-4"><mark>How it works</mark></h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 md:mt-6" data-aos="fade-right">

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <button
                  className={`w-full text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-primary text-white font-extrabold rounded-full shadow shrink-0 mr-5">
                    <span>1</span>
                  </div>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Collect feedback from your users
                    </div>
                    <div className="text-gray-600">
                      Your users can submit their ideas and suggestions.
                    </div>
                  </div>
                </button>
                <button
                  className={`w-full text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-primary text-white font-extrabold rounded-full shadow shrink-0 mr-5">
                    <span>2</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg leading-snug tracking-tight mb-1">
                      Prioritize the received feedback
                    </div>
                    <div className="text-gray-600">
                      Filter by the most voted ideas and decide what to build next.
                    </div>
                  </div>
                </button>
                <button
                  className={`w-full text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-primary text-white font-extrabold rounded-full shadow shrink-0 mr-5">
                    <span>3</span>
                  </div>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Keep users in the loop
                    </div>
                    <div className="text-gray-600">
                      Be transparent and share what you're working on with your users.
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="w-full relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={FeedbackCycleElement01} width="500" height="375" alt="Feedback cycle part 1" />

                    {/* <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement01} width="500" height="147" alt="Element 01" style={{ top: '22%' }} /> */}
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="w-full relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={FeedbackCycleElement02} width="500" height="375" alt="Feedback cycle part 2" />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="w-full relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={FeedbackCycleElement03} width="500" height="375" alt="Feedback cycle part 3" />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackCycleHome;
