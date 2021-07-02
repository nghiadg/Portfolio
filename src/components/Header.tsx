import * as React from "react";
import Menu from "components/header/Menu";
import Container from "./Container";

const Header: React.FC = () => {
  return (
    <div className="z-10 bg-dark fixed top-0 left-0 w-full">
      <Container className="flex justify-between items-center h-10">
        <span className="text-lg font-bold">Duong Trong Nghia</span>
        <Menu />
      </Container>
    </div>
  );
};

export default Header;
