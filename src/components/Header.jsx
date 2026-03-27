import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { SITE_NAME, NAV_LINKS } from "../config";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          {SITE_NAME}
        </Link>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-gray-900 dark:hover:text-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
