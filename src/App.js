import "./App.css";
import React, { useState } from "react";
import { MakeProduct } from "./components/productChain";

function App() {
  const [like, func] = useState(0);
  console.log(like, func());

  return (
    <>
      <h1>Hello Word</h1>
      <MakeProduct />
      <div>
        <button>лайк +</button>
        <button>лайк -</button>
      </div>
    </>
  );
}

export default App;
