import { createContext, useState, useEffect, useContext } from "react";
import { MeditateContext } from "./meditate.context";
import BREATHE_TYPES from "../types.json";

export const BreatheTypesContext = createContext({
  setCurrentType: () => null,
  breathTypes: [],
  currentType: {},
  isStarted: false,
});

export const BreatheTypeProvider = ({ children }) => {
  const [breathTypes, setBreathTypes] = useState([]);
  const [currentType, setCurrentType] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  // const { resetMeditation } = useContext(MeditateContext);

  useEffect(() => {
    setBreathTypes(BREATHE_TYPES);
    setCurrentType(BREATHE_TYPES[0]);
  }, []);

  // useEffect(() => {
  //   resetMeditation(currentType.duration, currentType.sequence);
  // }, [currentType]);
  
  const value = {
    breathTypes,
    currentType,
    setCurrentType,
    isStarted,
    setIsStarted,
  };
  return (
    <BreatheTypesContext.Provider value={value}>
      {children}
    </BreatheTypesContext.Provider>
  );
};
