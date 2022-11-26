import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Bottom from "./components/Bottom";
import { useTranslation } from "react-i18next";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Bottom />
    </div>
  );
}