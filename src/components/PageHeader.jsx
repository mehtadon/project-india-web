export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      {subtitle && <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>}
    </div>
  );
}
