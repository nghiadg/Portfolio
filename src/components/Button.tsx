import * as React from "react";

interface ButtonProps {
  icon?: React.ReactElement;
  className?: string;
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title, icon, className }) => {
  return (
    <button
      className={`h-5.5 px-2.2 rounded capitalize text-white font-bold min-w-55px ${className}`}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {title}
    </button>
  );
};

export const PrimaryButton: React.FC<ButtonProps> = ({
  className,
  ...props
}) => {
  return <Button {...props} className={`bg-primary ${className}`} />;
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <Button {...props} className={`border-2 border-primary ${className}`} />
  );
};

export default Button;
