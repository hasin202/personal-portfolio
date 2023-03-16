import styled, { createGlobalStyle } from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 52px 50px 52px;
`;

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
    box-sizing: border-box;
  }
`;

export const SectionHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
`;
