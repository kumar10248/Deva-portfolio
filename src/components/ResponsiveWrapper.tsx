import React from 'react';

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`w-full max-w-full overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
};

// Wrapper for grid layouts
export const ResponsiveGrid: React.FC<ResponsiveWrapperProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 w-full max-w-full ${className}`}>
      {children}
    </div>
  );
};

// Wrapper for flex layouts
export const ResponsiveFlex: React.FC<ResponsiveWrapperProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-wrap gap-2 md:gap-3 w-full max-w-full ${className}`}>
      {children}
    </div>
  );
};
