import styled, { createGlobalStyle } from "styled-components";
export const Body = createGlobalStyle`
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    padding:0;
    margin:0 !important;
  }
  h1 {
    line-height: 0.8em
  }
  *{
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
`;
export const HeaderContainer = styled.header`
  min-height: 100vh;
  // background-color: #ddc1c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 52px 0 52px;
`;

export const SubHeading = styled.h1`
  font-size: 30px;
  font-weight: 100;
  margin: 0;
  padding: 0;
  margin-left: -0.08em;
  padding-bottom: 11px;
`;

export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 900;
  color: #9f5dbe;
  margin: 0;
  padding: 0;
  margin-left: -0.06em;
  padding-bottom: 25px;
`;

export const Intro = styled.p`
  font-size: 16px;
`;

export const SkillBox = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: white;
  padding: 5px 23px 5px 23px;
  background-color: #9f5dbe;
  width: min-content;
  border-radius: 5px;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  padding-top: 26px;
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
