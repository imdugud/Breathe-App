import { useContext } from "react";
import { BreatheTypesContext } from "../../contexts/breathe-types.context";
import TypeButton from "../type-button/type-button.component";

import { TypeButtonContainer } from "./buttons-container.styles";

const ButtonContainer = () => {
  const { breathTypes } = useContext(BreatheTypesContext);
  return (
    <TypeButtonContainer>
      {breathTypes.map((type) => {
        return <TypeButton type={type} key={type.id} />;
      })}
    </TypeButtonContainer>
  );
};

export default ButtonContainer;
