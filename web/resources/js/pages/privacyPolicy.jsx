import Nav from '@/components/nav';
import HomeSiteFooter from '@/components/home/HomeSiteFooter';
import { SunRayIcon } from '@/components/home/HomeIcons';
import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function PrivacyPolicy() {
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
                        Privacy Policy
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
                        <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                        <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.</p>
                        <h2>Interpretation and Definitions</h2>
                        <h3>Interpretation</h3>
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                        <h3>Definitions</h3>
                        <p>For the purposes of this Privacy Policy:</p>
                        <ul>
                        <li>
                        <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                        </li>
                        <li>
                        <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                        </li>
                        <li>
                        <p><strong>Application</strong> refers to Lumina, the software program provided by the Company.</p>
                        </li>
                        <li>
                        <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Lumina.</p>
                        </li>
                        <li>
                        <p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                        </li>
                        <li>
                        <p><strong>Country</strong> refers to: Texas,  United States</p>
                        </li>
                        <li>
                        <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                        </li>
                        <li>
                        <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                        </li>
                        <li>
                        <p><strong>Service</strong> refers to the Application or the Website or both.</p>
                        </li>
                        <li>
                        <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                        </li>
                        <li>
                        <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                        </li>
                        <li>
                        <p><strong>Website</strong> refers to Lumina AI , accessible from <a href="https://chatwithlumina.com/" rel="external nofollow noopener" target="_blank">https://chatwithlumina.com/</a></p>
                        </li>
                        <li>
                        <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                        </li>
                        </ul>
                        <h2>Collecting and Using Your Personal Data</h2>
                        <h3>Types of Data Collected</h3>
                        <h4>Personal Data</h4>
                        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                        <ul>
                        <li>
                        <p>Email address</p>
                        </li>
                        <li>
                        <p>First name and last name</p>
                        </li>
                        <li>
                        <p>Phone number</p>
                        </li>
                        <li>
                        <p>Address, State, Province, ZIP/Postal code, City</p>
                        </li>
                        <li>
                        <p>Usage Data</p>
                        </li>
                        </ul>
                        <h4>Usage Data</h4>
                        <p>We collect minimal usage data automatically when you use the Service through Plausible Analytics, our privacy-focused analytics provider.</p>
                        <p>This data is completely anonymous and aggregated. We do not collect or store any personally identifiable information such as IP addresses, device identifiers, or other tracking data. Plausible does not use cookies and all collected data cannot be used to identify individual users.</p>
                        <p>The anonymous usage data helps us understand general website traffic patterns and improve our Service while fully respecting your privacy.</p>
                        <h4>Cookies and Analytics</h4>
                        <p>We use only essential cookies necessary for the operation and security of our Service. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</p>
                        <p>We use the following types of cookies:</p>
                        <ul>
                        <li>
                        <p><strong>Necessary / Essential Cookies</strong></p>
                        <p>Type: Session and Persistent Cookies</p>
                        <p>Administered by: Us</p>
                        <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users, maintain your session, and protect against security threats such as cross-site request forgery. Without these Cookies, the services that You have asked for cannot be provided.</p>
                        </li>
                        </ul>
                        <h4>Privacy-Focused Analytics</h4>
                        <p>We use Plausible Analytics, a privacy-focused, cookieless analytics service, to understand how visitors use our Service. Plausible does not use cookies, does not collect personal data, and is fully compliant with GDPR, CCPA, and PECR. All data collected is aggregated and anonymous. For more information, visit <a href="https://plausible.io/privacy-focused-web-analytics" target="_blank">Plausible Analytics</a>.</p>
                        <h3>Use of Your Personal Data</h3>
                        <p>The Company may use Personal Data for the following purposes:</p>
                        <ul>
                        <li>
                        <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
                        </li>
                        <li>
                        <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                        </li>
                        <li>
                        <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                        </li>
                        <li>
                        <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                        </li>
                        <li>
                        <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
                        </li>
                        <li>
                        <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                        </li>
                        <li>
                        <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                        </li>
                        <li>
                        <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                        </li>
                        </ul>
                        <p>We may share Your personal information in the following situations:</p>
                        <ul>
                        <li><strong>With Service Providers:</strong> We use third-party service providers to help us operate and improve our Service. For analytics, we use Plausible Analytics, which only receives anonymous, aggregated data and does not collect or store any personal information. We may share personal information with other service providers only as necessary to provide our Service (such as payment processing through Stripe).</li>
                        <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                        <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                        <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                        <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                        <li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
                        </ul>
                        <h3>Retention of Your Personal Data</h3>
                        <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                        <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                        <h3>Transfer of Your Personal Data</h3>
                        <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                        <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                        <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                        <h3>Delete Your Personal Data</h3>
                        <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                        <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
                        <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
                        <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
                        <h3>Disclosure of Your Personal Data</h3>
                        <h4>Business Transactions</h4>
                        <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                        <h4>Law enforcement</h4>
                        <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                        <h4>Other legal requirements</h4>
                        <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                        <ul>
                        <li>Comply with a legal obligation</li>
                        <li>Protect and defend the rights or property of the Company</li>
                        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>Protect the personal safety of Users of the Service or the public</li>
                        <li>Protect against legal liability</li>
                        </ul>
                        <h3>Security of Your Personal Data</h3>
                        <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                        <h2>Children's Privacy</h2>
                        <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                        <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
                        <h2>Links to Other Websites</h2>
                        <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                        <h2>Changes to this Privacy Policy</h2>
                        <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                        <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
                        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                        <h2>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
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
