import { useParams } from "react-router-dom";
import { useGetLessonsQuery } from "../graphql/generated";
import { CardLesson } from "./CardLesson";

export const Sidebar = () => {
  const { slug } = useParams();
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className="p-6 
      border-gray-600 
      border-l 
      flex 
      flex-col
      w-[21.75rem]
      bg-gray-700"
    >
      <h2 className="font-bold text-white text-2xl pb-6 border-gray-600 border-b">
        Cronograma das aulas
      </h2>

      <div className="flex flex-col gap-8 mt-8">
        {data?.lessons.map((lesson) => (
          <CardLesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
            isSelected={lesson.slug === slug}
          />
        ))}
      </div>
    </aside>
  );
};
