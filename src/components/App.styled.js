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

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
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

export const ProjectsHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
`;

export const CardImg = styled.img`
  margin-top: 30px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  z-index: 2;
  // box-shadow: 0 -2px 5px #aaa;
  border-left: 0.5px solid #ddd;
  border-right: 0.5px solid #ddd;
  border-top: 0.5px solid #ddd;
`;

export const CardInfo = styled.div`
  width: 100%;
  border-left: 0.5px solid #ddd;
  border-right: 0.5px solid #ddd;
  border-bottom: 0.5px solid #ddd;
  background-color: white;
  padding: 20px 20px;
  border-radius: 0 0 5px 5px;
  // box-shadow: 0 2px 5px #aaa;
  p {
    margin-bottom: 20px;
  }
`;

export const CardHeading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ProjectSkills = styled.p`
  font-family: IBM Plex Mono;
  font-size: 14px;
  color: #868686;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

export const Icon = styled.img`
  margin-right: 10px;
`;
