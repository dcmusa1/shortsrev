import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white font-sans">
      {/* Navigation */}
      <SiteHeader />

      {/* Main Content */}
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-4">
              <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-zinc-400 md:text-xl">Last Updated: 31 March 2025</p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl prose prose-invert">
              <p>
                References in this Policy to "Shorts Rev," "we," "our," or "us" refer to Shorts Rev LLC, and references
                to "you," "your," "customer," or "user" refer to the individual using our web services and applications
                (the "Platform").
              </p>

              <p>The Platform includes:</p>
              <ul>
                <li>shortsrev.com (including all subdomains and APIs)</li>
                <li>
                  Any related websites, applications, or services developed before or after the date of this Privacy
                  Policy
                </li>
              </ul>

              <p>
                This Privacy Policy explains how your personal data is collected and processed when you use the
                Platform. If you have any questions, please contact us at:
                <Link href="mailto:legal@shortsrev.com" className="text-red-400 hover:text-red-300 mx-1">
                  legal@shortsrev.com
                </Link>
                .
              </p>

              <p>
                We may update this Privacy Policy periodically. If changes are made, we will revise the date at the top
                of this policy. If necessary, we may provide additional notice or request renewed consent.
              </p>

              <p>By accessing, registering, or using the Platform, you agree to the terms of this Privacy Policy.</p>

              <p className="font-bold">
                IF YOU DO NOT AGREE WITH THIS POLICY, YOU SHOULD EXIT THE PLATFORM, UNINSTALL ANY ASSOCIATED
                APPLICATIONS, AND DISCONTINUE USE IMMEDIATELY.
              </p>

              <h2>1. Table of Contents</h2>
              <ol>
                <li>Introduction</li>
                <li>Our Role & Data Controller Status</li>
                <li>How We Use Your Personal Information</li>
                <li>Limited Use Policy</li>
                <li>How We Use Your Information for Marketing</li>
                <li>Cookies & Tracking Technologies</li>
                <li>Storage & Data Retention</li>
                <li>General Data Processing</li>
                <li>Sharing Your Personal Information</li>
                <li>Social Sharing Features</li>
                <li>Security & Protection of Your Information</li>
                <li>Push Notifications & Communications</li>
                <li>Your Rights & Choices</li>
                <li>Updates to This Privacy Policy</li>
                <li>Contact Information</li>
              </ol>

              <h2>2. Our Role & Data Controller Status</h2>
              <p>
                a. Shorts Rev LLC acts as the data controller for any personal information collected or provided by you.
              </p>

              <p>b. As the data controller, we determine how and why your personal information is processed.</p>

              <h2>3. How We Use Your Personal Information</h2>
              <p>a. In this section, we outline:</p>
              <ol type="i">
                <li>The categories of personal information we may collect and process;</li>
                <li>The purposes for which we use this information; and</li>
                <li>The legal basis for processing your information.</li>
              </ol>

              <p>
                b. Please note that not all information you provide is personally identifiable under applicable laws.
              </p>
              <ul>
                <li>
                  By registering on the Platform, you acknowledge that certain personal information may be publicly
                  accessible, including profile details and any content shared in public sections of the Platform.
                </li>
                <li>
                  Public personal information may be visible in searches conducted on the Platform or external search
                  engines.
                </li>
                <li>
                  Users should exercise caution when sharing personal information with others, as it may be copied,
                  downloaded, or publicly disclosed by recipients.
                </li>
              </ul>

              <h2>4. Limited Use Policy</h2>
              <p>
                We do not sell, rent, or share your personal information with third parties for their marketing
                purposes. Your data will only be processed as necessary to provide services on the Shorts Rev Platform,
                including:
              </p>
              <ul>
                <li>Facilitating user accounts and platform access</li>
                <li>Providing customer support</li>
                <li>Processing payments and transactions</li>
                <li>Detecting and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2>5. How We Use Your Information for Marketing</h2>
              <p>
                a. We may process your personal information identified in this Policy to keep you informed about our new
                products, product upgrades, special offers, webinars, events and promotions that may be of interest to
                you, to send you updates regarding services you have shown interest in or provide further information
                related to the topic you requested, or to get your consent to further contacting you regarding any other
                services you might be interested in. The legal basis for this processing is our legitimate interest,
                namely the development and conducting of our business.
              </p>

              <p>
                b. We may use your personal information to send you promotional emails and/or newsletters when you have
                consented to receive such communications. The legal basis for this processing is your consent to receive
                promotional communications from us.
              </p>

              <p>
                c. We may use aggregate, non-identifying statistical data for statistical analysis, marketing, or
                similar promotional purposes to help improve our offerings to you or to improve your browsing
                experience.
              </p>

              <p>You may opt out at any time through your account settings or by contacting us.</p>

              <h2>6. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to improve user experience, analyze traffic, and
                personalize content. You may adjust your cookie preferences in your browser settings.
              </p>

              <p>
                You can generally activate or later deactivate the use of cookies through a functionality built into
                your web browser or mobile device. To learn more about how to control cookie settings through your
                browser:
              </p>

              <p>
                Firefox{" "}
                <Link
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                  className="text-red-400 hover:text-red-300"
                >
                  https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                </Link>
              </p>
              <p>
                Chrome{" "}
                <Link
                  href="https://support.google.com/chrome/answer/95647?hl=en"
                  className="text-red-400 hover:text-red-300"
                >
                  https://support.google.com/chrome/answer/95647?hl=en
                </Link>
              </p>
              <p>
                Internet Explorer
                <Link
                  href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
                  className="text-red-400 hover:text-red-300 mx-1"
                >
                  https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
                </Link>
              </p>
              <p>
                Safari (Desktop){" "}
                <Link
                  href="https://support.apple.com/kb/PH5042?locale=en_US"
                  className="text-red-400 hover:text-red-300"
                >
                  https://support.apple.com/kb/PH5042?locale=en_US
                </Link>
              </p>
              <p>
                Safari (Mobile){" "}
                <Link href="https://support.apple.com/en-us/HT201265" className="text-red-400 hover:text-red-300">
                  https://support.apple.com/en-us/HT201265
                </Link>
              </p>
              <p>
                Android Browser{" "}
                <Link
                  href="http://support.google.com/ics/nexus/bin/answer.py?hl=en&answer=2425067"
                  className="text-red-400 hover:text-red-300"
                >
                  http://support.google.com/ics/nexus/bin/answer.py?hl=en&answer=2425067
                </Link>
              </p>

              <p>
                For other browsers, please consult the documentation that your browser developer provides. You can opt
                out of interest-based targeting provided by participating ad servers through the Digital Advertising
                Alliance. Please consult{" "}
                <Link href="http://www.aboutads.info/" className="text-red-400 hover:text-red-300">
                  http://www.aboutads.info/
                </Link>{" "}
                for more information
              </p>

              <h2>7. Storage & Data Retention</h2>
              <p>
                We store personal data for as long as necessary to provide services or comply with legal obligations.
                Upon request, users may request data deletion in accordance with applicable laws.
              </p>

              <p>
                a. Local storage, including Javascript-enabled localStorage, is a typical way for a website to store a
                small file of letters and numbers in your browser. We use local storage files to keep you signed in at
                the Platform and to keep your account authorisation settings. Local storage files are deleted when the
                website that stored them deletes them. You can also delete local storage files from your browser at any
                time you like by visiting your web browser settings.
              </p>

              <p>b. You can clear local storage files from your browser by taking the following actions:</p>

              <p>
                i. In Firefox, localStorage is cleared when the following conditions are met: (a) user clears recent
                history, (b) cookies are selected to be cleared, and (c) time range is "Everything";
              </p>

              <p>
                ii. In Chrome, localStorage is cleared when the following conditions are met: (a) clear browsing data,
                (b) "cookies and other site data" is selected, and (c) timeframe is "from beginning of time." In Chrome,
                it is also now possible to delete localStorage for one specific site;
              </p>

              <p>
                iii. In Internet Explorer, to clear localStorage: (a) click on Tools--Internet Options, (b) General tab,
                (c) delete browsing history on exit, (d) ensure "Cookies and website data" (or "temporary internet files
                and website files") is selected, and (e) consider unchecking "Preserve Favorites website data" at the
                top;
              </p>

              <p>
                iv. In Safari, to clear localStorage: (a) click Safari, (b) then click preferences, (c) select the
                Privacy tab, (d) click Remove all website data and (e) click Remove Now.
              </p>

              <h2>8. General Data Processing</h2>
              <p>
                We process user data based on legal grounds such as contract fulfillment, legitimate business interests,
                compliance with legal obligations, and user consent where required.
              </p>

              <p>
                a. Our processing means any operation or set of operations which is performed on personal information,
                such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval,
                consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or
                combination, restriction, erasure or destruction, support, maintenance, etc. We do not make automated
                decisions, including profiling. The processing of personal information is carried out using computers
                and/or IT enabled tools, following organisational procedures and modes strictly related to the purposes
                indicated.
              </p>

              <p>
                b. Your personal information is processed at our operating offices and in any other place where the
                parties involved with the processing are located.
              </p>

              <p>
                c. We will store your personal data for as long as necessary in order to provide you with the Platform
                or otherwise fulfil the purposes as described above, unless further storage is required in order to
                establish, exercise or defend a legal claim or to comply with applicable law, including accounting
                rules.
              </p>

              <p>
                d. Your personal data are deleted or anonymized as soon as it no longer serves one of the above
                mentioned purposes and in any event no later than three (3) years after your interaction with us has
                ceased.
              </p>

              <p>
                e. We have implemented measures designed to secure your personal information from accidental loss and
                unauthorised access, use, alteration, and disclosure.
              </p>

              <h2>9. Sharing Your Personal Information</h2>
              <p>We may share your data with:</p>
              <ul>
                <li>Service providers assisting with payments, security, and technical support</li>
                <li>Legal authorities, if required by law</li>
                <li>Business partners, if integrated services require it (subject to user consent)</li>
              </ul>

              <p>
                We do not sell or rent your personal data. However, we may disclose certain categories of personal data
                to third parties for business purposes, as described in this section.
              </p>

              <h2>10. Social Sharing Features</h2>
              <p>
                The Shorts Rev Platform may include social media integration that allows you to share content. Please
                review third-party privacy policies before using these features.
              </p>

              <h2>11. Security & Protection of Your Information</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. However, no
                system is completely secure, and users should take personal precautions.
              </p>

              <p>
                a. We take reasonable measures to help protect information about you from loss, theft, misuse and
                unauthorized access, disclosure, alteration and destruction.
              </p>

              <p>
                b. We do not, and will not, provide your personal data in direct exchange for money. Therefore, in the
                literal sense, We do not sell your data. However, we have disclosed some categories of personal data we
                collect under "Sharing of your personal information", to third parties for business purposes under "Use
                of information – purpose and legal basis".
              </p>

              <p>
                c. The Platform may contain links to any other websites or services. Please note that we are not
                responsible for the privacy practices or the content of such websites or services, and you should review
                the privacy policy of each such website or service to make sure you are comfortable with it before
                providing any personal information.
              </p>

              <h2>12. Push Notifications & Communications</h2>
              <p>
                Users may receive push notifications, emails, or SMS messages related to platform updates, payments, and
                promotional content. You may adjust preferences in account settings.
              </p>

              <h2>13. Your Rights & Choices</h2>
              <p>
                As a data subject (a person whose personal information is collected, stored and processed) you have the
                following rights under data privacy laws:
              </p>

              <p>
                a. Right of access. You have the right to obtain confirmation if your personal information is being
                processed by us. If that is the case, you can access your personal information and the following
                information: (i) the purposes of the processing; (ii) the categories of personal information; (iii) to
                whom the personal information has been or will be disclosed; (iv) the envisaged period for which the
                personal information will be stored, or the criteria used to determine that period.
              </p>

              <p>
                If you would like to have a copy of your personal information from us, we will provide it if (i) you
                prove your identity, (ii) it will not adversely affect the rights and freedoms of others. The first copy
                will be provided for free, for any further copies we may charge a reasonable fee based on administrative
                costs.
              </p>

              <p>
                b. Right to rectification. You have the right to demand that we correct without undue delay your
                personal information which we have in our systems if it is inaccurate or incomplete.
              </p>

              <p>
                c. Right to erasure ("right to be forgotten"). You have the right to demand that we erase your personal
                information, and we shall erase it without undue delay where one of the following grounds applies: (i)
                this personal information is no longer necessary in relation to the purposes for which it was processed;
                (ii) you withdraw consent on which the processing is based, and where there is no other legal ground for
                the processing; (iii) you object to the processing and there are no overriding legitimate grounds; (iv)
                your personal information has been unlawfully processed; (v) your personal information has to be erased
                for compliance with a legal obligation.
              </p>

              <p>
                d. Right to restrict processing. You have the right to restrict us in the ability of processing your
                information where one of the following applies: (i) you contest the accuracy of your personal
                information and we are verifying it; (ii) the processing is unlawful and you want to restrict it instead
                of erasure; (iii) we no longer need your personal information, but you need it for establishment,
                exercise or defense of legal claims; (iv) you have objected to processing and we are verifying whether
                legitimate grounds override your request.
              </p>

              <p>
                e. Right to data portability. You have the right to receive your personal information which you provided
                to us in a structured, commonly used and machine-readable format and have the right to transmit those
                data to another company, where: (i) the processing is based on your consent or on a contract; and (ii)
                the processing is carried out by automated means. Where technically feasible, you can demand that we
                transmit those data directly to another company.
              </p>

              <p>
                f. Right to object. You have the right to object to the processing of your personal information based on
                our legitimate interests. We shall no longer process your personal information unless we demonstrate
                compelling legitimate grounds for the processing or for the establishment, exercise or defense of legal
                claims.
              </p>

              <p>
                Where personal information is processed for direct marketing purposes, you have the right to object at
                any time to the processing of your personal information for such marketing.
              </p>

              <p>
                g. Right to withdraw consent. You have the right to withdraw your consent for processing of your
                personal information at any time. The withdrawal of consent shall not affect the lawfulness of
                processing based on consent before its withdrawal.
              </p>

              <h2>14. Updates to This Privacy Policy</h2>
              <p>
                a. We may modify this Privacy Policy by providing notice of such changes, such as by sending you an
                email, providing notice through the Platform or updating the "Last Updated" date at the top of this
                Privacy Policy. By continuing to access or use of the Platform, you confirm your agreement to the
                modified Privacy Policy. If you do not agree to any modification to this Privacy Policy, you must stop
                using the Platform and related services, and delete our applications from your devices. We encourage you
                to review the Privacy Policy periodically to ensure you are fully aware the terms and conditions that
                apply to your access to, and use of, the Platform and related services.
              </p>

              <h2>15. Contact Information</h2>
              <p>For any questions or concerns regarding this Privacy Policy, you may contact us at:</p>
              <p>
                Email:{" "}
                <Link href="mailto:legal@shortsrev.com" className="text-red-400 hover:text-red-300">
                  legal@shortsrev.com
                </Link>
              </p>
              <p>
                Website:{" "}
                <Link href="https://shortsrev.com" className="text-red-400 hover:text-red-300">
                  shortsrev.com
                </Link>
              </p>
              <p>
                Discord:{" "}
                <Link href="https://discord.gg/shortsrev" className="text-red-400 hover:text-red-300">
                  Shorts Rev Discord
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/color-wordmark-transparent.png"
            alt="Shorts Rev Logo"
            width={180}
            height={50}
            className="h-8 w-auto mx-auto mb-4"
          />
          <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Shorts Rev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
