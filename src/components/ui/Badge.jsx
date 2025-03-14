import React from 'react';

const Badge = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  // Base classes
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-light text-primary-dark',
    secondary: 'bg-secondary-light text-secondary-dark',
    success: 'bg-green-100 text-green-800 dark:bg-green-700/20 dark:text-green-400',
    danger: 'bg-red-100 text-red-800 dark:bg-red-700/20 dark:text-red-400',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700/20 dark:text-yellow-400',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-700/20 dark:text-blue-400',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700/20 dark:text-gray-400',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  // Combine all classes
  const classes = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${className}
  `;
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;