import PageContainer from "../components/PageContainer";
import CalloutSection from "../components/CalloutSection";
import Button from "../components/Button";
import { REDDIT_URL } from "../config";

export default function Home() {
  return (
    <PageContainer>
      {/* Hero */}
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Project India
        </h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Making India a place where we would want our children to feel safe,
          live with pride, and experience real democracy — starting from the
          ward level.
        </p>
      </section>

      {/* The Idea */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">The Idea</h2>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
          Why can't every ward in India have its own citizen association? There
          are millions of people — women, retired professionals, students, senior
          citizens — who have time, energy, and a stake in their neighbourhood.
          What if they came together?
        </p>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          The idea is simple: citizens in a ward gather, discuss how their ward
          should look in the next one year, create a concrete plan, and push
          their ward councillor, MLA, or MP to make it happen. When citizens
          start demanding the right things, the vote bank shifts. The government
          no longer has to rely on freebies — because people are asking for
          accountability instead.
        </p>
      </section>

      {/* The Vision */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          The Vision
        </h2>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
          Over time, ward associations can become self-sustaining. Each ward
          forms a trust. The trust generates revenue — screens in the ward for
          local advertisements, community spaces, local partnerships. The trust
          plants and maintains trees, oversees infrastructure, and holds the
          system accountable.
        </p>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          We start with one ward. We do it right. We record everything and put
          it on YouTube. That one ward becomes a case study — not just for India,
          but for the world. Then the next ward picks it up. And the next.
        </p>
      </section>

      {/* CTA */}
      <CalloutSection
        title="Join the Movement"
        description="We're building this in the open — discussing ideas, sharing progress, and figuring things out together."
      >
        <Button href={REDDIT_URL}>Join on Reddit</Button>
        <span className="mx-3 text-gray-400 dark:text-gray-600">or</span>
        <Button to="/blog" variant="secondary">Read the Blog</Button>
      </CalloutSection>
    </PageContainer>
  );
}
