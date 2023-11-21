import {
  HeaderContainer,
  Heading,
  SubHeading,
  RelativeContainer,
  Signature,
} from "./Header.styled";

import { BasicText } from "../App.styled";
import Skills from "./skills";
import signature from "../../assets/sign.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <SubHeading>Hi I'm</SubHeading>
      <RelativeContainer>
        <Heading>Hasin.</Heading>
        <Signature src={signature} />
      </RelativeContainer>
      <BasicText>
        A recently graduated software engineer keen on web development thats
        always making small projects to keep myself busy. Heres some of the tech
        I've been working with recenetly:
      </BasicText>
      <Skills />
    </HeaderContainer>
  );
};
export default Header;
