import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

interface HeaderProps extends HTMLAttributes<HTMLBaseElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={`w-full p-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 ${className}`}
      {...props}
    >
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
};
