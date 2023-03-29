import { TitleContainer } from "./main-title.styles";

const MainTitle = ({ title }) => {
  return (
    <TitleContainer>
      <h2>{title}</h2>
    </TitleContainer>
  );
};

export default MainTitle;
