import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeedbackCycleHome from '../partials/custom/FeedbackCycleHome';
import FeatureExplanationHome from '../partials/custom/FeatureExplanationHome';
import PricingTables from '../partials/PricingTables';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

import FeatureExplanationHome1 from '../images/feature-explanation-home-1.png';
import FeatureExplanationHome2 from '../images/feature-explanation-home-2.png';
import FeatureExplanationHome3 from '../images/feature-explanation-home-3.png';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <HeroHome />

        <FeedbackCycleHome />

        <FeatureExplanationHome
          title='Collect feedback from your users'
          description='It is very easy for your users to post feedback on your board. They can log in with their email or you can set up any OAuth provider you want. Anonymous voting coming soon!'
          image={FeatureExplanationHome1}
          invert
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

        <PricingTables />

        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;