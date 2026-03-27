import parseFrontmatter from "../lib/parseFrontmatter";

// Auto-imports every .md file in src/content/blog/ at build time.
// To add a new post, just drop a new .md file in that folder.
const modules = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const posts = Object.entries(modules)
  .map(([filepath, raw]) => {
    const slug = filepath.split("/").pop().replace(".md", "");
    const { attributes, body } = parseFrontmatter(raw);
    return {
      slug,
      title: attributes.title || slug,
      description: attributes.description || "",
      image: attributes.image || "",
      date: attributes.date || "",
      content: body,
    };
  })
  .sort((a, b) => (a.date > b.date ? -1 : 1));

export default posts;
