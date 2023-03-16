import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 18vh;
`;

export const SubHeading = styled.h1`
  font-size: 30px;
  font-weight: 100;
  margin-left: -0.08em;
  margin-bottom: 11px;
`;

export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 900;
  color: #9f5dbe;
  margin-left: -0.06em;
  margin-bottom: 25px;
`;

export const Signature = styled.img`
  width: 85px;
  height: 85px;
  position: absolute;
  top: -13px;
  left: 160px;
`;

export const RelativeContainer = styled.div`
  position: relative;
`;
