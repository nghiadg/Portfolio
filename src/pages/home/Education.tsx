import * as React from "react";
import img from "assets/images/education.png";
import Wrapper from "components/Wrapper";

type Education = {
  timePeriod: string;
  universityName: string;
  major: string;
  gpa: number;
  description: string;
};
interface EducationProps {
  educations: Array<Education>;
}
const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <>
      {educations.map((edu: Education) => (
        <Wrapper heading="Education" key={edu.universityName}>
          <div className="flex">
            <img src={img} className="hidden lg:block mr-18" />
            <div>
              <h3 className="text-primary text-xl mb-2 sm:mb4">
                {edu.timePeriod}
              </h3>
              <p className="text-3xl">
                I studied at the
                <span className="text-primary">&nbsp;{edu.universityName}</span>
                . My Major is {edu.major}. I graduated with
                <span className="text-primary"> a GPA of {edu.gpa}.</span>
              </p>
              <p>{edu.description}</p>
            </div>
          </div>
        </Wrapper>
      ))}
    </>
  );
};

export default Education;
