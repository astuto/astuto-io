import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Credits() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="h1 mb-4">Credits</h1>
                <ul>
                  <li><strong>Logo</strong>: <a href="https://www.flaticon.com/free-icons/fox" title="fox icons">Fox icons created by Freepik - Flaticon</a></li>
                  <li><strong>Feedback icon</strong>: <a href="https://www.flaticon.com/free-icons/feedback" title="feedback icons">Feedback icons created by Freepik - Flaticon</a></li>
                  <li><strong>Magnifying glass icon</strong>: <a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icons created by Freepik - Flaticon</a></li>
                  <li><strong>Share icon: </strong> <a href="https://www.flaticon.com/free-icons/instagram-share" title="instagram share icons">Instagram share icons created by Freepik - Flaticon</a></li>
                  <li><strong>Feedback feature icon</strong>: <a href="https://www.flaticon.com/free-icons/testimonial" title="testimonial icons">Testimonial icons created by Freepik - Flaticon</a></li>
                  <li><strong>Roadmap feature icon</strong>: <a href="https://www.flaticon.com/free-icons/parrot" title="parrot icons">Parrot icons created by Freepik - Flaticon</a></li>
                  <li><strong>Login feature icon</strong>: <a href="https://www.flaticon.com/free-icons/login" title="login icons">Login icons created by Freepik - Flaticon</a></li>
                  <li><strong>Appearance feature icon</strong>: <a href="https://www.flaticon.com/free-icons/art-deco" title="art decó icons">Art decó icons created by Freepik - Flaticon</a></li>
                  <li><strong>Languages feature icon</strong>: <a href="https://www.flaticon.com/free-icons/linguistics" title="linguistics icons">Linguistics icons created by Freepik - Flaticon</a></li>
                  <li><strong>Notify feature icon</strong>: <a href="https://www.flaticon.com/free-icons/megaphone" title="megaphone icons">Megaphone icons created by Freepik - Flaticon</a></li>
                </ul>
                <div className="mt-8">
                  <Link to="/" className="btn btn-primary">Go back home</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Credits;