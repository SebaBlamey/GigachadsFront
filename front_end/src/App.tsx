import React from "react";
import Navbar from "./Screens/Navbar";
import OffersNav from "./Screens/OffersNav";
import Carrousel from "./Screens/carrousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <OffersNav />
      <Carrousel />
    </div>
  );
}

export default App;
