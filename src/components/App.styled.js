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

export const Heading = styled.h1`
  font-size: ${(props) => (props.size ? props.size : "30px")};
  font-weight: ${(props) => (props.weight ? props.weight : 100)};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: 0;
  padding: 0;
  margin-left: ${(props) => (props.left ? props.left : 0)};
  padding-bottom: ${(props) => props.bottom};
`;

export const Intro = styled.p`
  font-size: ${(props) => props.size};
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
