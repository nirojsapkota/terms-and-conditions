/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

const APP_NAME = "Spindle Sort";
const PACKAGE_NAME = "com.spindlesort.game";
const DEVELOPER = "Niroj Sapkota";
const CONTACT_EMAIL = "nirojsapkota15@gmail.com";
const LAST_UPDATED = "29 September 2026";

interface Section {
  id: string;
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of these terms",
    body: (
      <>
        <p>
          These Terms and Conditions ("Terms") govern your use of {APP_NAME} (the "App",
          package <code>{PACKAGE_NAME}</code>), a puzzle game for Android published by {DEVELOPER}{" "}
          ("we", "us", "our"). By downloading, installing, or playing the App you agree to these
          Terms. If you do not agree, do not use the App.
        </p>
      </>
    ),
  },
  {
    id: "licence",
    title: "2. Licence to use the App",
    body: (
      <>
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable licence to install and
          play the App on Android devices you own or control, for your own non-commercial
          entertainment.
        </p>
        <p>You agree not to:</p>
        <ul>
          <li>copy, modify, decompile, reverse engineer, or redistribute the App or its content;</li>
          <li>interfere with, block, or manipulate ads, purchases, or other App features;</li>
          <li>use cheats, automation, or exploits to gain an advantage or avoid payment;</li>
          <li>use the App for any unlawful purpose.</li>
        </ul>
      </>
    ),
  },
  {
    id: "gameplay",
    title: "3. Gameplay and fairness promise",
    body: (
      <>
        <p>
          Every level in {APP_NAME} is designed and tested to be solvable without watching an ad or
          spending money. Optional boosters, such as an extra slot, make a level easier to plan
          around. They never unlock content that would otherwise be blocked.
        </p>
        <p>
          We may add, change, rebalance, or remove levels and features at any time through App
          updates.
        </p>
      </>
    ),
  },
  {
    id: "ads",
    title: "4. Advertising",
    body: (
      <>
        <p>
          The App is free to play and is supported by ads served through Google AdMob. The App
          may show:
        </p>
        <ul>
          <li>
            <strong>Banner ads</strong> in the space below the gameplay controls;
          </li>
          <li>
            <strong>Interstitial ads</strong> between levels, at natural breaks;
          </li>
          <li>
            <strong>Rewarded ads</strong> that you choose to watch in exchange for an in-game
            reward, such as an extra holding slot or bonus coins.
          </li>
        </ul>
        <p>
          Rewarded ads are always optional. Rewards are granted only when an ad is watched to
          completion, and ad availability is not guaranteed. We are not responsible for the
          content of third-party ads or for any website or app that an ad links to.
        </p>
      </>
    ),
  },
  {
    id: "purchases",
    title: "5. In-app purchases",
    body: (
      <>
        <p>
          The App offers an optional one-time purchase, "Remove Ads", which stops interstitial
          ads. Rewarded ads stay available and optional after purchase. Banner ads may still
          appear unless the purchase description says otherwise.
        </p>
        <ul>
          <li>
            All purchases are processed by Google Play Billing and are subject to the{" "}
            <a href="https://play.google.com/about/play-terms/" target="_blank" rel="noreferrer">
              Google Play Terms of Service
            </a>
            . We do not receive or store your payment details.
          </li>
          <li>
            Purchases are tied to your Google account. You can restore a purchase by reinstalling
            the App while signed in to the same account.
          </li>
          <li>
            Refunds are handled under Google Play's refund policy. Except where required by law,
            purchases are non-refundable.
          </li>
          <li>Prices are shown in the store in your local currency and may change.</li>
        </ul>
      </>
    ),
  },
  {
    id: "privacy",
    title: "6. Privacy and data",
    body: (
      <>
        <p>
          We do not ask you to create an account, and we do not collect your name, email address,
          contacts, location, photos, or files.
        </p>
        <h3>Data stored on your device</h3>
        <p>
          The App saves the following only on your device, using Android's local storage. We do
          not upload this data to our servers:
        </p>
        <ul>
          <li>level progress, stars earned, best times, and total wins;</li>
          <li>whether you have seen the tutorial;</li>
          <li>sound effects, music, vibration, and volume settings.</li>
        </ul>
        <p>
          Uninstalling the App or clearing its data deletes this information. It may be included in
          your Android device backup if backup is on for your device.
        </p>
        <h3>Data collected by third parties</h3>
        <p>
          <strong>Google AdMob</strong> may collect device identifiers (such as the Android
          advertising ID), IP address, device and app information, and ad interaction data to
          serve, measure, and personalise ads and to prevent fraud. See{" "}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">
            how Google uses information from apps that use its services
          </a>
          .
        </p>
        <p>
          <strong>Google Play Billing</strong> processes purchases and tells the App whether you
          own "Remove Ads". See the{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Google Privacy Policy
          </a>
          .
        </p>
        <h3>Your choices</h3>
        <ul>
          <li>
            Reset or delete your advertising ID, or opt out of personalised ads, in your device
            settings under <em>Settings › Google › Ads</em> (or <em>Settings › Privacy › Ads</em>).
          </li>
          <li>Clear the App's data or uninstall it to remove all locally stored progress.</li>
        </ul>
        <h3>Permissions</h3>
        <p>
          The App requests only internet and network-state access. These are used to load ads
          and to process purchases.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "7. Children",
    body: (
      <p>
        The App is intended for a general audience and is not directed at children under 13. We
        do not knowingly collect personal information from children. If you believe a child has
        provided personal information through the App, contact us and we will help remove it.
      </p>
    ),
  },
  {
    id: "ip",
    title: "8. Intellectual property",
    body: (
      <p>
        The App, including its code, levels, artwork, sounds, and name, is owned by {DEVELOPER} or
        its licensors and is protected by copyright and other laws. Third-party audio and assets
        are used under their respective licences. Google Play and AdMob are trademarks of Google
        LLC.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "9. Disclaimer of warranties",
    body: (
      <p>
        The App is provided "as is" and "as available", without warranties of any kind, express or
        implied. We do not guarantee that the App will be uninterrupted, error-free, or compatible
        with every device, or that saved progress will never be lost.
      </p>
    ),
  },
  {
    id: "liability",
    title: "10. Limitation of liability",
    body: (
      <p>
        To the maximum extent permitted by law, we are not liable for any indirect, incidental,
        special, or consequential damages, or for loss of data or progress, arising from your use
        of the App. Our total liability for any claim is limited to the amount you paid for the
        App in the 12 months before the claim. Nothing in these Terms limits rights you have under
        consumer protection laws that cannot be excluded.
      </p>
    ),
  },
  {
    id: "termination",
    title: "11. Termination",
    body: (
      <p>
        You may stop using the App at any time by uninstalling it. We may suspend or end your
        licence if you breach these Terms. Sections 8 to 10 survive termination.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to these terms",
    body: (
      <p>
        We may update these Terms from time to time. When we do, we will change the "Last updated"
        date on this page. Continuing to use the App after an update means you accept the revised
        Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "13. Contact",
    body: (
      <p>
        Questions about these Terms or your privacy? Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    ),
  },
];

const threadColours = ["#264653", "#2A9D8F", "#E9C46A", "#E76F51"];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF5EA] text-[#3A2E22]">
      <header className="border-b border-[#EFE2C8] bg-[#FFFDF8]">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
          <div className="mb-5 flex gap-1.5" aria-hidden="true">
            {threadColours.map((colour) => (
              <span key={colour} className="h-2 w-10 rounded-full" style={{ backgroundColor: colour }} />
            ))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2A9D8F]">{APP_NAME}</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Terms and Conditions</h1>
          <p className="mt-3 text-[#8A7A63]">Including our Privacy Policy · Last updated {LAST_UPDATED}</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <nav aria-label="Contents" className="mb-10 rounded-2xl border border-[#EFE2C8] bg-[#FFFDF8] p-5">
          <p className="mb-3 text-sm font-semibold text-[#8A7A63]">Contents</p>
          <ol className="grid gap-1.5 text-sm sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-[#264653] hover:text-[#2A9D8F] hover:underline">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-6">
              <h2 className="mb-3 text-xl font-bold text-[#264653]">{section.title}</h2>
              <div
                className="space-y-3 leading-relaxed text-[#3A2E22]
                  [&_a]:text-[#2A9D8F] [&_a]:underline
                  [&_code]:rounded [&_code]:bg-[#EFE2C8] [&_code]:px-1.5 [&_code]:text-sm
                  [&_h3]:mt-5 [&_h3]:font-semibold [&_h3]:text-[#264653]
                  [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6"
              >
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-[#EFE2C8] py-8 text-center text-sm text-[#8A7A63]">
        © 2026 {DEVELOPER}. All rights reserved.
      </footer>
    </div>
  );
}
