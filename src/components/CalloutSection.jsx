export default function CalloutSection({ title, description, children }) {
  return (
    <section className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {description && <p className="mb-5 text-gray-600 dark:text-gray-400">{description}</p>}
      {children}
    </section>
  );
}
