import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export const EventPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="fixed top-0 z-10" />
      <main className="flex flex-1 pt-[4.688rem]">
        <Video lessonSlug={slug} />
        <Sidebar />
      </main>
    </div>
  );
};
