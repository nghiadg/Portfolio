import * as React from "react";
import Wrapper from "components/Wrapper";

type SkillType = {
  name: string;
  logo: string;
};

interface SkillsProps {
  skills: Array<SkillType>;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Wrapper heading="Skills">
      <div className="flex items-center -ml-3 flex-wrap justify-center sm:justify-start">
        {skills.map((skill: SkillType) => (
          <img
            src={process.env.PUBLIC_URL + "/" + skill.logo}
            alt={skill.name}
            className="w-10 h-10 object-cover ml-3 mb-3"
            key={skill.name}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
