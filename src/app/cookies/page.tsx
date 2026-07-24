import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Healthy Mezze",
  description:
    "Learn how Healthy Mezze uses cookies and similar technologies to improve your browsing experience, analyze website traffic, and support advertising.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold">Cookie Policy</h1>

      <p className="mb-6 text-gray-700">
        <strong>Last updated:</strong> July 24, 2026
      </p>

      <p className="mb-10 text-lg text-gray-600">
        This Cookie Policy explains how Healthy Mezze uses cookies and
        similar technologies to improve your browsing experience,
        understand how visitors use our website, and provide relevant
        content and advertising.
      </p>

      <hr className="mb-10 border-gray-200" />

      <div className="space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            What Are Cookies?
          </h2>

          <p>
            Cookies are small text files stored on your device when you
            visit a website. They help websites remember your preferences,
            improve functionality, and collect information about how the
            website is used.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            How We Use Cookies
          </h2>

          <p>
            Healthy Mezze uses cookies and similar technologies to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Remember your preferences.</li>
            <li>Improve website performance.</li>
            <li>Understand visitor behavior.</li>
            <li>Measure website traffic.</li>
            <li>Provide relevant advertising where applicable.</li>
            <li>Maintain website security and reliability.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Google Analytics
          </h2>

          <p>
            We use Google Analytics to understand how visitors interact
            with Healthy Mezze. Analytics cookies help us improve our
            recipes, pages, and overall user experience by providing
            anonymous usage statistics.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Microsoft Clarity
          </h2>

          <p>
            Microsoft Clarity helps us understand how visitors navigate
            our website through anonymous session recordings, clicks,
            scrolling, and interaction data. This information is used
            solely to improve the website experience.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Google AdSense
          </h2>

          <p>
            Healthy Mezze may display advertisements provided by Google
            AdSense. Google and its partners may use cookies to deliver
            personalized advertisements and measure advertising
            effectiveness based on your browsing activity.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Browser Storage
          </h2>

          <p>
            We may use browser storage to remember your preferences, such
            as favorite recipes, making your experience more convenient
            when you return to Healthy Mezze.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Managing Cookies
          </h2>

          <p>
            Most web browsers allow you to control, delete, or block
            cookies through their settings. Disabling cookies may affect
            certain features and functionality of Healthy Mezze.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Changes to This Cookie Policy
          </h2>

          <p>
            We may update this Cookie Policy from time to time. Any
            changes will be posted on this page along with the updated
            revision date.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Contact Us
          </h2>

          <p>
            If you have any questions about this Cookie Policy, please
            contact us at:
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