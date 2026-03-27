export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose prose-gray max-w-none">
      {content
        .trim()
        .split("\n\n")
        .map((block, i) => {
          const trimmed = block.trim();
          if (!trimmed) return null;

          if (trimmed.startsWith("## ")) {
            return (
              <h2
                key={i}
                className="mb-3 mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100"
              >
                {trimmed.replace("## ", "")}
              </h2>
            );
          }

          if (trimmed.startsWith("- ")) {
            const items = trimmed.split("\n").map((l) => l.replace(/^- /, ""));
            return (
              <ul key={i} className="mb-4 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
                {items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          }

          if (/^\d+\. /.test(trimmed)) {
            const items = trimmed.split("\n").map((l) => l.replace(/^\d+\. /, ""));
            return (
              <ol key={i} className="mb-4 list-decimal space-y-1 pl-6 text-gray-600 dark:text-gray-400">
                {items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            );
          }

          return (
            <p key={i} className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
              {trimmed}
            </p>
          );
        })}
    </div>
  );
}
