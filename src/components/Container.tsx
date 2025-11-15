import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`max-w-4xl w-full mx-auto py-12 md:py-20 px-4 md:px-6 lg:px-10 overflow-x-hidden`}>
      {children}
    </main>
  );
};
