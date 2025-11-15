import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-base md:prose-lg max-w-none",
        "prose-headings:text-gray-900 dark:prose-headings:text-gray-100",
        "prose-headings:font-bold prose-headings:tracking-tight",
        "prose-p:text-gray-700 dark:prose-p:text-gray-300",
        "prose-p:leading-relaxed prose-p:text-sm md:prose-p:text-base",
        "prose-a:text-blue-600 dark:prose-a:text-blue-400",
        "prose-a:no-underline hover:prose-a:underline prose-a:break-words",
        "prose-strong:text-gray-900 dark:prose-strong:text-gray-100",
        "prose-strong:font-semibold",
        "prose-code:text-pink-600 dark:prose-code:text-pink-400",
        "prose-code:bg-gray-100 dark:prose-code:bg-gray-800",
        "prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded",
        "prose-code:font-mono prose-code:text-xs md:prose-code:text-sm",
        "prose-code:break-words",
        "prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950",
        "prose-pre:text-gray-100 prose-pre:border",
        "prose-pre:border-gray-700 dark:prose-pre:border-gray-800",
        "prose-pre:overflow-x-auto prose-pre:text-sm",
        "prose-ul:text-gray-700 dark:prose-ul:text-gray-300",
        "prose-ol:text-gray-700 dark:prose-ol:text-gray-300",
        "prose-li:text-gray-700 dark:prose-li:text-gray-300",
        "prose-li:marker:text-gray-500 dark:prose-li:marker:text-gray-400",
        "prose-blockquote:border-l-blue-500 dark:prose-blockquote:border-l-blue-400",
        "prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300",
        "prose-hr:border-gray-300 dark:prose-hr:border-gray-700",
        "prose-img:rounded-lg prose-img:shadow-lg",
        "prose-table:text-sm prose-table:overflow-x-auto"
      )}
    >
      {children}
    </div>
  );
}
