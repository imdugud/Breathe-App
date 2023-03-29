import { useContext, useState } from "react";
import { BreatheTypesContext } from "./contexts/breathe-types.context";

import MainTitle from "./components/main-title/main-title.component";
import Circle from "./components/circle/circle.component";
import Preferences from "./components/preferences/preferences.component";

import "./App.css";

function App() {
  const [currentDuration, setcurrentDuration] = useState(second)
  const { currentType } = useContext(BreatheTypesContext);
  const { title, duration, sequence } = currentType;

  return (
    <div className="App">
      <MainTitle title={title} />
      <Circle sequence={currentSequence} duration={currentDuration} />
      <Preferences />
    </div>
  );
}

export default App;
