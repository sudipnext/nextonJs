import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./Data/Data";

export default function App() {
  const cards = Data.map((item) => {
    return <Card {...item} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
