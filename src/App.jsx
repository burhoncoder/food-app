import React from "react";
import { Header } from "./parts/Header";
import { Footer } from "./parts/Footer";
import { Routes } from "./routes.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes />
      </main>
      <Footer />
    </>
  );
};
