import { CaretRight } from "phosphor-react";
import { ReactNode } from "react";

type CardActionProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const CardAction: React.FC<CardActionProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="h-36 bg-gray-700 rounded overflow-hidden flex w-max cursor-pointer hover:brightness-105 transition-all duration-300 border border-transparent hover:border-green-500">
      <div className="bg-green-500 flex items-center justify-center h-full px-6 ">
        {icon}
      </div>
      <div className="p-6 flex items-center">
        <div className="flex gap-2 flex-col w-80">
          <h4 className="text-gray-100 font-bold text-2xl">{title}</h4>
          <p className="text-gray-200 leading-6">{description}</p>
        </div>
        <CaretRight color="#81D8F7" size={24} />
      </div>
    </div>
  );
};
