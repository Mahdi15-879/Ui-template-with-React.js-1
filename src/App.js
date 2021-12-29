import React from "react";

import Header from "./Header";
import Ability from "./Ability";
import Chapter from "./Chapter";
import TargetReaders from "./TargetReaders";
import Reviews from "./Reviews";
import Contact from "./Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Ability />
      <Chapter />
      <TargetReaders />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
