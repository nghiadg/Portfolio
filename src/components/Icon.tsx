import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faEnvelope,
  faFileDownload,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface IconProps {
  icon: IconDefinition;
}
const Icon: React.FC<IconProps> = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} />;
};

export const IconGitHub: React.FC = () => {
  return <Icon icon={faGithub} />;
};

export const IconEmail: React.FC = () => {
  return <Icon icon={faEnvelope} />;
};

export const IconFileDownload: React.FC = () => {
  return <Icon icon={faFileDownload} />;
};

export const IconBars: React.FC = () => {
  return <Icon icon={faBars} />;
};

export const IconClose: React.FC = () => {
  return <Icon icon={faTimes} />;
};
export default Icon;
