import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  line-height: 50px;
  padding: 0px 15px;
  background-color: #d43030;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin: auto 10px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const SelectedButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
