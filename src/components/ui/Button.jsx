import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  onClick, 
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
  ...props 
}) {
  const baseStyles = 'px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center text-sm sm:text-base';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
      {...props}
    >
      {children}
    </button>
  );
}
