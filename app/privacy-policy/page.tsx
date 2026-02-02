"use client";

import { useEffect, useState } from "react";
import PageHero from "@/components/ui/PageHero";

const sections = [
  { id: "interpretation", label: "1. Interpretation & Definitions" },
  { id: "collecting", label: "2. Collecting & Using Your Personal Data" },
  { id: "personal-data", label: "3. Types of Data Collected" },
  { id: "use-of-data", label: "4. Use of Your Personal Data" },
  { id: "cookies", label: "5. Tracking Technologies & Cookies" },
  { id: "retention", label: "6. Retention of Your Personal Data" },
  { id: "transfer", label: "7. Transfer of Your Personal Data" },
  { id: "disclosure", label: "8. Disclosure of Your Personal Data" },
  { id: "security", label: "9. Security of Your Personal Data" },
  { id: "children", label: "10. Children's Privacy" },
  { id: "links", label: "11. Links to Other Websites" },
  { id: "changes", label: "12. Changes to This Privacy Policy" },
  { id: "contact", label: "13. Contact Us" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("interpretation");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-20% 0px -50% 0px", 
        threshold: 0.1 
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <PageHero 
        title="Privacy Policy" 
        subtitle="Last updated: March 7, 2026"
        backgroundImage="/images/hero_bg.png"
      />

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        {/* Sidebar - Sticky Table of Contents */}
        <aside className="lg:w-1/4 hidden lg:block">
          <div className="sticky top-28">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-text-light mb-6">Contents</h5>
            <div className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-2 border-l-2 border-gray-100">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-sm font-medium pl-4 py-1.5 border-l-2 -ml-[2px] transition-all block text-left w-full hover:text-brand-orange ${
                        activeSection === section.id
                          ? "border-brand-orange text-brand-orange bg-brand-orange/5 rounded-r-lg"
                          : "border-transparent text-text-muted hover:border-brand-orange/30"
                      }`}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:w-3/4 max-w-4xl prose prose-slate prose-headings: prose-headings:text-brand-purple prose-a:text-brand-orange prose-strong:text-brand-purple">
          <p className="text-sm text-text-muted">Updated March 7, 2026</p>
          <p className="text-text-secondary">
            This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p className="text-text-secondary">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <section id="interpretation" className="scroll-mt-32">
            <h2>1. Interpretation & Definitions</h2>
            <h3>Interpretation</h3>
            <p>The words in which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.</p>
            
            <h3>Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
              <li><strong>Company</strong> (referred to as either "Jaya Travel", "the Company", "We", "Us" or "Our" in this Agreement) refers to Jaya Travel & Tours, 24701 Swanson Rd, Southfield, MI 48033.</li>
              <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
              <li><strong>Country</strong> refers to Michigan, United States.</li>
              <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.</li>
              <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
              <li><strong>Website</strong> refers to Jaya Travel, accessible from jayatravel.com.</li>
              <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </section>

          <section id="collecting" className="scroll-mt-32">
             <h2>2. Collecting and Using Your Personal Data</h2>
          </section>

          <section id="personal-data" className="scroll-mt-32">
             <h2>3. Types of Data Collected</h2>
             
             <h3>Personal Data</h3>
             <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
             <ul className="list-disc pl-5 space-y-1">
               <li>Email address</li>
               <li>First name and last name</li>
               <li>Phone number</li>
               <li>Address, State, Province, ZIP/Postal code, City</li>
               <li>Usage Data</li>
             </ul>

             <h3>Usage Data</h3>
             <p>Usage Data is collected automatically when using the Service.</p>
             <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
             <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
             <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
          </section>

          <section id="use-of-data" className="scroll-mt-32">
             <h2>4. Use of Your Personal Data</h2>
             <p>The Company may use Personal Data for the following purposes:</p>
             <ul className="space-y-3">
               <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
               <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
               <li><strong>For the performance of a contract:</strong> the development, compliance, and undertaking of the purchase contract for the products, items, or services You have purchased or of any other contract with Us through the Service.</li>
               <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products, or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
               <li><strong>To provide You</strong> with news, special offers, and general information about other goods, services, and events that we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
               <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
               <li><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
               <li><strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Service, products, services, marketing, and your experience.</li>
             </ul>
             
             <p className="mt-4">We may share Your personal information in the following situations:</p>
             <ul className="list-disc pl-5 space-y-2">
               <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service to contact You.</li>
               <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
               <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners, or other companies that We control or that are under common control with Us.</li>
               <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services, or promotions.</li>
               <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
               <li><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
             </ul>
          </section>

          <section id="cookies" className="scroll-mt-32">
             <h2>5. Tracking Technologies & Cookies</h2>
             <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. For more information about the cookies we use and your choices regarding cookies, please visit the Cookies section of our Privacy Policy.</p>
          </section>

          <section id="retention" className="scroll-mt-32">
             <h2>6. Retention of Your Personal Data</h2>
             <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
             <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
          </section>

          <section id="transfer" className="scroll-mt-32">
             <h2>7. Transfer of Your Personal Data</h2>
             <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of Your jurisdiction.</p>
             <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
             <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
          </section>

          <section id="disclosure" className="scroll-mt-32">
             <h2>8. Disclosure of Your Personal Data</h2>
             <h3>Business Transactions</h3>
             <p>If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
             <h3>Law Enforcement</h3>
             <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
             <h3>Other Legal Requirements</h3>
             <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
             <ul className="list-disc pl-5 space-y-1">
               <li>Comply with a legal obligation</li>
               <li>Protect and defend the rights or property of the Company</li>
               <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
               <li>Protect the personal safety of Users of the Service or the public</li>
               <li>Protect against legal liability</li>
             </ul>
          </section>

          <section id="security" className="scroll-mt-32">
             <h2>9. Security of Your Personal Data</h2>
             <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
          </section>

          <section id="children" className="scroll-mt-32">
             <h2>10. Children's Privacy</h2>
             <p>Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us at <a href="mailto:letsgo@jayatravel.com">letsgo@jayatravel.com</a>. If We become aware that We have collected Personal Data from anyone under the age of 16 without verification of parental consent, We take steps to remove that information from Our servers.</p>
             <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
          </section>

          <section id="links" className="scroll-mt-32">
             <h2>11. Links to Other Websites</h2>
             <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third-party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
             <p>We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
          </section>

          <section id="changes" className="scroll-mt-32">
             <h2>12. Changes to This Privacy Policy</h2>
             <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
             <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Updated" date at the top of this Privacy Policy.</p>
          </section>

          <section id="contact" className="scroll-mt-32">
             <h2>13. Contacting Jaya Travel & Tours</h2>
             <p>If you have any questions about our terms of use, privacy policy, or how we use cookies and other tracking technologies, please contact us at: <a href="mailto:letsgo@jayatravel.com">letsgo@jayatravel.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
