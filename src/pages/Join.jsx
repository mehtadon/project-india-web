import PageContainer from "../components/PageContainer";
import CalloutSection from "../components/CalloutSection";
import Button from "../components/Button";
import { REDDIT_URL } from "../config";

export default function Join() {
  return (
    <PageContainer>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Join the Initiative
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
        Project India is not an organisation. It's a community-driven idea —
        open to anyone who believes that local democracy can be better.
      </p>

      <section className="mb-12">
        <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
          How It Works
        </h2>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
          There's no sign-up form or membership. We gather on Reddit to discuss
          ideas, share experiences from our wards, and figure out practical ways
          to improve local governance.
        </p>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Whether you've been attending ward meetings for years or are just
          curious about what your councillor does — you're welcome.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
          What You Can Do
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
          <li>Share what's happening in your ward</li>
          <li>Ask questions and challenge ideas</li>
          <li>Help document ward-level governance processes</li>
          <li>Write about your experience for the blog</li>
          <li>Simply listen and learn</li>
        </ul>
      </section>

      <CalloutSection
        title="Ready to Join?"
        description="All discussions happen on our Reddit community. Drop in, say hello, and share your ward's story."
      >
        <Button href={REDDIT_URL}>Join on Reddit</Button>
      </CalloutSection>
    </PageContainer>
  );
}
