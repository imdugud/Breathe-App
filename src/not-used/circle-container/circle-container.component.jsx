import Circle from "../circle/circle.component";
import Counting from "../counting/counting.component";

const CircleContainer = () => {
  return (
    <div className="circle-container">
      <Circle />
      <Counting title="Start"/>
    </div>
  );
};

export default CircleContainer;
