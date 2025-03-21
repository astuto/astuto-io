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

                <h3 className="h3 mt-8">Sponsors</h3>
                <p className="mb-4">This project was made possible thanks to the support of the following sponsors and customers:</p>
                <ul>
                  <li><strong>Arjun Sundararajan</strong></li>
                  <li><strong>Stéphane Magnenat</strong></li>
                  <li><strong>Marco Graziosi</strong></li>
                </ul>

                <br />

                <h3 className="h3 mt-8">Images</h3>
                <ul>
                  <li><strong>Logo</strong>: <a href="https://www.flaticon.com/free-icons/fox" title="fox icons">Fox icons created by Freepik - Flaticon</a></li>
                  <li><strong>Feedback icon</strong>: <a href="https://www.flaticon.com/free-icons/feedback" title="feedback icons">Feedback icons created by Freepik - Flaticon</a></li>
                  <li><strong>Magnifying glass icon</strong>: <a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icons created by Freepik - Flaticon</a></li>
                  <li><strong>Share icon: </strong> <a href="https://www.flaticon.com/free-icons/instagram-share" title="instagram share icons">Instagram share icons created by Freepik - Flaticon</a></li>
                  <li><strong>Roadmap feature icon</strong>: <a href="https://www.flaticon.com/free-icons/parrot" title="parrot icons">Parrot icons created by Freepik - Flaticon</a></li>
                  <li><strong>Login feature icon</strong>: <a href="https://www.flaticon.com/free-icons/login" title="login icons">Login icons created by Freepik - Flaticon</a></li>
                  <li><strong>Anonymous icon</strong>: <a href="https://www.flaticon.com/free-icons/incognito" title="incognito icons">Incognito icons created by Freepik - Flaticon</a></li>
                  <li><strong>Moderation feature icon</strong>: <a href="https://www.flaticon.com/free-icons/bad" title="bad icons">Bad icons created by Freepik - Flaticon</a></li>
                  <li><strong>Appearance feature icon</strong>: <a href="https://www.flaticon.com/free-icons/art-deco" title="art decó icons">Art decó icons created by Freepik - Flaticon</a></li>
                  <li><strong>Languages feature icon</strong>: <a href="https://www.flaticon.com/free-icons/linguistics" title="linguistics icons">Linguistics icons created by Freepik - Flaticon</a></li>
                  <li><strong>Integrations feature icon</strong>: <a href="https://www.flaticon.com/free-icons/strategy" title="strategy icons">Strategy icons created by Freepik - Flaticon</a></li>
                  <li><strong>API feature icon</strong>: <a href="https://www.flaticon.com/free-icons/api" title="api icons">Api icons created by Freepik - Flaticon</a></li>
                  <li><strong>More feature icon</strong>: <a href="https://www.flaticon.com/free-icons/more" title="more icons">More icons created by Freepik - Flaticon</a></li>
                  <li><strong>Error 404 icon</strong>: <a href="https://www.flaticon.com/free-icons/sad" title="sad icons">Sad icons created by Freepik - Flaticon</a></li>
                  <li><strong>Error 422 icon</strong>: <a href="https://www.flaticon.com/free-icons/rejection" title="rejection icons">Rejection icons created by Freepik - Flaticon</a></li>
                  <li><strong>Error 500 icon</strong>: <a href="https://www.flaticon.com/free-icons/broken-cable" title="broken cable icons">Broken cable icons created by Freepik - Flaticon</a></li>
                  <li><strong>Feedback space created icon</strong>: <a href="https://www.flaticon.com/free-icons/check" title="check icons">Check icons created by Freepik - Flaticon</a></li>
                  <li><strong>Pending tenant icon</strong>: <a href="https://www.flaticon.com/free-icons/pending" title="pending icons">Pending icons created by Freepik - Flaticon</a></li>
                  <li><strong>Maintenance icon</strong>: <a href="https://www.flaticon.com/free-icons/maintenance" title="maintenance icons">Maintenance icons created by Freepik - Flaticon</a></li>
                </ul>
                <div className="mt-8">
                  <Link to="/" className="btn btn-primary">Go back to home page</Link>
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