import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  link?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  variant = "primary",
  link,
  ...props
}) => {
  return (
    <a
      href={link ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        h-14 w-full flex items-center 
        justify-center px-4 gap-2 
        text-center border rounded 
        font-bold text-sm hover:brightness-75 
        transition-all duration-200 
        uppercase ${
          variant === "primary"
            ? "bg-green-500 border-green-500 text-white"
            : "border-blue-500 text-blue-500"
        }`}
      {...props}
    >
      {icon}
      {title}
    </a>
  );
};
