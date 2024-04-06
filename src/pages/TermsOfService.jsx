import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <section className="relative">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-gray-800">
                <h1 className="h1 mb-8 text-center text-black">
                  Terms of Service
                </h1>

                <p className="mb-4">
                  Please read these Terms of Service ('Terms', 'Terms of Service') carefully before using the <a className="underline" href="https://astuto.io">https://astuto.io</a> website (the 'Service') operated by Astuto of Graziosi Riccardo ('Astuto', 'us', 'we', or 'our').
                </p>

                <p className="mb-4">
                  Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                </p>

                <p className="mb-4">
                  By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                </p>

                {/*  Subsection: Subscriptions */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Subscriptions
                </h4>

                <p className="mb-4">
                  Some parts of the Service are billed on a subscription basis ('Subscription(s)'). You will be billed in advance on a recurring and periodic basis ('Billing Cycle'). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </p>

                <p className="mb-4">
                  At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or we cancel it. You may cancel your Subscription renewal either through your online account management page or by contacting our customer support team.
                </p>

                <p className="mb-4">
                  A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide us with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize us to charge all Subscription fees incurred through your account to any such payment instruments.
                </p>

                <p className="mb-4">
                  Should automatic billing fail to occur for any reason, we will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
                </p>

                {/*  Subsection: Fee Changes */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Fee Changes
                </h4>

                <p className="mb-4">
                  Astuto, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
                </p>

                <p className="mb-4">
                  Astuto will provide you with reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
                </p>

                <p className="mb-4">
                  Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
                </p>

                {/*  Subsection: Accounts */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Accounts
                </h4>

                <p className="mb-4">
                  When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </p>

                <p className="mb-4">
                  You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                </p>

                <p className="mb-4">
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>

                {/* Subsection: Links To Other Web Sites */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Links To Other Web Sites
                </h4>

                <p className="mb-4">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by us.
                </p>

                <p className="mb-4">
                  Astuto has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Astuto shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>

                <p className="mb-4">
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
                </p>

                {/*  Subsection: Termination */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Termination
                </h4>

                <p className="mb-4">
                  We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>

                <p className="mb-4">
                  Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                </p>

                {/* Subsection: Limitation Of Liability */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Limitation Of Liability
                </h4>

                <p className="mb-4">
                  In no event shall Astuto, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                </p>

                {/*  Subsection: Disclaimer */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Disclaimer
                </h4>

                <p className="mb-4">
                  Your use of the Service is at your sole risk. The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                </p>

                <p className="mb-4">
                  Astuto its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
                </p>

                {/* Subsection: Governing Law */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Governing Law
                </h4>

                <p className="mb-4">
                  These Terms shall be governed and construed in accordance with the laws of Italy, without regard to its conflict of law provisions.
                </p>

                <p className="mb-4">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                </p>

                {/* Subsection: Changes */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Changes
                </h4>

                <p className="mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>

                <p className="mb-4">
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                </p>

                {/* Subsection: Contact Us */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Contact Us
                </h4>

                <p className="mb-4">
                  If you have any questions about these Terms, please <a className="underline" href="mailto:info@astuto.io">contact us</a>.
                </p>

                <p className="mt-8 mb-4 italic">
                  This version of the Terms of Service took effect April 6, 2024.
                </p>

                <div className="mt-8 text-center">
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

export default TermsOfService;