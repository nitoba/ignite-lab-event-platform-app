import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
  X,
} from "phosphor-react";
import { Button } from "./Button";
import { CardAction } from "./CardAction";
import { Footer } from "./Footer";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

type VideoProps = {
  lessonSlug?: string;
};

export const Video: React.FC<VideoProps> = ({ lessonSlug }) => {
  if (!lessonSlug) {
    return null;
  }

  const { data, loading, error } = useGetLessonBySlugQuery({
    variables: { slug: lessonSlug },
  });

  if (loading || !data) {
    return (
      <div className="flex justify-center items-center flex-1">
        <span>Loading...</span>
      </div>
    );
  }

  if (error || !data?.lesson) {
    return (
      <div className="flex flex-col justify-center items-center flex-1">
        <X size={64} color="#FF0000" />
        <span>Error to loading content with slug: {lessonSlug}</span>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player placeholder="Video here">
            <Youtube videoId={data?.lesson?.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 flex flex-col gap-6 max-w-[1100px] mx-auto">
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-100 font-bold text-2xl">
              {data?.lesson.title}
            </h1>
            <p className="text-gray-200 leading-7">
              {data?.lesson.description}
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Button
              link="https://www.youtube.com/watch?v=QH_X-_X-_XU"
              title="Comunidade no discord"
              variant="primary"
              icon={<DiscordLogo color="#FFF" size={24} />}
            />
            {data.lesson.challenge && (
              <Button
                link=""
                title="Acesse desafio"
                variant="outline"
                icon={<Lightning color="#81D8F7" size={24} />}
              />
            )}
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <img
            className="w-16 h-16 rounded-full border-2 border-blue-500"
            src={data?.lesson?.teacher?.avatarUrl}
            alt="profile teacher photo"
          />
          <div className="flex flex-col">
            <h4 className="text-gray-100 font-bold text-2xl">
              {data?.lesson?.teacher?.name}
            </h4>
            <span className="text-sm text-gray-100">
              {data?.lesson?.teacher?.bio}
            </span>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <CardAction
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            icon={<FileArrowDown color="#FFF" size={44} />}
          />

          <CardAction
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            icon={<Image color="#FFF" size={44} />}
          />
        </div>
      </div>
      <Footer className="p-6" />
    </div>
  );
};
