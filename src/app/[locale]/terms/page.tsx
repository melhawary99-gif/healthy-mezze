import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Healthy Mezze",
  description:
    "Read the Terms of Service governing your use of Healthy Mezze, including website content, intellectual property, user responsibilities, and legal disclaimers.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

      <p className="mb-6 text-gray-700">
        <strong>Last updated:</strong> July 24, 2026
      </p>

      <p className="mb-10 text-lg text-gray-600">
  These Terms of Service govern your use of Healthy Mezze. By accessing
  or using our website, you agree to these terms and conditions.
</p>

<hr className="mb-10 border-gray-200" />

      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
          <p>
            By accessing and using Healthy Mezze, you agree to comply with
            these Terms of Service. If you do not agree with these terms,
            please discontinue using the website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Website Content</h2>
          
            <p>
  Healthy Mezze provides recipes, nutrition information, cooking tips,
  and educational content for general informational purposes. Although
  we make every effort to keep our content accurate and up to date, we
  cannot guarantee that all information is complete, current, or free
  from errors.
          </p>
        </section>

        <section>
  <h2 className="mb-3 text-2xl font-semibold text-gray-900">
    User Responsibilities
  </h2>

  <p>
    You agree to use Healthy Mezze only for lawful purposes and in a
    manner that does not interfere with the operation of the website or
    the experience of other users.
  </p>
</section>

<section>
  <h2 className="mb-3 text-2xl font-semibold text-gray-900">
    Limitation of Liability
  </h2>

  <p>
    Healthy Mezze is provided on an "as is" and "as available" basis.
    To the fullest extent permitted by law, we are not liable for any
    damages resulting from the use of, or inability to use, this
    website.
  </p>
</section>

<section>
  <h2 className="mb-3 text-2xl font-semibold text-gray-900">
    Termination
  </h2>

  <p>
    We reserve the right to suspend or terminate access to Healthy
    Mezze if these Terms of Service are violated or if necessary to
    protect the website and its users.
  </p>
</section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Health Disclaimer</h2>
          <p>
            Nutrition information and health-related content are provided for
            general informational purposes only and should not be considered
            medical advice. Always consult a qualified healthcare professional
            regarding dietary or medical concerns.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Intellectual Property</h2>
          <p>
  Unless otherwise stated, all original content on Healthy Mezze,
  including recipes, text, graphics, logos, branding, website design,
  and other materials, is owned by Healthy Mezze and is protected by
  applicable copyright and intellectual property laws. You may not copy,
  reproduce, distribute, or commercially exploit our content without
  prior written permission.
</p>
        </section>


        <section>
  <h2 className="mb-3 text-2xl font-semibold text-gray-900">
    Governing Law
  </h2>

  <p>
    These Terms of Service shall be governed by and interpreted in
    accordance with the applicable laws and regulations relevant to the
    operation of Healthy Mezze.
  </p>
</section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">External Links</h2>
          <p>
            
  Healthy Mezze may include links to third-party websites for additional
  information or resources. We do not control these websites and are not
  responsible for their content, availability, or privacy practices.
  Accessing third-party websites is at your own discretion.

          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Changes to These Terms</h2>
          <p>
            We may update these Terms of Service at any time. Changes will
            become effective immediately after they are published on this page.
          </p>
        </section>
        
        <section>
  <h2 className="mb-3 text-2xl font-semibold text-gray-900">
    Entire Agreement
  </h2>

  <p>
    These Terms of Service constitute the entire agreement between you
    and Healthy Mezze regarding your use of the website and supersede
    any prior agreements or understandings relating to its use.
  </p>
</section>

        <section>
  <h2 className="mb-3 text-2xl font-semibold text-gray-900">
    Contact
  </h2>

  <p>
    If you have any questions regarding these Terms of Service, please
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