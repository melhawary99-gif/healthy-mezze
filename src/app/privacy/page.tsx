import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Healthy Mezze",
  description:
    "Learn how Healthy Mezze collects, uses, and protects your information, including our use of cookies, analytics, newsletter subscriptions, and advertising services.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

      <p className="mb-6 text-gray-700">
        <strong>Last updated:</strong> July 24, 2026
      </p>

      <p className="mb-10 text-lg text-gray-600">
        At Healthy Mezze, we are committed to protecting your privacy and
        being transparent about how we collect, use, and safeguard your
        information while you use our website.
      </p>

      <hr className="mb-10 border-gray-200" />

      <div className="space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            Introduction
          </h2>

          <p>
            Welcome to Healthy Mezze. Your privacy is important to us.
            This Privacy Policy explains what information we collect,
            how we use it, and your rights regarding your information
            when you use our website.
          </p>
        </section>

        <section>
  <h2 className="mb-3 text-2xl font-semibold">
    Information We Collect
  </h2>

  <p>
    Depending on how you use Healthy Mezze, we may collect:
  </p>

  <ul className="mt-3 list-disc space-y-2 pl-6">
    <li>Email addresses submitted through our newsletter subscription form.</li>
    <li>Browser type and version.</li>
    <li>Device information.</li>
    <li>Operating system.</li>
    <li>Pages visited and navigation behavior.</li>
    <li>Time spent on pages.</li>
    <li>Referral websites.</li>
    <li>General analytics data collected through cookies.</li>
  </ul>
</section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            Google Analytics
          </h2>

          <p>
            We use Google Analytics to understand how visitors use our
            website. Google Analytics collects anonymous usage
            information through cookies and similar technologies.
            This information helps us improve our website and user
            experience.
          </p>
        </section>

        <section>
  <h2 className="mb-3 text-2xl font-semibold">
    Newsletter
  </h2>

  <p>
    If you subscribe to our newsletter, we collect your email address
    so we can send recipe updates, cooking tips, and other Healthy Mezze
    content. We use Resend to securely manage newsletter subscriptions
    and email delivery.
  </p>

  <p className="mt-3">
    You may unsubscribe at any time using the unsubscribe link included
    in our emails.
  </p>
</section>

<section>
  <h2 className="mb-3 text-2xl font-semibold">
    Your Rights
  </h2>

  <p>
    You may request access to, correction of, or deletion of any
    personal information you have provided to us. You may also
    unsubscribe from our newsletter at any time.
  </p>
</section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            Microsoft Clarity
          </h2>

          <p>
            We use Microsoft Clarity to better understand how visitors
            interact with our website. Clarity may record anonymous
            usage information such as clicks, scrolling behavior, and
            general interaction patterns to help improve the website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            Cookies
          </h2>

          <p>
            Our website uses cookies to improve your browsing
            experience, remember preferences, and analyze website
            traffic. You can disable cookies through your browser
            settings, although some website features may not function
            properly.
          </p>

          <p className="mt-3">
  We may also use browser storage or cookies to remember your
  preferences, such as saved favorite recipes, to improve your
  experience on the website.
</p>
        </section>

        

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            Google AdSense
          </h2>

          <p>
            Healthy Mezze may display advertisements through Google AdSense.
            Google and its partners may use cookies to personalize advertisements
            and measure advertising performance where applicable.
          </p>

          <p className="mt-3">
            You can learn more by reading{" "}
           <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline"
           >
               Google's Privacy Policy
           </a>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            Third-Party Links
          </h2>

          <p>
            Our website may contain links to third-party websites.
            We are not responsible for the privacy practices or content
            of those external websites.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            Data Security
          </h2>
        
            <p>
             We take reasonable technical and organizational measures to protect
             the information we collect against unauthorized access, alteration,
             disclosure, or destruction. However, no method of transmitting data
             over the internet or storing electronic information can be guaranteed
             to be completely secure.
            </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            Changes to This Privacy Policy
          </h2>

          <p>
            We may update this Privacy Policy from time to time.
            Any changes will be posted on this page with an updated
            revision date.
          </p>
        </section>

        <section>
  <h2 className="mb-3 text-2xl font-semibold">
    Contact Us
  </h2>

  <p>
    If you have any questions regarding this Privacy Policy,
    please contact us at:
  </p>

  <p className="mt-3 font-medium">
  <a
    href="mailto:contact@healthymezze.com"
    className="text-green-700 hover:underline"
  >
    contact@healthymezze.com
  </a>
</p>
</section>

      </div>
    </div>
  );
}