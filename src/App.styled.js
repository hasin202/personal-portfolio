import styled from "styled-components"


export const StyledButton = styled.button`
  background-color: ${props=>props.bg ? props.bg : "black"};
  color:white;
  border:none;
  border-radius: 10px;
  font-size: 30px;
  padding: 20px 30px;
  &:hover {cursor:pointer}
`;
