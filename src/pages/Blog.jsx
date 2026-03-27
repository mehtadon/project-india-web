import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import posts from "../data/posts";

export default function Blog() {
  return (
    <PageContainer>
      <PageHeader
        title="Blog"
        subtitle="Ideas, practical guides, and the vision behind ward-level citizen associations."
      />

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link to={`/blog/${post.slug}`}>
              <img
                src={post.image}
                alt={post.title}
                className="mb-4 h-48 w-full rounded-lg object-cover grayscale transition group-hover:grayscale-0"
              />
              <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:underline dark:text-gray-100">
                {post.title}
              </h2>
            </Link>
            <p className="mb-1 text-sm text-gray-400 dark:text-gray-500">{post.date}</p>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">{post.description}</p>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}
