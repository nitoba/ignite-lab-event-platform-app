import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Lock } from "phosphor-react";
import { Link } from "react-router-dom";

type CardLessonProps = {
  title: string;
  availableAt: Date;
  slug: string;
  type: "live" | "class";
  isSelected: boolean;
};

export const CardLesson = ({
  title,
  slug,
  type,
  availableAt,
  isSelected,
}: CardLessonProps) => {
  const isAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE '•' dd 'de' LLLL '•' k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <Link
      to={isAvailable ? `/event/lesson/${slug}` : ""}
      className={`group ${!isAvailable && "cursor-not-allowed"}`}
    >
      <span className="font-bold text-base text-gray-300">
        {availableDateFormatted}
      </span>

      <div className="w-full">
        <div
          className={`mt-2 border rounded w-full relative ${
            isAvailable && "group-hover:border-green-700 transition-colors"
          }   ${
            isSelected ? "bg-green-500 border-green-500 " : "border-gray-600"
          }`}
        >
          {isSelected && (
            <span className="bg-green-500 w-3 h-3 rotate-45 block absolute translate-x-[-50%] bottom-[calc(50%_-_0.75rem_/2)]" />
          )}
          <div className="p-4 gap-4 flex flex-col w-full">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isAvailable ? (
                  <CheckCircle
                    className={`${isSelected ? "text-white" : "text-blue-500"}`}
                  />
                ) : (
                  <Lock className="text-orange-500" />
                )}
                <span
                  className={`font-medium text-sm ${
                    isAvailable && isSelected
                      ? "text-white"
                      : isAvailable
                      ? "text-blue-500"
                      : "text-orange-500"
                  }`}
                >
                  {isAvailable ? "Conteúdo liberado" : "Em breve"}
                </span>
              </div>
              <div
                className={`border rounded py-1 px-2 flex items-center justify-center text-xs font-bold ${
                  type === "live"
                    ? "border-green-300 text-green-300"
                    : "border-white text-white"
                }`}
              >
                {type}
              </div>
            </header>
            <h4
              className={`font-bold text-base ${
                isSelected ? "text-white" : "text-gray-200"
              }`}
            >
              {title}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};
