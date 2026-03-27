import PageContainer from "../components/PageContainer";
import CalloutSection from "../components/CalloutSection";
import Button from "../components/Button";
import { REDDIT_URL } from "../config";

export default function Join() {
  return (
    <PageContainer>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Join the Movement
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
        Project India is not an organisation — it's a citizen-driven movement.
        If you believe India's democracy should work from the ground up, and
        that real change starts in your own ward, you belong here.
      </p>

      <section className="mb-12">
        <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
          How It Works
        </h2>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
          We are building ward-level citizen associations — groups of everyday
          people in each ward who come together, discuss their neighbourhood's
          problems, and create a one-year plan for how their ward should look.
          That plan gets proposed to the ward councillor, and citizens hold them
          accountable for delivering on it.
        </p>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Whether you're a homemaker, a retired professional, a student, or a
          senior citizen — if you have some time and care about where you live,
          you can be part of this. No political affiliation needed. Just a
          willingness to show up and participate.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
          What You Can Do
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
          <li>Start or join a ward association in your neighbourhood</li>
          <li>Attend ward meetings and hold representatives accountable</li>
          <li>Help draft a one-year plan for your ward's development</li>
          <li>Oversee infrastructure work — question what's being dug up and why</li>
          <li>Document everything and share it publicly on YouTube</li>
          <li>Discuss ideas and share your ward's story in our community</li>
        </ul>
      </section>

      <CalloutSection
        title="Ready to Start?"
        description="Join the conversation. Share your ward's story. Help us build the first case study that the rest of India — and the world — can follow."
      >
        <Button href={REDDIT_URL}>Join on Reddit</Button>
      </CalloutSection>
    </PageContainer>
  );
}
