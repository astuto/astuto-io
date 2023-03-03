import React from 'react';

import FeatureExplanationHome from '../../partials/custom/FeatureExplanationHome';

import FeatureExplanationHome1 from '../../images/feature-explanation-home-1.png';
import FeatureExplanationHome2 from '../../images/feature-explanation-home-2.png';
import FeatureExplanationHome3 from '../../images/feature-explanation-home-3.png';

function FeaturesHome() {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center pt-24 md:pt-16 pb-12 md:pb-8">
        <h1 className="h2 mt-4 mb-4"><mark>Features</mark></h1>
      </div>

      <FeatureExplanationHome
        title='Collect feedback from your users'
        description='It is very easy for your users to post feedback on your board. They can log in with their email or you can set up any OAuth provider you want. Anonymous voting coming soon!'
        image={FeatureExplanationHome1}
        invert
        isFirst
      />

      <FeatureExplanationHome
        title='Share updates with your users'
        description="Publish post updates to let users know what you're working on."
        image={FeatureExplanationHome2}
      />

      <FeatureExplanationHome
        title='Customize to fit your needs'
        description="Customize boards, statuses and everything else to match your organization structure."
        image={FeatureExplanationHome3}
        invert
      />
    </>
  );
}

export default FeaturesHome;