import Button from "../button/button.component";

import { TypeButtonContainer } from "./buttons-container.styles";

const ButtonContainer = ({ types }) => {
  return (
    <TypeButtonContainer>
      {types.map((type) => {
        return <Button key={type.id}>{type.title}</Button>;
      })}
    </TypeButtonContainer>
  );
};

export default ButtonContainer;
