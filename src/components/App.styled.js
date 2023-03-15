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
    box-sizing: border-box;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 52px 0 52px;
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  margin-top: 50px;
`;

export const HeaderContainer = styled.header`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
export const SkillsFlexContainer = styled.div`
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

export const HamburgerButton = styled.button`
  border: none;
  background-color: #fff;
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
    background-color: #9f5dbe;
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
  }
`;

export const NavBar = styled.div`
  width: 100%;
  border: 0.5px solid #cccccc;
  background-color: white;
  position: relative;
  border-radius: 8px;
  padding: 23px 15px;
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 8px;
  margin-top: 45px;
  z-index: 2;

  div {
    font-size: 14px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    font-weight: 700;
  }
`;
