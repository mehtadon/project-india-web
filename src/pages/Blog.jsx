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

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group flex gap-6">
            <Link to={`/blog/${post.slug}`} className="shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="h-32 w-44 rounded-lg object-cover grayscale transition group-hover:grayscale-0"
              />
            </Link>
            <div className="flex flex-col justify-center">
              <Link to={`/blog/${post.slug}`}>
                <h2 className="mb-1 text-xl font-semibold text-gray-900 group-hover:underline dark:text-gray-100">
                  {post.title}
                </h2>
              </Link>
              <p className="mb-1 text-sm text-gray-400 dark:text-gray-500">{post.date}</p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}
