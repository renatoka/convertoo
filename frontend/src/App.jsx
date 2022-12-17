import React from "react";
import Main from "./components/Main";
import Feature from "./components/Feature";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
        <Feature />
      </Layout>
    </div>
  );
}