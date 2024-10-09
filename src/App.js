import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Content from "./components/Content";
import Taxonomy from "./components/Taxonomy";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Content />
      <Taxonomy />
      <Team />
    </div>
  );
}

export default App;
