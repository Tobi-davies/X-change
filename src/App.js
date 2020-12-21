import React from "react";
import "./App.css";
import Current from "./components/rate/current";
import Header from "./components/header/header";
import Animpage from "./components/anim-page/anim";
// import Rate from "./components/rate/rate";

function App() {
  return (
    <div className="App">
      {/* <Rate /> */}
      <Header />
      <Current />
      <Animpage />
    </div>
  );
}

export default App;
