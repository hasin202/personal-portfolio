import styled from "styled-components";

export const CardImg = styled.img`
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
  margin-bottom: 30px;
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

export const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
`;
