import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeedbackCycleHome from '../partials/FeedbackCycleHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesWorld from '../partials/FeaturesWorld';
import News from '../partials/News';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

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
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;