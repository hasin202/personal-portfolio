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
    background-color: #fffefe;

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
  font-weight: 900;
  padding-top: ${(props) => (props.padding ? props.padding : "30px")};
  margin-bottom: 30px;
`;

export const BasicText = styled.p`
  font-size: 16px;
  text-align: ${(props) => (props.align ? props.align : "left")};
`;
