import React from "react";
import { createRoot } from "react-dom/client";
import Head from "./src/components/Header";
import Search from "./src/components/Search";
import Body from "./src/components/Body";

const AppLayout = () => {
  return (
    <div>
      <Head />
      <Search />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
