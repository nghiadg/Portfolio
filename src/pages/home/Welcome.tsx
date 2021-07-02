import * as React from "react";
import { IconEmail, IconGitHub, IconFileDownload } from "components/Icon";
import { PrimaryButton, SecondaryButton } from "components/Button";

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center pt-10">
      <div className="w-full lg:w-2/4">
        <span className="text-xl font-medium inline-block w-full">Hey!</span>
        <span className="text-3xl font-semibold inline-block w-full">
          I&apos;m <span className="text-primary">Duong Trong Nghia.</span>
        </span>
        <span className="text-3xl font-semibold line relative">
          an Software Engineer
        </span>
        <p>
          Fontend Software with ReactJs. I&apos;m learning React Native. If you
          are a business seeking a web presence, mobile application or an
          employer looking to hire, you can get in touch with me.
        </p>

        <div className="mt-3.2 text-md flex items-center mb-4.5">
          <span className="mr-3">Follow me</span>
          <ul>
            <li className="text-2xl cursor-pointer">
              <a
                href="https://github.com/nghiadg"
                target="_blank"
                rel="noreferrer"
              >
                <IconGitHub />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between flex-col sm:flex-row sm:justify-start">
          <a
            className="mb-2 sm:mb-0 sm:mr-3"
            href="mailto: nghiadt.dev@gmail.com"
          >
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
