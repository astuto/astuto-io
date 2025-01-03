import React from 'react';

import FeatureRoadmapImage from '../images/feature-roadmap-128.png';
import FeatureLoginImage from '../images/feature-login-128.png';
import FeatureAnonymousImage from '../images/feature-anonymous-128.png';

import FeatureIntegrationsImage from '../images/feature-integrations-128.png';
import FeatureApiImage from '../images/feature-api-128.png';
import FeatureModerationImage from '../images/feature-moderation-128.png';

import FeatureI18NImage from '../images/feature-i18n-128.png';
import FeatureAppearanceImage from '../images/feature-appearance-128.png';
import FeatureMoreImage from '../images/feature-more-128.png';

function FeaturesBlocks() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8">
            <h2 className="h2 mb-4" data-aos="zoom-y-out">
              Features
            </h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg" data-aos="zoom-y-out">
              <img src={FeatureRoadmapImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Roadmap</h4>
              <p className="text-gray-600 text-center">Show customers what you're working on.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg" data-aos="zoom-y-out">
              <img src={FeatureLoginImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Simple Sign In</h4>
              <p className="text-gray-600 text-center">Sign in with email or any custom OAuth provider (Google, Facebook, etc).</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg" data-aos="zoom-y-out">
              <img src={FeatureAnonymousImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Anonymous Feedback</h4>
              <p className="text-gray-600 text-center">Allow unregistered users to post feedback, removing login friction.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg" data-aos="zoom-y-out">
              <img src={FeatureIntegrationsImage} width={56} height={56} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Integrations</h4>
              <p className="text-gray-600 text-center">Use webhooks to integrate Astuto with your other tools (Jira, Trello, Slack, etc.)</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg" data-aos="zoom-y-out">
              <img src={FeatureApiImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">API</h4>
              <p className="text-gray-600 text-center">Programmatically manage your feedback space with our REST API.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg" data-aos="zoom-y-out">
              <img src={FeatureModerationImage} width={56} height={56} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Moderation</h4>
              <p className="text-gray-600 text-center">Approve or reject received feedback before displaying it publicly.</p>
            </div>

            {/* 7th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg" data-aos="zoom-y-out">
              <img src={FeatureI18NImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Languages</h4>
              <p className="text-gray-600 text-center">English, Spanish, French, German, Italian, Chinese and <abbr title="Astuto also supports: Portoguese, Russian and Vietnamese" style={{cursor: 'help'}}>more</abbr>.</p>
            </div>

            {/* 8th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg" data-aos="zoom-y-out">
              <img src={FeatureAppearanceImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">Brand</h4>
              <p className="text-gray-600 text-center">Represent your brand with complete customization of style and appearance.</p>
            </div>

            {/* 9th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border shadow-lg" data-aos="zoom-y-out">
              <img src={FeatureMoreImage} width={56} height={56} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-4 mb-1">... and more!</h4>
              <p className="text-gray-600 text-center">Invitation system, private feedback space option, and more!</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;