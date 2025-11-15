import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Wrap all divs with responsive constraints
    div: ({ children, className, ...props }: any) => (
      <div 
        className={`max-w-full overflow-x-hidden ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    ),
    // Ensure images are responsive
    img: ({ src, alt, className, ...props }: any) => (
      <img
        src={src}
        alt={alt}
        className={`max-w-full h-auto ${className || ''}`}
        {...props}
      />
    ),
    // Ensure pre/code blocks don't overflow
    pre: ({ children, className, ...props }: any) => (
      <pre
        className={`overflow-x-auto max-w-full ${className || ''}`}
        {...props}
      >
        {children}
      </pre>
    ),
    ...components,
  };
}
