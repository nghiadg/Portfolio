import { IconEmail, IconGitHub } from "components/Icon";
import Wrapper from "components/Wrapper";
import * as React from "react";

type Info = {
  name: string;
  role: string;
  roleDescription: string;
  email: string;
  github: string;
};
interface ContactProps {
  info: Info;
}
const Contact: React.FC<ContactProps> = ({ info }) => {
  return (
    <Wrapper heading="Contact">
      <p className="text-3xl">
        Interested working with me?
        <span className="text-primary cursor-pointer">
          <a className="underline" href={`mailto: ${info.email}`}>
            <span className="mr-2">
              <IconEmail />
            </span>
            Send email
          </a>
        </span>
      </p>
      <span className="text-xl inline-block my-3">and</span>
      <p className="text-3xl">
        You can follow me on
        <span className="text-primary cursor-pointer">
          <a
            className="underline"
            href={info.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="mr-2">
              <IconGitHub />
            </span>
            Github
          </a>
        </span>
      </p>
    </Wrapper>
  );
};

export default Contact;
