import { Link } from "react-router-dom";

const styles = {
  primary:
    "inline-block rounded-md bg-gray-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300",
  secondary:
    "inline-block rounded-md border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
};

export default function Button({ href, to, variant = "primary", children }) {
  const className = styles[variant];

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
