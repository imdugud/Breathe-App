import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  typesSelector,
  setIsRunning,
} from "../../store/breathe-types/breathe-type.slice";
import { CircleContainer, DurationTitle } from "./circle.styles";

const Circle = () => {
  const dispatch = useDispatch();
  const { isRunning, currentType } = useSelector(typesSelector);
  // const [intervalId, setIntervalId] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sequence, setSequence] = useState([]);
  const StartAnimateHandler = () => {
    dispatch(setIsRunning(true));
  };

  useEffect(() => {
    setDuration(currentType.duration);
    setSequence(currentType.sequence);
  }, [])


  //
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(duration);
      setDuration((duration) => duration - 1);
    }, 1000);

    if (!isRunning || duration <= 0) { 
      clearInterval(intervalId);
    }
    isRunning ? "resumeanimation" : "stopanimation"
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, duration]);
  

  return (
    <CircleContainer>
      <DurationTitle onClick={StartAnimateHandler}>
        {isRunning ? duration : "Start"}
      </DurationTitle>
    </CircleContainer>
  );
};

export default Circle;
