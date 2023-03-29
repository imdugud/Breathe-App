import { createContext, useState, useEffect } from "react";

export const MeditateContext = createContext({
  setIsStarted: () => null,
  setCurrentDuration: () => null,
  setSequence: () => null,
  resetMeditation: () => null,
  isStarted: false,
  intervalId: "",
  currentDuration: 0,
  currentSequence: 0,
  sequence: [],
});

export const MeditateProvider = ({ children }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState("");
  const [currentDuration, setCurrentDuration] = useState(0);
  const [currentSequence, setCurrentSequence] = useState(0);
  const [sequence, setSequence] = useState([]);

  useEffect(() => {
    if (isStarted) {
      setIntervalId(setInterval(() => {
        setCurrentDuration(currentDuration - 1);
        console.log(currentDuration, "duration");
      }, 1000))
    }else{
      clearInterval(intervalId);
      console.log("stopped");
      resetMeditation();
    }
  }, [isStarted]);

  const resetMeditation = (duration = 0, sequence = []) => {
    console.log("reset");
    clearInterval(intervalId);
    setCurrentDuration(duration);
    setCurrentSequence(sequence[0]);
    setIsStarted(false);
    setSequence(sequence);
  }

  const value = {
    isStarted,
    intervalId,
    currentDuration,
    currentSequence,
    sequence,
    setIsStarted,
    setSequence,
    setCurrentDuration,
  };
  return (
    <MeditateContext.Provider value={value}>
      {children}
    </MeditateContext.Provider>
  );
};
