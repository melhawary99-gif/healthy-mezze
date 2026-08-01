import { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the Healthy Mezze disclaimer regarding recipe information, nutrition facts, and website content.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="mx-auto max-w-4xl py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Healthy Mezze
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Disclaimer
          </h1>

          <p className="mt-6 text-gray-600">
            <strong>Last Updated:</strong> July 2026
          </p>

          <div className="mt-10 space-y-10 text-gray-700 leading-8">

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                General Information
              </h2>

              <p className="mt-4">
                The information provided on Healthy Mezze is for general
                informational and educational purposes only. While we strive to
                provide accurate and up-to-date content, we make no guarantees
                regarding the completeness, reliability, or accuracy of any
                information published on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Recipes
              </h2>

              <p className="mt-4">
                Cooking results may vary depending on ingredients, equipment,
                cooking techniques, and individual experience. We encourage
                readers to use their own judgment and adjust recipes to meet
                their personal preferences and dietary needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Nutrition Information
              </h2>

              <p className="mt-4">
                Nutrition values published on Healthy Mezze are estimates only.
                They are provided as a convenience and should not be considered
                medical or nutritional advice. If you have specific dietary or
                health concerns, please consult a qualified healthcare
                professional or registered dietitian.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Allergies
              </h2>

              <p className="mt-4">
                Recipes may contain common allergens such as nuts, dairy, eggs,
                wheat, sesame, or other ingredients. It is the responsibility
                of each reader to verify ingredients and ensure recipes are safe
                for their individual dietary requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                External Links
              </h2>

              <p className="mt-4">
                Our website may contain links to third-party websites for
                additional information or resources. Healthy Mezze is not
                responsible for the content, policies, or practices of external
                websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Us
              </h2>

              <p className="mt-4">
                If you have any questions regarding this disclaimer, please
                contact us at{" "}
                <a
                  href="mailto:contact@healthymezze.com"
                  className="font-semibold text-green-700 hover:underline"
                >
                  contact@healthymezze.com
                </a>.
              </p>
            </section>

          </div>
        </section>
      </Container>
    </main>
  );
}