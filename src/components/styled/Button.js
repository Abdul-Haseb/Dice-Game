import styled from "styled-components";
export const Button = styled.button`
  min-width: 200px;
  min-height: 44px;
  padding: 10px 18px;
  background-color: black;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.4s background-color;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background-color;
  }
  &:active {
    box-shadow: 0 0 2px black;
    background-color: #252525;
    color: white;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: 0.3s background-color;
  }
  &:active {
    box-shadow: 0 0 2px black;
    background-color: #252525;
    color: white;
  }
`;
