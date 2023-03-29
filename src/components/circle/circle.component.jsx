import { useContext } from "react";
import { MeditateContext } from "../../contexts/meditate.context";
import { CircleContainer, DurationTitle } from "./circle.styles";

const Circle = ({ duration, sequence }) => {
  const { isStarted, setIsStarted } = useContext(MeditateContext);

  const StartAnimateHandler = () => {
     setIsStarted(!isStarted); 
  };
  return (
    <CircleContainer>
      <DurationTitle onClick={StartAnimateHandler}>
        {sequence}
      </DurationTitle>
      {duration}
    </CircleContainer>
  );
};

export default Circle;
