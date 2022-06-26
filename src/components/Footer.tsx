import { HTMLAttributes } from "react";

export const Footer: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <footer className={`flex justify-center items-center ${className}`}>
      <p className="text-gray-100 text-sm border-t border-gray-600 w-full text-center pt-2">
        © 2020 - Rocketseat - Todos os direitos reservados.
      </p>
    </footer>
  );
};
