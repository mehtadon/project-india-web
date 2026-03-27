import { useParams, Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import MarkdownRenderer from "../components/MarkdownRenderer";
import posts from "../data/posts";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageContainer>
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Post not found
          </h1>
          <Link to="/blog" className="text-gray-600 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            Back to blog
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Link
        to="/blog"
        className="mb-8 inline-block text-sm text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
      >
        &larr; Back to blog
      </Link>
      <img
        src={post.image}
        alt={post.title}
        className="mb-8 h-56 w-full rounded-lg object-cover"
      />
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>
      <p className="mb-10 text-sm text-gray-400 dark:text-gray-500">{post.date}</p>
      <MarkdownRenderer content={post.content} />
    </PageContainer>
  );
}
