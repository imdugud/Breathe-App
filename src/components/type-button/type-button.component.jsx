import { useContext } from "react";
import { BreatheTypesContext } from "../../contexts/breathe-types.context";
import Button from "../button/button.component";

const TypeButton = ({ type }) => {
  const { setCurrentType } = useContext(BreatheTypesContext);
  const clickHandler = () => {
    console.log("clicked");
    setCurrentType(type);
  };
  return <Button onClick={clickHandler}>{type.title}</Button>;
};

export default TypeButton;
