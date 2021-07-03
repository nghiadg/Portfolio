import * as React from "react";
import { IconEmail, IconGitHub, IconFileDownload } from "components/Icon";
import { PrimaryButton, SecondaryButton } from "components/Button";

type Info = {
  name: string;
  role: string;
  roleDescription: string;
  email: string;
  github: string;
};
interface WelcomeProps {
  info: Info;
}

const Welcome: React.FC<WelcomeProps> = ({ info }) => {
  return (
    <div className="h-screen flex items-center">
      <div className="w-full lg:w-2/4">
        <span className="text-xl font-medium inline-block w-full sm:text-3xl">
          Hey!
        </span>
        <h1 className="text-3xl font-semibold inline-block w-full sm:text-large">
          I&apos;m <span className="text-primary">{info.name}</span>
        </h1>
        <span className="text-3xl font-semibold relative">an {info.role}</span>
        <p className="mt-1">{info.roleDescription}</p>

        <div className="mt-3.2 text-md flex items-center mb-4.5">
          <span className="mr-3">Follow me</span>
          <ul>
            <li className="text-2xl cursor-pointer">
              <a href={info.github} target="_blank" rel="noreferrer">
                <IconGitHub />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between flex-col sm:flex-row sm:justify-start">
          <a className="mb-2 sm:mb-0 sm:mr-3" href={`mailto: ${info.email}`}>
            <PrimaryButton
              title="Email me"
              icon={<IconEmail />}
              className="w-full"
            />
          </a>
          <a href="cv.pdf" download="duongtrongnghia.pdf">
            <SecondaryButton
              title="Download CV"
              icon={<IconFileDownload />}
              className="w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
