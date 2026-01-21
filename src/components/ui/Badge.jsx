export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-medium ${className}`}>
      {children}
    </span>
  );
}
