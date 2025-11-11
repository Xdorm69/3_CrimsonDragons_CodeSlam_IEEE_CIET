import React from "react";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
};

export default MaxWidthWrapper;
