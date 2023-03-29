import TYPES from "../../types.json";
import ButtonContainer from "../buttons-container/buttons-container.component";
import CustomizeContainer from "../customize-container/customize-container.component";

import { PreferencesContainer } from "./preferences.styles";

const Preferences = () => {
  return (
    <PreferencesContainer>
      <ButtonContainer types={TYPES} />
      <CustomizeContainer />
    </PreferencesContainer>
  );
};

export default Preferences;
