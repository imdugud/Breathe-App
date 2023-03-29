import { useState } from "react";
import MainTitle from "./components/main-title/main-title.component";
import Circle from "./components/circle/circle.component";
import Preferences from "./components/preferences/preferences.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainTitle title="Test title" />
      <Circle />
      <Preferences />
    </div>
  );
}

export default App;
