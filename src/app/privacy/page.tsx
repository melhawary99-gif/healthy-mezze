import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Healthy Mezze, including information about cookies, analytics, and your privacy.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

      <p className="mb-6 text-gray-700">
        <strong>Last updated:</strong> July 23, 2026
      </p>

      <div className="space-y-8 text-gray-700 leading-8">

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
            We may collect non-personal information such as:
          </p>

          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Referral websites</li>
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
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            Google AdSense
          </h2>

          <p>
            Healthy Mezze may display advertisements through Google
            AdSense in the future. Google may use cookies to display
            personalized advertisements based on your previous visits
            to this and other websites.
          </p>

          <p className="mt-3">
            You can learn more about how Google uses information by
            visiting Google's Privacy Policy.
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
            We take reasonable measures to protect the information we
            collect. However, no method of internet transmission or
            electronic storage is completely secure.
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
            If you have any questions about this Privacy Policy,
            please contact us through our Contact page.
          </p>
        </section>

      </div>
    </div>
  );
}