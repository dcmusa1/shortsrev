import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function TermsPage() {
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="text-zinc-400 md:text-xl">Last Updated: 31 March 2025</p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl prose prose-invert">
              <p>
                The User Agreement creates a legally binding contract between you and Shorts Rev in relation to your use
                of Shorts Rev. It is important that you read it carefully. The Agreement applies to all users.
              </p>

              <p>
                Before using Shorts Rev, please read this Agreement. Any use of the Shorts Rev program by you means full
                and unconditional acceptance of all the terms of this Agreement.
              </p>

              <p>
                If you do not agree with any provision of this Agreement, you have no right to use Shorts Rev for any
                purpose.
              </p>

              <h2>TABLE OF CONTENT</h2>
              <ol>
                <li>Definitions</li>
                <li>Warning</li>
                <li>General provisions</li>
                <li>User Registration</li>
                <li>Using Shorts Rev</li>
                <li>Payments</li>
                <li>Connecting a YouTube channel</li>
                <li>Assurances and guarantees</li>
                <li>Technical support</li>
                <li>License</li>
                <li>Liability</li>
                <li>Other provisions</li>
              </ol>

              <h2>1. Definitions</h2>
              <p>Shorts Rev LLC, a registered entity in Wyoming, USA.</p>

              <p>User is you, as an individual or a legal entity.</p>

              <p>Profile is a personal page of a registered User in Shorts Rev.</p>

              <p>
                Personal account is a website, access to which is provided by Shorts Rev to the Users, through which
                they add their accounts on social media and (or) other services, manage the Balance, Funds, and Profile
                Credits of the profile, view the profile information, and manage it.
              </p>

              <p>
                Profile Balance is the total summary information of the Profile Funds and Profile Credits on the amount
                of all Income payable to the Shorts Rev User.
              </p>

              <p>Profile Funds are the Income payable by Shorts Rev to the User.</p>

              <p>
                Income is a User's remuneration under contracts between Shorts Rev and the User, which is credited by
                Shorts Rev to the User's account in Shorts Rev and paid using Payment systems to the User's details
                specified in the Personal Account.
              </p>

              <p>
                Profile Credits are funds reflected in the User's Balance Sheet, calculated on the basis of Income,
                which the User has the right to request as payment from Shorts Rev against future accruals of Funds.
              </p>

              <p>
                Rate is (commission) expenses of Shorts Rev for the purchase (or conversion) of US dollars into another
                currency requested by the User in order to pay Income.
              </p>

              <p>Additional services are the functionality of Shorts Rev provided to the User.</p>

              <p>
                YouTube Income — represents the User's remuneration paid by Shorts Rev for the use of the User's
                Content, calculated in accordance with the license agreements between the User and Shorts Rev.
              </p>

              <p>Application — a request to connect the YouTube Channel and/or services provided within Shorts Rev.</p>

              <p>
                Content — the result of intellectual activity – objects of copyright and/or related rights: audiovisual
                works, phonograms, musical works, and other materials, as well as fragments of any works and materials
                located on the Platform, and/or specified in the Personal Account, the Rights to which are granted by
                the User to Shorts Rev on the terms of the Agreement or License agreement.
              </p>

              <p>
                Platform — a software and hardware complex designed for storing, reproducing, distributing Content,
                placing advertisements in it, and collecting statistical information, as well as providing the ability
                to use the Content. The Google Platform (YouTube) Terms of Service can be found at
                <Link href="http://www.youtube.com/t/terms" className="text-red-400 hover:text-red-300 mx-1">
                  http://www.youtube.com/t/terms
                </Link>
                . Guidelines for Fair Use of Content are available at
                <Link
                  href="https://www.youtube.com/intl/ru/yt/about/copyright/fair-use"
                  className="text-red-400 hover:text-red-300 mx-1"
                >
                  https://www.youtube.com/intl/ru/yt/about/copyright/fair-use
                </Link>
                .
              </p>

              <p>
                Connected YouTube channel — YouTube channels that the User added to Personal Account by providing access
                to YouTube Accounts.
              </p>

              <p>
                Registration — a set of actions of the User in accordance, including the provision of Credentials and
                other information, performed by the User using a special form of the user interface in order to form a
                User Profile.
              </p>

              <p>
                Transactions are operations performed in Shorts Rev, which include: operations for crediting Funds to
                the User; operations for adjusting User Credits (if applicable).
              </p>

              <p>
                Login is an username that the User chooses independently and specifies when registering with Shorts Rev,
                through which the User will log in to the Personal Account.
              </p>

              <p>Password is a keyword or a set of characters intended to confirm identity or authority.</p>

              <p>
                Payment systems are systems through which the User has the right to receive payments from Shorts Rev, as
                clarified at paragraph 6.3 of the Agreement.
              </p>

              <p>
                Transfer is an operation for debiting the User's funds from their Balance and crediting them to the
                Balance of another User in accordance with the rules specified in Section 8 of this Agreement.
              </p>

              <h2>2. Warning</h2>
              <p>
                PLEASE READ THIS AGREEMENT CAREFULLY. BY REGISTERING, ACCESSING, VIEWING INFORMATION, DOWNLOADING OR
                UPLOADING CONTENT, OR USING SHORTS REV, YOU
              </p>

              <p>a) ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND ACCEPTED THE TERMS OF THIS AGREEMENT, AND</p>

              <p>
                b) YOU HEREBY CONFIRM THAT YOUR AGE IS SUFFICIENT FOR SUCH REGISTRATION IN ACCORDANCE WITH APPLICABLE
                LAW AND/OR THAT YOU HAVE ALL THE NECESSARY CONSENTS (FOR EXAMPLE, PARENTAL CONSENT) IN FULL COMPLIANCE
                WITH APPLICABLE LAW, INCLUDING CONSENT FOR THE PURPOSES OF INFORMATION PROTECTION LEGISLATION, OTHERWISE
                REGISTRATION WITH SHORTS REV AND ITS USE ARE PROHIBITED.
              </p>

              <p>
                IF, IN ACCORDANCE WITH THE LEGISLATION OF YOUR COUNTRY, YOU ARE PROHIBITED FROM USING SHORTS REV, OR
                PARTS THEREOF, OR IF THERE ARE OTHER LEGAL RESTRICTIONS, YOU DO NOT HAVE THE RIGHT TO USE SHORTS REV. IN
                THIS CASE, YOU WILL BE SOLELY RESPONSIBLE FOR THE USE OF SHORTS REV OR ON THIS PART TERRITORY OF YOUR
                STATE IN VIOLATION OF APPLICABLE LAW.
              </p>

              <h2>3. General Provisions</h2>
              <p>
                3.1. This User Agreement (the "Agreement") is a legally binding agreement between the User and Shorts
                Rev governing your access and use of Shorts Rev.
              </p>

              <p>
                3.2. To use Shorts Rev, the User must unconditionally (in full, without exceptions and/or additions)
                accept the terms of the Agreement. By starting to use Shorts Rev, the User is considered to have
                accepted the terms of the Agreement in full, without reservations or exceptions.
              </p>

              <p>
                3.3. The collection and use of personal data carried out by Shorts Rev in connection with your access
                and use of Shorts Rev is described in the Privacy Policy located at: Shorts Rev Privacy Policy
              </p>

              <p>3.4. Shorts Rev is a service that provides the User with:</p>

              <p>
                a) the ability to create a single account for authentication on a variety of online resources, including
                using single sign-on technology, when using which the User moves from one section of the portal to
                another without re-authentication;
              </p>

              <p>
                b) the ability to connect a YouTube channel and become part of the Shorts Rev partner network, granting
                Shorts Rev the rights to use content in order to monetize it;
              </p>

              <p>
                c) the ability for the User to receive funds from Shorts Rev under contracts between Shorts Rev and the
                User, as well as transfer such funds to other Users in accordance with the Agreement;
              </p>

              <p>d) the ability to access Shorts Rev services;</p>

              <p>e) the ability to access the services of Shorts Rev partners by logging in to Shorts Rev.</p>

              <p>
                3.5. The Agreement, as well as the documents referred to by the Agreement, may be amended by Shorts Rev
                without any special notice. The new version of the Agreement, as well as the documents referred to by
                the Agreement, shall enter into force from the moment it is posted on the Internet at the address
                specified in this paragraph (or the address referred to by the Agreement) unless otherwise provided by
                the new version of the Agreement and/or the documents referred to by the Agreement. The current version
                of the Agreement is always available on the page at: Shorts Rev Terms of Service
              </p>

              <p>
                3.6. If Shorts Rev has made any changes to the Agreement and/or documents referred to by the Agreement,
                with which the User does not agree, they are obliged to stop using Shorts Rev. In any case, the User
                performing actions aimed at using Shorts Rev after the entry into force of the new version of the
                Agreement and/or the documents referred to by the Agreement is a confirmation of the User's consent to
                the new version of the Agreement and the documents referred to by it.
              </p>

              <p>
                3.7. The User confirms that they have the legal authority to accept the Agreement. The persons who have
                accepted the terms of the Agreement have all the rights to perform the legal actions specified in it in
                accordance with the legislation of the USA.
              </p>

              <p>
                3.8. The data on the User's Income is reflected on the basis of the data provided by YouTube, the
                affiliate program, as well as the operations performed to enroll and/or dispose of the User's Income are
                made in Shorts Rev.
              </p>

              <p>
                3.9. The User acknowledges and agrees that Shorts Rev is not obliged to view and in any way check the
                Content posted by the User in their Profile, including for compliance with applicable law, including
                legislation on copyright and related rights.
              </p>

              <h2>4. User Registration</h2>
              <p>
                4.1. To access Shorts Rev, the User fills out the registration form: goes through the registration
                procedure by creating a Personal Account. All Shorts Rev messages, including the first notification
                message about the completion of the registration procedure, are sent to the User at the email address
                that they specified in the "Login" field when registering their Personal Account. The login is unique
                and cannot be changed in the future.
              </p>

              <p>
                4.2. If the use of additional features offered by Shorts Rev LLC in the Shorts Rev service requires an
                additional Application and (or) clarification of User data, and (or) addition of User data, then such
                additional features are provided to the User only after Shorts Rev receives such an application.
              </p>

              <p>
                4.3. After registration, the User provides reliable Personal Data and payment details for Income payment
                paperwork.
              </p>

              <p>
                4.4. In order to comply with Google's policy (https://support.google.com/adsense/answer/6167308?hl=en),
                from 01.09.2022 Shorts Rev will stop paying income to the following regions:
              </p>
              <ul>
                <li>Crimea;</li>
                <li>Cuba;</li>
                <li>the so-called Donetsk People's Republic (DPR) and Luhansk People's Republic (LPR);</li>
                <li>Iran;</li>
                <li>North KOREA;</li>
                <li>Syria.</li>
              </ul>

              <p>
                Registration for Users from the above regions will become unavailable. In the case of using a VPN,
                Shorts Rev is not responsible for any Transactions and payment of Income. If necessary, payments to such
                a region, Shorts Rev undertakes to pay all Income, after which it reserves the right to disconnect the
                User from Shorts Rev.
              </p>

              <p>
                4.5. Registration and authorization via social networks is also available to the User. When choosing
                this method, the login to Shorts Rev will be carried out using the login and password of the
                corresponding social network. The User agrees to receive, store and process Shorts Rev's personal data
                from such networks.
              </p>

              <h2>5. Using Shorts Rev</h2>
              <p>5.1. To use Shorts Rev, the User:</p>

              <p>5.1.1. Undergoes the procedure of registering a Personal account.</p>

              <p>
                5.1.2. In order to solve difficult situations or obtain advice regarding the Services provided by Shorts
                Rev, contact the Information and Technical Support Service using the means of communication and contact
                information specified in clause 11.2 of this Agreement.
              </p>

              <p>5.2. The User undertakes to:</p>

              <p>5.2.1. comply with the terms of this Agreement.</p>

              <p>
                5.2.2. independently (personally) look through the terms of this Agreement, as well as monitor all
                changes and (or) additions to it. The User undertakes to understand them or, if any of the terms of the
                Agreement are not clear to the User, to request clarification of the terms of this Agreement from the
                responsible Shorts Rev employees in the technical and information support service.
              </p>

              <p>
                5.2.3. independently bear the risks of possible adverse consequences for them in case of loss and (or)
                disclosure of their Password by the User.
              </p>

              <p>5.3. Restriction of User rights:</p>

              <p>
                5.3.1. The User is expressly prohibited from decompiling, disassembling, and otherwise studying the
                source code of Shorts Rev.
              </p>

              <p>
                5.3.2. The User is expressly prohibited from selling, renting, leasing for temporary use, using Shorts
                Rev in any other way and in a manner other than the method of use stipulated in this Agreement.
              </p>

              <p>5.3.3. The User is expressly prohibited from modifying Shorts Rev.</p>

              <p>
                5.3.4. The User is expressly prohibited from transferring the User Name and (or) Password to the
                Personal Account to third parties.
              </p>

              <p>
                5.4. By agreeing to the terms of this Agreement and accepting the terms of this Agreement, the User
                hereby assures Shorts Rev and guarantees Shorts Rev that:
              </p>

              <p>
                a) The User complies with and will comply with all applicable laws, legislative acts, orders, and
                regulations and all relevant data privacy and security laws when performing the actions specified in
                this Agreement;
              </p>

              <p>b) The User provided reliable personal and payment data when registering with Shorts Rev.</p>

              <p>5.5. By providing Shorts Rev, Shorts Rev reserves the right to:</p>

              <p>
                5.5.1. deny any User access to Shorts Rev and block access to the User's Personal Account in the
                following cases:
              </p>

              <p>
                a) if the authentication and (or) authorization of the User has not been carried out, or Shorts Rev has
                reason to believe that the authentication and (or) authorization of the User has been carried out with
                violations;
              </p>

              <p>b) if there are technical problems with Shorts Rev;</p>

              <p>c) if the User's actions significantly violate this Agreement;</p>

              <p>d) if the User's actions cause property damage or damage to Shorts Rev's business reputation.</p>

              <p>5.5.2. make changes to the terms of the Agreement at any time and wholly at its sole discretion.</p>

              <p>
                5.5.3. suspend the operation of Shorts Rev or hardware upon detection of significant malfunctions,
                errors, and failures, as well as for the purpose of preventive maintenance and prevention of
                unauthorized access at any time at its sole discretion and (or) during the occurrence of such a need for
                an unlimited time.
              </p>

              <p>
                5.5.4. use the services of Third Parties to fulfill their obligations under this Agreement, without
                incurring liability to the User using such services.
              </p>

              <p>
                5.5.5. disclose information about the User only in accordance with the legislation of the country of
                registration of Shorts Rev.
              </p>

              <p>5.5.6. expand, modify, shorten, edit and refine the functionality of the Shorts Rev service.</p>

              <p>5.5.7. Withhold the User's remuneration in the event of:</p>

              <p>
                a) if the User owes Shorts Rev any amounts – to the extent that the User owes such amounts in accordance
                with the Agreement;
              </p>

              <p>
                b) In the case of fraudulent actions with Content or on the YouTube platform that led to an increase in
                the number of views and rewards, as well as other actions that violate the terms of use of YouTube;
              </p>

              <p>
                c) If the YouTube channel is disconnected from the Shorts Rev partner network and the Shorts Rev service
                before the expiration date of the License Agreement between the User and Shorts Rev;
              </p>

              <p>
                d) Channel demonetization (in a situation where a YouTube channel is automatically disconnected from an
                affiliate program when YouTube decides to disable monetization for certain violations);
              </p>

              <p>e) Blocking the User's YouTube channel;</p>

              <p>f) The presence of gross violations of the terms of use of YouTube, copyright infringement;</p>

              <p>g) Violations of the terms of the Agreement.</p>

              <p>
                5.6. Shorts Rev publishes official messages related to User service and (or) modification (addition) of
                legally important information on the public official Shorts Rev website.
              </p>

              <p>
                5.7. Shorts Rev does not use the User's personal and payment data obtained during registration for any
                selfish purposes and guarantees non-disclosure of this data, except in cases where disclosure of such
                information is Shorts Rev's responsibility by virtue of the legislation of the country of registration
                of Shorts Rev.
              </p>

              <h2>6. Payments</h2>
              <p>
                6.1. After registration, the User in the Personal Account with the help of the Profile Balance gets
                access to tracking the amounts of Income, which is subsequently paid to the payment details specified in
                the User's Personal Account.
              </p>

              <p>
                6.2. For the purposes of Income payment, the User uses one of the proposed Payment Systems. The User
                confirms that they are familiar with the rules of use of the Payment System chosen by them. The rules
                for using the Payment System are posted on the official web pages of the corresponding Payment System.
              </p>

              <p>
                6.3. When using Payment Systems, the User agrees to all the terms and conditions of the relevant systems
                accessible in Shorts Rev.
              </p>

              <p>
                6.4. All expenses related to bank transfer (bank fees for transfer, conversion, etc.), as well as
                expenses incurred by Shorts Rev as a result of making a transfer using electronic payment systems, fees,
                and taxes are deducted from the User's Income. All taxes established by the legislation of User
                registration are paid by the User in the state of their registration independently. Information about
                the commissions of banks and Payment systems, which can be deducted from the User's Income, is reflected
                in Shorts Rev when choosing a particular Payment System or another method of Income payment.
              </p>

              <p>
                6.5. Shorts Rev has the right to withhold part of the User's Income in cases of providing Additional
                Services in the amount and in the manner determined by the agreement of the parties.
              </p>

              <p>
                6.6. If the User deletes the Personal Account or during the period provided to the User to restore the
                Personal Account, the funds owed to the User from the Platforms and (or) third parties have not been
                withdrawn, Shorts Rev, at the request of the User, pays the remainder of the Income within 30 (thirty)
                calendar days.
              </p>

              <p>
                6.8. If the User has declined the Shorts Rev services, then at the request of the User, Shorts Rev pays
                the amount of Income accumulated on the User's account in Shorts Rev.
              </p>

              <p>6.9. The User's income is credited and displayed in Shorts Rev in US dollars.</p>

              <p>
                6.10. The User has the right to request payment of Income in another currency or in another way, taking
                into account the functionality of Shorts Rev. Payments in currencies other than US dollars available in
                Shorts Rev are made at a special Rate, which is brought to the attention of the User at the time of
                choosing the appropriate method or currency. The User agrees that the Rate is set by Shorts Rev
                independently.
              </p>

              <p>
                6.11. The payment of Income to the User is made by clicking the button in the Personal Account called
                "Withdraw" within 10 (Ten) banking days. When crediting funds to the User through Profile Credits,
                Shorts Rev has the right to charge an additional commission.
              </p>

              <p>
                6.12. Profile Credits represent the amount that, based on Shorts Rev data, the User will receive in the
                future, and which Shorts Rev can pay to the User against future receipts.
              </p>

              <p>
                6.13. Profile Credits are generated no later than 3 days from the date of accrual of Income to the User.
              </p>

              <p>
                6.14. The User agrees that the Profile Funds may be paid to them by a Shorts Rev commercial agent or
                other third parties.
              </p>

              <h2>7. Connecting a YouTube Channel</h2>
              <p>
                7.1. After completing registration, the User gets access to the Personal Account, where they track the
                amount of Income, which is subsequently paid through Shorts Rev, and also view the Connected channels.
              </p>

              <p>
                7.2. If the provision of any additional Services offered by Shorts Rev requires an additional
                Application and (or) clarification of the User's data, and (or) supplementing the User's data, and (or)
                clarifying the composition of such additional Services and the conclusion of additional agreements
                between the User and Shorts Rev (agreements, conditions, rules, etc.), then such additional Services are
                provided to the User only after Shorts Rev receives such an Application.
              </p>

              <p>
                7.3. To connect a YouTube channel, the User needs to click "Connect" in the Personal Account. During the
                connection process, the User will be asked to accept the terms of the license agreement for the transfer
                of rights to the Content, which are necessary to pay the YouTube Income to the User.
              </p>
              <ul>
                <li>Shorts Rev will generate a unique verification code.</li>
                <li>
                  The User must copy the code and paste it into the "About" section or description of their YouTube
                  channel.
                </li>
                <li>The User will then enter their channel link in Shorts Rev and click "Verify".</li>
                <li>
                  Shorts Rev will automatically detect the channel description through the YouTube API and verify the
                  channel by matching the code.
                </li>
              </ul>

              <p>
                7.4. The User may have access to a system of tariffs, according to which the Income will be credited to
                Shorts Rev. The User is considered to have accepted the terms of the tariff at the time of their choice
                in the Personal Account.
              </p>

              <p>
                7.5. Shorts Rev reports that its platform uses the YouTube API Service. Considering this, when using
                Shorts Rev, the User accepts the YouTube Terms of Service and also consents to the collection, use, and
                storage of their personal data in accordance with the Google Privacy Policy. The User has the right to
                revoke their consent to the collection, use, and storage of their personal data at any time by clicking
                on the link: Google Permissions.
              </p>

              <p>
                7.6. The User agrees that the analytical data on the revenue of the User's YouTube channel are supplied
                by YouTube and are approximate. The amount of the User's remuneration calculated using such analytical
                data may differ from the amount actually accrued in Shorts Rev. The amount of the User's remuneration
                directly depends on the amounts that will be transferred by Google to Shorts Rev. If Google does not
                transfer the remuneration to Shorts Rev, Shorts Rev is not obligated to pay such non-transferred
                remuneration to the User and is not responsible for the payment of remuneration to the User in this
                case.
              </p>

              <h2>8. Assurances and Guarantees</h2>
              <p>
                8.1. If the YouTube channel is connected, the User, by agreeing to the terms of the Agreement, assures
                Shorts Rev and guarantees that:
              </p>
              <ol>
                <li>The User will not engage in illegal or fraudulent activities.</li>
                <li>The User has all the rights and powers to accept the Agreement.</li>
                <li>The User complies and will comply with the applicable laws.</li>
                <li>The User specified reliable personal and payment data at registration.</li>
                <li>The User voluntarily accepts the terms of the Agreement in full.</li>
              </ol>

              <p>8.2. Shorts Rev is provided "as is" and Shorts Rev makes no warranties or representations.</p>

              <p>8.3. In particular, Shorts Rev does not guarantee that:</p>
              <ol>
                <li>The use of Shorts Rev will meet the needs of the User.</li>
                <li>The use of Shorts Rev will be uninterrupted, timely, secure, or error-free.</li>
                <li>
                  Any information obtained by the User as a result of using Shorts Rev will be accurate or reliable.
                </li>
                <li>
                  Defects in operation or functionality of any software provided to the User within Shorts Rev will be
                  corrected.
                </li>
              </ol>

              <p>
                8.4. Shorts Rev is not subject to terms, warranties, or other conditions (including any implied terms of
                satisfactory quality, suitability for the intended use, or matching the description) unless expressly
                set forth in the Agreement.
              </p>

              <h2>9. Technical Support</h2>
              <p>
                9.1. Shorts Rev provides free technical and informational support by email specified in Shorts Rev. The
                User can send their request via the form in Shorts Rev. Shorts Rev will make every effort to provide a
                qualified and effective response to every User request.
              </p>

              <p>9.2. Technical support email address: support@shortsrev.com</p>

              <p>9.3. Discord support server: https://discord.gg/shortsrev</p>

              <h2>10. License</h2>
              <p>
                10.1. By copying or using Shorts Rev in any way, the User expresses their full and unconditional consent
                to all the terms of this Agreement.
              </p>

              <p>
                10.2. The use of Shorts Rev by the User under the terms of this Agreement is free of charge. The use of
                Shorts Rev on terms and in ways not provided for by this Agreement is possible only on the basis of a
                separate agreement with Shorts Rev.
              </p>

              <p>
                10.3. Shorts Rev contains copyrighted materials, trademarks, and other legally protected materials,
                including, but not limited to: texts, photos, and graphic images.
              </p>

              <p>
                10.4. Shorts Rev grants the User, and the User accepts, a personal, non-exclusive, non-commercial,
                limited license without the right to transfer Shorts Rev to third parties. Shorts Rev grants the User
                the right to use the platform in the following ways:
              </p>

              <p>
                10.4.1. To use Shorts Rev for its direct functional purpose, including accessing services, managing
                payments, and tracking YouTube channel income.
              </p>

              <p>
                10.4.2. To share information about Shorts Rev free of charge for non-commercial purposes by bringing
                awareness to an indefinite circle of persons without the right of subsequent transmission.
              </p>

              <p>
                10.5. Shorts Rev is not obliged to provide support, maintenance, updates, modifications, or new versions
                of the platform. Shorts Rev may, from time to time, issue updates for the platform, which will be
                applied automatically through the website. By accepting this Agreement, the User agrees to such
                automatic updates, and also accepts that the terms and conditions of this Agreement will apply to these
                updates.
              </p>

              <p>
                10.6. The right to use Shorts Rev after User registration is non-transferable. The User is fully
                responsible for any unauthorized transfer of access to third parties, as well as for any damage caused
                to Shorts Rev or third parties as a result of such transfer.
              </p>

              <p>
                10.7. Shorts Rev is provided without quality assurance and does not imply any guarantees, express or
                implied. Shorts Rev does not guarantee that the platform will meet the User's requirements or that its
                operation will be uninterrupted and error-free. Shorts Rev is not responsible for the accuracy,
                completeness, applicability, or reliability of the results obtained during the use of the platform or
                any data and information downloaded or otherwise obtained through the use of Shorts Rev. The User
                assumes full responsibility for using the platform at use of Shorts Rev. The User assumes full
                responsibility for using the platform at their own risk and discretion, while no claims can be made
                against Shorts Rev regarding damages received by the User or in relation to the User's property.
              </p>

              <p>
                10.8. The use of Shorts Rev by the User is only possible with access to the Internet. The User
                independently obtains and pays for such access under the terms and rates of their telecom operator or
                Internet provider.
              </p>

              <h2>11. LIABILITY</h2>
              <p>11.1. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>

              <p>
                a) IN ANY CASE, SHORTS REV IS NOT RESPONSIBLE FOR ANY DIRECT, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES
                OR OTHER DAMAGES OF ANY KIND, INCLUDING, BUT NOT LIMITED TO, LOSS OF USE, LOST PROFITS OR LOSS OF DATA,
                AS A RESULT OF AN OFFENSE (INCLUDING NEGLIGENCE) OR ON OTHER GROUNDS THAT ARISE AS A RESULT OF OR IN
                CONNECTION WITH THE USE OR INABILITY TO USE SHORTS REV, INCLUDING, BUT NOT LIMITED TO, ANY LOSSES CAUSED
                BY OR ARISING FROM THE USE BY THE USER OF ANY INFORMATION RECEIVED FROM SHORTS REV, OR ARISING FROM
                ERRORS, ACTS OF INACTION, DELAYS, DELETION OF FILES OR EMAILS, ERRORS, DEFICIENCIES, VIRUSES, DELAYS IN
                FUNCTIONING OR TRANSMISSION OR DETERIORATION OF CHARACTERISTICS, REGARDLESS OF WHETHER THEY ARE CAUSED
                BY NATURAL DISASTERS, FAILURE OF COMMUNICATION SYSTEMS, THEFT, DESTRUCTION OR UNAUTHORIZED ACCESS TO
                DOCUMENTS, PROGRAMS OR SHORTS REV SERVICES; AND
              </p>

              <p>
                b) IN ANY CASE, THE TOTAL LIABILITY OF SHORTS REV UNDER THE AGREEMENT, WARRANTY, AS A RESULT OF AN
                OFFENSE (INCLUDING NEGLIGENCE EXPRESSED IN ACTION OR OMISSION, OR IMPUTED NEGLIGENCE), UNCONDITIONAL
                LIABILITY OR OTHER LIABILITY THAT ARISES AS A RESULT OF OR IN CONNECTION WITH THE USE OR INABILITY TO
                USE SHORTS REV, DOES NOT EXCEED THE AMOUNT OF $100.
              </p>

              <p>
                11.2. The User agrees to indemnify, defend and release Shorts Rev from liability in respect of any
                claims, losses, damages, obligations, including legal support costs, that arise as a result of
                violations by the User (for example, violation of the rights of any third party, violation of the
                Agreement or any other applicable agreements regarding the use of Shorts Rev or violation of
                representations and warranties made by you under this document. Shorts Rev reserves the right to
                exercise, at the User's expense, the exclusive protection, and control of any claim for which
                compensation is required for Shorts Rev, and the User agrees to cooperate with Shorts Rev in the
                protection of such claims. Shorts Rev will use all reasonable efforts to inform you of any such claim,
                action, or proceeding that it becomes aware of.
              </p>

              <p>
                11.3. Shorts Rev is not responsible for any damage to the User's or other person's electronic devices,
                mobile devices, any other hardware or software caused by or related to the use of Shorts Rev.
              </p>

              <p>
                11.4. The User bears all possible risks of adverse consequences in case of entering false personal data,
                deliberately false information, personal data of third parties into the Profile, including, but not
                limited to, the risks associated with bringing Shorts Rev and (or) third parties to responsibility. In
                case of initiation of proceedings in accordance with the procedure established by law as a result of
                illegal actions by the User, the presence of justified claims of third parties, Shorts Rev has the right
                to disclose the User's personal data, and the User undertakes to act on the side of the debtor, the
                defendant, the person against whom the process is being conducted.
              </p>

              <h2>12. OTHER CONDITIONS</h2>
              <p>
                12.1. This Agreement is governed by and interpreted in accordance with the laws of the United States of
                America. All disputes arising in connection with this Agreement are subject to mandatory pre-trial
                settlement by the Parties, and in case of failure to reach an agreement within the framework of
                pre-trial settlement of the dispute – in a court having jurisdiction at the location of Shorts Rev.
              </p>

              <p>
                12.2. All questions and claims related to the Agreement should be sent to the email address:
                <Link href="mailto:legal@shortsrev.com" className="text-red-400 hover:text-red-300 mx-1">
                  legal@shortsrev.com
                </Link>{" "}
                or via the Shorts Rev Discord server:
                <Link href="https://discord.gg/shortsrev" className="text-red-400 hover:text-red-300 mx-1">
                  https://discord.gg/shortsrev
                </Link>
                .
              </p>

              <p>
                12.3. The invalidity of one of the clauses of the Agreement does not entail the invalidity of the entire
                Agreement.
              </p>

              <p>
                12.4. Shorts Rev grants the User a full, worldwide, and non-exclusive license to use Shorts Rev without
                the right to transfer the rights to such use to third parties.
              </p>

              <p>
                12.5. The User recognizes the legal force of the texts of documents received by e-mail on a par with
                documents executed in simple written form on paper. Any documents that were sent using e-mail have full
                legal force only if these documents are sent to the User's e-mail address specified as the Login during
                registration. Shorts Rev assumes no responsibility if the User specifies an incorrect email address.
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
            width={240}
            height={190}
            className="h-16 w-auto mx-auto mb-4"
          />
          <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Shorts Rev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
