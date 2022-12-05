import React from "react";
import Main from "./components/Main";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}