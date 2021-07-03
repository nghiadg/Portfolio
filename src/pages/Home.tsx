import * as React from "react";
import Header from "components/Header";
import Welcome from "pages/home/Welcome";
import Container from "components/Container";
import Education from "pages/home/Education";
import Experience from "pages/home/Experience";
import Skills from "pages/home/Skills";
import Contact from "pages/home/Contact";
import Thanks from "pages/home/Thanks";
import { useFullPageScroll } from "hooks/useFullPageScroll";
import { resumeData } from "resumeData";
import { useRef } from "react";
import { IconArrowDown } from "components/Icon";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { translateY, isEndPage } = useFullPageScroll(containerRef);

  return (
    <div className="overflow-hidden h-screen" ref={containerRef}>
      <Container>
        <div className="hidden sm:block">
          <Header name={resumeData.info.name} />
        </div>
        <div
          style={{
            transform: `translateY(${`-${translateY}vh`})`,
          }}
          className="transition ease-in-out duration-1000"
        >
          <Welcome info={resumeData.info} />
          <Education educations={resumeData.educations} />
          <Experience experiences={resumeData.experiences} />
          <Skills skills={resumeData.skills} />
          <Contact info={resumeData.info} />
          <Thanks />
        </div>
      </Container>
      {!isEndPage && (
        <div className="fixed top-4 sm:top-1/2 right-2 border px-1 py-2.5 rounded-full opacity-50">
          <div className="transform animate-bounce">
            <IconArrowDown />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
