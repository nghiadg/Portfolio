import * as React from "react";
import img from "assets/images/education.png";
import Wrapper from "components/Wrapper";

type Work = {
  companyName: string;
  position: string;
  timePeriod: string;
  description: string;
};

interface ExperienceProps {
  experiences: Array<Work>;
}
const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <>
      {experiences.map((work: Work) => (
        <Wrapper heading="Experience" key={work.timePeriod}>
          <div className="flex items-center">
            <img src={img} className="hidden lg:block mr-18" />
            <div className="flex justify-between">
              <div>
                <h3 className="text-primary text-xl mb-2 sm:mb4">
                  {work.timePeriod}
                </h3>
                <p className="text-2xl sm:text-3xl">
                  I worked at
                  <span className="text-primary">
                    &nbsp;{work.companyName}&nbsp;
                  </span>
                  with a position {work.position}.
                </p>
                <p className="text-2xl sm:text-3xl">{work.description}</p>
              </div>
            </div>
          </div>
        </Wrapper>
      ))}
    </>
  );
};

export default Experience;
