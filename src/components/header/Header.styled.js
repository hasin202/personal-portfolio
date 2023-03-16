import styled from "styled-components";
import { device } from "../device";

export const HeaderContainer = styled.header`
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    min-height: 80vh;
  }
`;

export const SubHeading = styled.h1`
  font-size: 30px;
  font-weight: 100;
  margin-left: -0.08em;
  margin-bottom: 11px;

  @media ${device.tablet} {
    font-size: 55px;
  }
`;

export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 900;
  color: #9f5dbe;
  margin-left: -0.06em;
  margin-bottom: 25px;

  @media ${device.tablet} {
    font-size: 110px;
    margin-bottom: 50px;
  }
`;

export const Signature = styled.img`
  width: 85px;
  height: 85px;
  position: absolute;
  top: -13px;
  left: 160px;

  @media ${device.tablet} {
    top: 22px;
    left: 309px;
    scale: 130%;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
`;
