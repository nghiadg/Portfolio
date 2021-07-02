import * as React from "react";
import Header from "components/Header";
import Welcome from "pages/home/Welcome";
import Container from "components/Container";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Welcome />
    </Container>
  );
};

export default Home;
