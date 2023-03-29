import styled from "styled-components";
import { theme } from "../../styles/theme.styles";
const { dark, circleColor } = theme;

export const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px auto 50px auto;
  background-color: ${circleColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const DurationTitle = styled.span`
  font-size: 2em;
  color: ${dark};
`;
