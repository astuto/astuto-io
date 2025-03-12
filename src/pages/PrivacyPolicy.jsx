import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function PrivacyPolicy() {
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
                  Privacy Policy
                </h1>

                <p className="mb-4">
                  Astuto of Graziosi Riccardo ('Astuto', 'we', 'us' and/or 'our') operates the <a href="https://astuto.io" className="underline">https://astuto.io</a> website (the 'Service').
                </p>

                {/*  Subsection: Scope */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Scope
                </h4>

                <p className="mb-4">
                  This Privacy Policy covers Astuto's treatment of personal data ('Personal Data') that we gather when you access or otherwise use the Service. It explains what data we collect, why we collect the data, how it is used and your rights and choices.
                </p>

                <p className="mb-4">
                  While providing our Service, we may collect information about our customers' users on behalf of our customers. Our use of this information is governed by our agreement with the applicable customer and the customer's own privacy policies. We do not control and are not responsible for the privacy policies or privacy practices of our customers or any other third parties.
                </p>

                {/*  Subsection: Personal Identification Information */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Personal Identification Information
                </h4>

                <p className="mb-4">
                  We may collect and use personal identification information that Users provide to us, including, but not limited to, when you register on the Service, submit a post, leave a comment, and in connection with other activities, services, features or resources we make available on our Service. Users may be asked for, as appropriate, name and email address. You may refuse to supply this information; however, refusal may prevent you from engaging in certain activities.
                </p>

                <p className="mb-4">
                  WE WILL NOT, UNDER ANY CIRCUMSTANCES, SELL, RENT, LEASE, SHARE OR GIVE YOUR PERSONAL INFORMATION TO ANY THIRD PARTY FOR PURPOSES OF SPAMMING YOU, OR FOR ANY OTHER THIRD-PARTY ADVERTISING, MARKETING OR PROMOTION.
                </p>

                {/*  Subsection: How we use the collected information */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  How we use the collected information
                </h4>

                <p className="mb-4">
                  Astuto may collect and use Users' personal information for the following purposes:

                  <ul className="list-disc">
                    <li className="ml-8 my-4">to provide, operate, and maintain our Service;</li>
                    <li className="ml-8 my-4">to improve, personalize, and expand our Service;</li>
                    <li className="ml-8 my-4">to understand and analyze how you use our Service;</li>
                    <li className="ml-8 my-4">for billing purposes, if you have subscribed to one of our paid plans;</li>
                    <li className="ml-8 my-4">for compliance purposes, including enforcing our Terms of Service, or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency.</li>
                  </ul>
                </p>

                {/*  Subsection: Security */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Security
                </h4>

                <p className="mb-4">
                  We are committed to protecting your information. To do so, we employ a variety of security technologies and measures designed to protect information from unauthorized access, use, or disclosure. The measures we use are designed to provide a level of security appropriate to the risk of processing your personal information. However, please bear in mind that the Internet cannot be guaranteed to be 100% secure.
                </p>

                {/*  Subsection: Data Retention */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Data Retention
                </h4>

                <p className="mb-4">
                  We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a service you have requested or to comply with applicable legal, tax, or accounting requirements).
                </p>

                <p className="mb-4">
                  You can, at any time, delete your user account through the 'Profile settings' menu option. In particular, the steps to delete your user account are the following: (1) click over your name or profile picture on the top-right, (2) click 'Profile settings', (3) find the 'Cancel account' button and click it. After deleting your account, all your personal information will be removed and the content you have published will be anonymized. You will no longer be able to access your account.
                </p>

                <p className="mb-4">
                  If you own an Astuto feedback space, you can, at any time, write an email at <a href="mailto:info@astuto.io">info@astuto.io</a> requesting the deletion of the feedback space. You must write the email from the email address of the owner of the feedback space, so we can trust your request. After receiving your request and confirming you are actually the owner of the feedback space, we will proceed to delete all data of the feedback space (posts, comments, users, etc.) forever. Please note that you will no longer be able to access your feedback space and your data cannot be recovered.
                </p>

                <p className="mb-4">
                  When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </p>

                {/*  Subsection: Service Providers */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Service Providers
                </h4>

                <p className="mb-4">
                  We may employ third party companies and individuals to facilitate our Service ('Service Providers'), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                </p>

                <p className="mb-4">
                  These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose:
                </p>

                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2">Name</th>
                      <th className="border border-gray-300 p-2">Purpose</th>
                      <th className="border border-gray-300 p-2">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Stripe</td>
                      <td className="border border-gray-300 p-2">Subscription and payment processing; Credit card information are never stored on our Service;</td>
                      <td className="border border-gray-300 p-2"><a href="https://stripe.com/privacy" className="underline">Stripe Privacy Policy</a></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">GoatCounter</td>
                      <td className="border border-gray-300 p-2">Anonymous collection of data for traffic analytics purposes (only on astuto.io, not subdomains)</td>
                      <td className="border border-gray-300 p-2"><a href="https://www.goatcounter.com/help/privacy" className="underline">GoatCounter Privacy Policy</a></td>
                    </tr>
                  </tbody>
                </table>

                {/*  Subsection: Cookies */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Cookies
                </h4>

                <p className="mb-4">
                  Cookies are small text files which are transferred to your browser from a website and stored on your device. We use browser cookies and similar technologies to recognize you when you return to our Service.
                </p>

                <p className="mb-4">
                  We don't track you across the Internet. We only track your interactions within our network (which encompasses astuto.io and custom domains hosted by us).
                </p>

                {/*  Subsection: IP Addresses */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  IP Addresses
                </h4>

                <p className="mb-4">
                  We may temporarily collect and store the IP addresses of individuals who access our service for security purposes. These IP addresses are not used to identify any individual, but we reserve the right to use this information to block or track malicious users that undermine the security and integrity of our service.
                </p>

                {/*  Subsection: Links to other websites */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Links to other websites
                </h4>

                <p className="mb-4">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by us.
                </p>

                <p className="mb-4">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by us.
                </p>

                <p className="mb-4">
                  Astuto has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Astuto shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>

                <p className="mb-4">
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
                </p>

                {/*  Subsection: Children's Privacy */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Children's Privacy
                </h4>

                <p className="mb-4">
                  Our Service does not address anyone under the age of 16 ('Children').
                </p>

                <p className="mb-4">
                  We do not knowingly collect personally identifiable information from anyone under the age of 16. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                </p>

                {/*  Subsection: Your acceptance of these terms */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Your acceptance of these terms
                </h4>

                <p className="mb-4">
                  By using this Service, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Service. Your continued use of the Service following the posting of changes to this policy will be deemed your acceptance of those changes.
                </p>

                {/*  Subsection: Changes to this privacy policy */}
                <h4 className="h4 mt-8 mb-4 text-black">
                  Changes to this privacy policy
                </h4>

                <p className="mb-4">
                  We reserve the right, at our sole discretion, to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to occasionally check this page. We may change how it announces changes in future versions.
                </p>                

                <p className="mt-8 mb-4 italic">
                  This version of the Privacy Policy took effect May 15, 2024.
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

export default PrivacyPolicy;