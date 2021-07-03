import Wrapper from "components/Wrapper";
import * as React from "react";

const Thanks: React.FC = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center w-full">
        <span className="text-primary text-3xl text-center">
          Thank you for watching!
        </span>
      </div>
    </Wrapper>
  );
};

export default Thanks;
