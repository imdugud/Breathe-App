import { useSelector } from "react-redux";
import { typesSelector } from "../../store/breathe-types/breathe-type.slice.js";
import TypeButton from "../type-button/type-button.component";

import { TypeButtonContainer } from "./buttons-container.styles";

const ButtonContainer = () => {
  const { breathTypes } = useSelector(typesSelector);

  return (
    <TypeButtonContainer>
      {breathTypes.map((type) => {
        return <TypeButton type={type} key={type.id} />;
      })}
    </TypeButtonContainer>
  );
};

export default ButtonContainer;
