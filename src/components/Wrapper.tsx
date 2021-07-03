import * as React from "react";

interface WrapperProps {
  heading?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ heading, children }) => {
  return (
    <div className="h-screen w-full">
      <div className="w-full h-full flex flex-col justify-center">
        {heading && (
          <h2 className="text-primary text-2xl font-bold mb-1 sm:mb-5">
            {heading}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
