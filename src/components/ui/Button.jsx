import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  to, 
  onClick, 
  disabled = false,
  isLoading = false,
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary',
    outline: 'border-2 border-primary bg-transparent hover:bg-primary hover:text-white text-primary focus:ring-primary',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-dark-lighter text-gray-800 dark:text-gray-200',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Disabled classes
  const disabledClasses = disabled 
    ? 'opacity-60 cursor-not-allowed' 
    : 'cursor-pointer';
  
  // Loading state
  const loadingState = isLoading ? 'relative text-transparent' : '';
  
  // Full width
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Loading state classes
  const loadingClasses = isLoading ? 'relative text-transparent' : '';
  
  // Combine all classes
  const classes = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${disabledClasses}
    ${loadingClasses}
    ${widthClasses}
    ${className}
  `;
  
  // Loading indicator
  const loadingIndicator = isLoading ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  ) : null;
  
  // If it's an external link
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
        {loadingIndicator}
      </a>
    );
  }
  
  // If it's a router link
  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        {...props}
      >
        {children}
        {loadingIndicator}
      </Link>
    );
  }
  
  // Regular button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
      {loadingIndicator}
    </button>
  );
};

export default Button;