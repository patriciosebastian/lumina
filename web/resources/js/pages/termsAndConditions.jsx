import Nav from '@/components/nav';
import HomeSiteFooter from '@/components/home/HomeSiteFooter';
import { SunRayIcon } from '@/components/home/HomeIcons';
import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function TermsAndConditions() {
    const route = useRoute();

    return (
        <div className="relative min-h-screen bg-bg text-ink font-book antialiased overflow-x-hidden">
            <Nav />

            <header className="pt-32 pb-14 relative z-[2]">
                <div className="max-w-[800px] mx-auto px-10 text-center">
                    <Link
                        href={route('home')}
                        className="inline-flex items-center gap-2 font-serif text-[20px] tracking-[0.04em] text-ink-2"
                    >
                        <span className="text-gold"><SunRayIcon size={18} /></span>
                        Lumina
                    </Link>
                    <h1 className="font-serif italic text-[44px] leading-[1.15] text-ink mt-8 mb-8">
                        Terms and Conditions
                    </h1>
                    <div className="flex items-center justify-center gap-[18px] text-gold">
                        <span className="flex-1 max-w-[120px] h-px bg-current opacity-55" />
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                            <circle cx="10" cy="6" r="1.6" fill="currentColor"/>
                            <path d="M10 6 L2 6"/><path d="M10 6 L18 6"/>
                        </svg>
                        <span className="flex-1 max-w-[120px] h-px bg-current opacity-55" />
                    </div>
                </div>
            </header>

            <div className="pb-28 relative z-[2]">
                <div className="max-w-[800px] mx-auto px-10">
                    <div className="lumina-prose">
                        <p>Last updated: May 07, 2026</p>
                        <p>Please read these terms and conditions carefully before using Our Service.</p>
                        <h2>Interpretation and Definitions</h2>
                        <h3>Interpretation</h3>
                        <p>
                            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following
                            definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                        </p>
                        <h3>Definitions</h3>
                        <p>For the purposes of these Terms and Conditions:</p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic
                                    device, named Lumina
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party,
                                    where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled
                                    to vote for election of directors or other managing authority.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Country</strong> refers to: Texas, United States
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                                    &quot;Our&quot; in this Agreement) refers to Lumina.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital
                                    tablet.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Service</strong> refers to the Application or the Website or both.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Service Provider</strong> means any natural or legal person who processes data or provides services on behalf of the Company. This includes third-party companies such as Stripe (for payment processing) and Plausible Analytics (for privacy-focused website analytics).
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Subscriptions</strong> refer to the services or access to the Service offered on a subscription basis by the
                                    Company to You.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form
                                    the entire agreement between You and the Company regarding the use of the Service.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Third-party Social Media Service</strong> means any services or content (including data, information,
                                    products or services) provided by a third-party that may be displayed, included or made available by the Service.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Website</strong> refers to Lumina AI , accessible from{' '}
                                    <a href="https://chatwithlumina.com/" rel="external nofollow noopener" target="_blank">
                                        https://chatwithlumina.com/
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on
                                    behalf of which such individual is accessing or using the Service, as applicable.
                                </p>
                            </li>
                        </ul>
                        <h2>Acknowledgment</h2>
                        <p>
                            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the
                            Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                        </p>
                        <p>
                            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions.
                            These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                        </p>
                        <p>
                            By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of
                            these Terms and Conditions then You may not access the Service.
                        </p>
                        <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                        <p>
                            However, if You are under the age of 18 but over the age of 13, You may use the Service only with the involvement and consent of a parent or legal guardian. We do not knowingly collect information from children under the age of 13 in compliance with the Children's Online Privacy Protection Act (COPPA).
                        </p>
                        <p>
                            Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the{' '}
                            <Link href={route('privacy-policy')} className="text-gold underline hover:text-gold-deep" target='_blank'>
                                Privacy Policy
                            </Link>{' '}
                            of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal
                            information when You use the Application or the Website and tells You about Your privacy rights and how the law protects
                            You. We are committed to privacy and use only essential cookies and privacy-focused analytics (Plausible Analytics) that does not track or identify individual users. Please read Our Privacy Policy carefully before using Our Service.
                        </p>
                        <h2>Subscriptions</h2>
                        <h3>Subscription period</h3>
                        <p>
                            The Service or some parts of the Service are available only with a paid Subscription. You will be billed in advance on a
                            recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the type of Subscription plan you
                            select when purchasing the Subscription.
                        </p>
                        <p>
                            At the end of each period, Your Subscription will automatically renew under the exact same conditions unless You cancel it
                            or the Company cancels it.
                        </p>
                        <h3>Subscription cancellations</h3>
                        <p>
                            You may cancel Your Subscription renewal either through Your Account settings page or by contacting the Company. You will
                            not receive a refund for the fees You already paid for Your current Subscription period and You will be able to access the
                            Service until the end of Your current Subscription period.
                        </p>
                        <h3>Billing</h3>
                        <p>
                            You shall provide the Company with accurate and complete billing information including full name, address, state, zip code,
                            telephone number, and a valid payment method information.
                        </p>
                        <p>
                            For web-based subscriptions, payment processing is handled by Stripe, our third-party payment processor. We do not store your payment card information on our servers. All payment data is handled securely by Stripe in accordance with their terms of service and privacy policy.
                        </p>
                        <p>
                            Should automatic billing fail to occur for any reason, the Company will issue an electronic invoice indicating that you must
                            proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on
                            the invoice.
                        </p>
                        <h3>Fee Changes</h3>
                        <p>
                            The Company, in its sole discretion and at any time, may modify the Subscription fees. Any Subscription fee change will
                            become effective at the end of the then-current Subscription period.
                        </p>
                        <p>
                            The Company will provide You with reasonable prior notice of any change in Subscription fees to give You an opportunity to
                            terminate Your Subscription before such change becomes effective.
                        </p>
                        <p>
                            Your continued use of the Service after the Subscription fee change comes into effect constitutes Your agreement to pay the
                            modified Subscription fee amount.
                        </p>
                        <h3>Refunds</h3>
                        <p>Except when required by law, paid Subscription fees are non-refundable.</p>
                        <p>
                            Certain refund requests for Subscriptions may be considered by the Company on a case-by-case basis and granted at the sole
                            discretion of the Company. If You wish to request a refund, please contact us at info@chatwithlumina.com.
                        </p>
                        <h3>Free Accounts</h3>
                        <p>
                            The Company offers free accounts that provide access to certain features of the Service without requiring payment or a Subscription. Free accounts may have limitations on features, usage, or access compared to paid Subscriptions.
                        </p>
                        <p>
                            You may upgrade from a free account to a paid Subscription at any time through Your Account settings or by contacting the Company. Upon upgrading, You will be charged the applicable Subscription fees for the type of Subscription You have selected.
                        </p>
                        <p>
                            At any time and without notice, the Company reserves the right to (i) modify the terms and conditions of free accounts, (ii) modify the features or limitations of free accounts, or (iii) discontinue offering free accounts.
                        </p>
                        <h2>User Accounts</h2>
                        <p>
                            When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times.
                            Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our
                            Service.
                        </p>
                        <p>
                            You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under
                            Your password, whether Your password is with Our Service or a Third-Party Social Media Service.
                        </p>
                        <p>
                            You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach
                            of security or unauthorized use of Your account.
                        </p>
                        <p>
                            You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or
                            trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a
                            name that is otherwise offensive, vulgar or obscene.
                        </p>
                        <h2>Privacy and Data Collection</h2>
                        <p>
                            We are committed to protecting your privacy. Our Service uses privacy-focused, cookieless analytics through Plausible Analytics, which collects only anonymous, aggregated data and does not track individual users. We use only essential cookies necessary for the operation and security of the Service.
                        </p>
                        <p>
                            We do not collect or store IP addresses, device identifiers, or other personally identifiable tracking data through our analytics. All data collected through Plausible Analytics is completely anonymous, aggregated, and cannot be used to identify individual users. Our analytics approach is fully compliant with GDPR, CCPA, and PECR.
                        </p>
                        <p>
                            For payment processing, we use Stripe, a third-party payment processor. Any payment information you provide is handled directly by Stripe and is subject to their terms and privacy policy. We do not store your payment card information on our servers.
                        </p>
                        <p>
                            For complete details about our data collection, use, and protection practices, please refer to our Privacy Policy.
                        </p>
                        <h2>Links to Other Websites</h2>
                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                        <p>
                            The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third
                            party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly
                            or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any
                            such content, goods or services available on or through any such web sites or services.
                        </p>
                        <p>
                            We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that
                            You visit.
                        </p>
                        <h2>Termination</h2>
                        <p>
                            We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever,
                            including without limitation if You breach these Terms and Conditions.
                        </p>
                        <p>
                            Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may
                            simply discontinue using the Service.
                        </p>
                        <h2>Limitation of Liability</h2>
                        <p>
                            Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any
                            provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by
                            You through the Service or 100 USD if You haven't purchased anything through the Service.
                        </p>
                        <p>
                            To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special,
                            incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss
                            of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way
                            related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the
                            Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised
                            of the possibility of such damages and even if the remedy fails of its essential purpose.
                        </p>
                        <p>
                            Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential
                            damages, which means that some of the above limitations may not apply. In these states, each party's liability will be
                            limited to the greatest extent permitted by law.
                        </p>
                        <h2>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
                        <p>
                            The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without
                            warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of
                            its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether
                            express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability,
                            fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course
                            of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or
                            undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended
                            results, be compatible or work with any other software, applications, systems or services, operate without interruption,
                            meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                        </p>
                        <p>
                            Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty
                            of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and
                            materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy,
                            reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers,
                            the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware,
                            timebombs or other harmful components.
                        </p>
                        <p>
                            Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights
                            of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the
                            exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable
                            law.
                        </p>
                        <h2>Governing Law</h2>
                        <p>
                            The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use
                            of the Application may also be subject to other local, state, national, or international laws.
                        </p>
                        <h2>Disputes Resolution</h2>
                        <p>
                            If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting
                            the Company.
                        </p>
                        <h2>For European Union (EU) Users</h2>
                        <p>
                            If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You
                            are resident.
                        </p>
                        <h2>United States Federal Government End Use Provisions</h2>
                        <p>
                            If You are a U.S. federal government end user, our Service is a &quot;Commercial Item&quot; as that term is defined at 48
                            C.F.R. §2.101.
                        </p>
                        <h2>United States Legal Compliance</h2>
                        <p>
                            You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo,
                            or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are
                            not listed on any United States government list of prohibited or restricted parties.
                        </p>
                        <h2>Severability and Waiver</h2>
                        <h3>Severability</h3>
                        <p>
                            If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to
                            accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining
                            provisions will continue in full force and effect.
                        </p>
                        <h3>Waiver</h3>
                        <p>
                            Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms
                            shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the
                            waiver of a breach constitute a waiver of any subsequent breach.
                        </p>
                        <h2>Translation Interpretation</h2>
                        <p>
                            These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the
                            original English text shall prevail in the case of a dispute.
                        </p>
                        <h2>Changes to These Terms and Conditions</h2>
                        <p>
                            We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We
                            will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
                            material change will be determined at Our sole discretion.
                        </p>
                        <p>
                            By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised
                            terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                        </p>
                        <h2>Contact Us</h2>
                        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                        <ul>
                            <li>By email: info@chatwithlumina.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <HomeSiteFooter />
        </div>
    );
}
