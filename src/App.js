import "./App.css";
//import React, { useState } from "react";
//import { MakeProduct } from "./components/productChain";

const TgWeb = window.Telegram.WebApp;

function App() {
  const CloseApp = () => {
    TgWeb.close();
    console.log(TgWeb);
  };

  return (
    <>
      <h1>Hello Word</h1>
      <button onClick={CloseApp}>close</button>
    </>
  );
}

export default App;
