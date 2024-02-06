import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeedbackCycleHome from '../partials/custom/FeedbackCycleHome';
import PricingTables from '../partials/PricingTables';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import FeaturesBlocks from '../partials/FeaturesBlocks';

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

        <FeaturesBlocks />

        {/* <PricingTables /> */}

        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;