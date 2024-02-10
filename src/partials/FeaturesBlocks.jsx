import React from 'react';

import FeatureFeedbackImage from '../images/feature-feedback-128.png';
import FeatureRoadmapImage from '../images/feature-roadmap-128.png';
import FeatureLoginImage from '../images/feature-login-128.png';
import FeatureAppearanceImage from '../images/feature-appearance-128.png';
import FeatureI18NImage from '../images/feature-i18n-128.png';
import FeatureNotifyImage from '../images/feature-notify-128.png';

function FeaturesBlocks() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8">
            <h2 className="h2 mb-4">Features</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg">
              <img src={FeatureFeedbackImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Feedback</h4>
              <p className="text-gray-600 text-center">Collect feedback. Organize feedback with custom boards and statuses.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg">
              <img src={FeatureRoadmapImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Roadmap</h4>
              <p className="text-gray-600 text-center">Show your customers what you're working on.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg">
              <img src={FeatureLoginImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Simple Sign In</h4>
              <p className="text-gray-600 text-center">Sign in with email or any custom OAuth provider (Google, Facebook, etc).</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg">
              <img src={FeatureAppearanceImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Brand</h4>
              <p className="text-gray-600 text-center">Represent your brand with complete customization of style and appearance.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg">
              <img src={FeatureI18NImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Languages</h4>
              <p className="text-gray-600 text-center">English, Spanish, French, German, Italian, and <a href="https://crowdin.com/project/astuto" className="underline">more</a>.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg">
              <img src={FeatureNotifyImage} width={56} height={56} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Notify</h4>
              <p className="text-gray-600 text-center">Notify interested customers via email on updates.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;