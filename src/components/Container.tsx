import * as React from "react";

interface ContainerProps {
  className?: string;
}
const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`container mx-auto px-2 sm:px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
