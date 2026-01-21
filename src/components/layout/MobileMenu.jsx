import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose, links, pathname }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <ul className="container mx-auto px-4 py-4 space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className={`block py-2 px-4 rounded-lg transition-colors ${
                pathname === link.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
