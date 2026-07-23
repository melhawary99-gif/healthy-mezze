import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Healthy Mezze and learn about the conditions for using our website.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

      <p className="mb-6 text-gray-700">
        <strong>Last updated:</strong> July 23, 2026
      </p>

      <div className="space-y-8 text-gray-700 leading-8">
        <section>
          <h2 className="mb-3 text-2xl font-semibold">Acceptance of Terms</h2>
          <p>
            By accessing and using Healthy Mezze, you agree to comply with
            these Terms of Service. If you do not agree with these terms,
            please discontinue using the website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Website Content</h2>
          <p>
            Healthy Mezze provides recipes, nutritional information, cooking
            tips, and educational content for informational purposes only.
            While we strive for accuracy, we cannot guarantee that all
            information is complete, current, or error-free.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Health Disclaimer</h2>
          <p>
            Nutrition information and health-related content are provided for
            general informational purposes only and should not be considered
            medical advice. Always consult a qualified healthcare professional
            regarding dietary or medical concerns.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Intellectual Property</h2>
          <p>
            All original content on Healthy Mezze, including text, images,
            branding, and website design, is protected by applicable copyright
            laws unless otherwise stated.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">External Links</h2>
          <p>
            Our website may include links to external websites. We are not
            responsible for the content or privacy practices of those sites.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Changes to These Terms</h2>
          <p>
            We may update these Terms of Service at any time. Changes will
            become effective immediately after they are published on this page.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Contact</h2>
          <p>
            If you have any questions regarding these Terms of Service,
            please contact us through our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}