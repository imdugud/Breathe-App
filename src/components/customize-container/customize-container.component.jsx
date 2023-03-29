import { useState } from "react";
import Button from "../button/button.component";
import CustomizeForm from "../customize-form/customize-form.component";

import { CustomizeTab } from "./customize-container.styles";

const CustomizeContainer = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const openSettingsHandler = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  return (
    <CustomizeTab>
      <Button onClick={openSettingsHandler}>Customize</Button>
      {isSettingsOpen && <CustomizeForm /> }
    </CustomizeTab>
  );
};

export default CustomizeContainer;
