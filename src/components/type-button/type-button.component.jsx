import { useDispatch, useSelector } from "react-redux";
import { setCurrentType, typesSelector } from "../../store/breathe-types/breathe-type.slice.js";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "./../button/button.component";

const TypeButton = ({ type }) => {
  const { currentType } = useSelector(typesSelector);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setCurrentType(type));
  };

  return (
    <Button
      onClick={clickHandler}
      buttonType={
        currentType.id === type.id
          ? BUTTON_TYPE_CLASSES.selected
          : BUTTON_TYPE_CLASSES.base
      }
    >
      {type.title}
    </Button>
  );
};

export default TypeButton;
