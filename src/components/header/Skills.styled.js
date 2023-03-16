import styled from "styled-components";
import { device } from "../device";

export const SkillsFlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  // padding-top: 26px;

  @media ${device.tablet} {
    padding-top: 50px;
  }
`;
export const SkillBox = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: white;
  padding: 5px 23px 5px 23px;
  background-color: #9f5dbe;
  width: min-content;
  border-radius: 5px;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;
