import { useSelector } from "react-redux";
import { typesSelector } from "./store/breathe-types/breathe-type.slice";
import MainTitle from "./components/main-title/main-title.component";
import Circle from "./components/circle/circle.component";
import Preferences from "./components/preferences/preferences.component";

import "./App.css";

function App() {
  const {currentType} = useSelector(typesSelector);
  const { title, duration, sequence } = currentType;

  return (
    <div className="App">
      <MainTitle title={title} />
      <Circle sequence={sequence} duration={duration} />
      <Preferences />
    </div>
  );
}

export default App;
