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
          An open initiative to improve democracy at the ward level — one
          neighbourhood at a time.
        </p>
      </section>

      {/* The Idea */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">The Idea</h2>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
          India's democracy is vibrant at the national level but often invisible
          where it matters most — in your ward. The councillor who decides your
          roads, water, and sanitation is someone most citizens can't even name.
        </p>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          We believe that if a small group of engaged citizens in every ward
          started paying attention — attending meetings, tracking budgets, asking
          questions — it would transform local governance from the ground up.
        </p>
      </section>

      {/* Philosophy */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Thinking in Public
        </h2>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
          We don't have all the answers. Nobody does. This project is an
          experiment in thinking out loud — sharing rough ideas, inviting
          disagreement, and improving through honest conversation.
        </p>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          There are no perfect plans here. Just a belief that citizens who
          organise at the smallest level of democracy can create change that
          scales.
        </p>
      </section>

      {/* CTA */}
      <CalloutSection
        title="Join the Conversation"
        description="We discuss ideas, share ward-level experiences, and figure things out together on Reddit."
      >
        <Button href={REDDIT_URL}>Join on Reddit</Button>
        <span className="mx-3 text-gray-400 dark:text-gray-600">or</span>
        <Button to="/blog" variant="secondary">Read the Blog</Button>
      </CalloutSection>
    </PageContainer>
  );
}
