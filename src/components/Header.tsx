import * as React from "react";
import Container from "components/Container";
interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="z-10 bg-dark fixed top-0 left-0 w-full">
      <Container className="flex justify-between items-center h-10">
        <span className="text-lg font-bold">{name}</span>
      </Container>
    </div>
  );
};

export default Header;
