import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';

import FeedbackCycleIcon1 from '../../images/feedback-cycle-icon-1.png';
import FeedbackCycleIcon2 from '../../images/feedback-cycle-icon-2.png';
import FeedbackCycleIcon3 from '../../images/feedback-cycle-icon-3.png';

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
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8">
            <h2 className="h2 mb-4">How it works</h2>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 md:mt-6" data-aos="fade-right">

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <button
                  className={`w-full text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-gray-400'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div className={`flex justify-center items-center shrink-0 mr-6`}>
                    <img src={FeedbackCycleIcon1} width={48} height={48} />
                  </div>
                  <div>
                    <div className="font-bold text-xl leading-snug tracking-tight mb-1">
                      1. Collect
                    </div>
                    <div className="text-gray-600">
                      Gather ideas and suggestions from your customers.
                    </div>
                  </div>
                </button>
                <button
                  className={`w-full text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-gray-400'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div className={`flex justify-center items-center shrink-0 mr-6`}>
                    <img src={FeedbackCycleIcon2} width={48} height={48} />
                  </div>
                  <div>
                    <div className="font-bold text-xl leading-snug tracking-tight mb-1">
                      2. Analyze
                    </div>
                    <div className="text-gray-600">
                      Organize and analyze feedback to decide what to build next.
                    </div>
                  </div>
                </button>
                <button
                  className={`w-full text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-gray-400'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div className={`flex justify-center items-center shrink-0 mr-6`}>
                    <img src={FeedbackCycleIcon3} width={48} height={48} />
                  </div>
                  <div>
                    <div className="font-bold text-xl leading-snug tracking-tight mb-1">
                      3. Share
                    </div>
                    <div className="text-gray-600">
                      Keep customers in the loop and let them know what you're working on.
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
                  <div className="w-full relative inline-flex flex-col cursor-pointer" onClick={(e) => { setTab(2); }}>
                    <img className="w-full mx-auto rounded-lg shadow-xl border" src={FeedbackCycleElement01} width="1200" height="661" alt="Astuto's form for submitting new feedback" />
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
                  <div className="w-full relative inline-flex flex-col cursor-pointer" onClick={(e) => { setTab(3); }}>
                  <img className="w-full mx-auto rounded-lg shadow-xl border" src={FeedbackCycleElement02} width="1200" height="778" alt="Astuto's filters for searching and organizing feedback" />
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
                  <div className="w-full relative inline-flex flex-col cursor-pointer" onClick={(e) => { setTab(1); }}>
                  <img className="w-full mx-auto rounded-lg shadow-xl border" src={FeedbackCycleElement03} width="1200" height="661" alt="Astuto's roadmap for letting users know what features you're working on" />
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
