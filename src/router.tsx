import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { client } from "./lib/apollo";
import { EventPage } from "./pages/Event";
import { SubscribePage } from "./pages/Subscribe";

export const Router = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SubscribePage />} />
          <Route path="/event/lesson/:slug" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
