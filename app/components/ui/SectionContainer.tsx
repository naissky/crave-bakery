import React from "react";

interface SectionContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  className = "",
  children,
}) => {
  return (
    <section
      className={`w-full py-10 px-4 md:py-20 md:px-20 flex flex-col gap-1 md:gap-10 justify-center items-center ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
