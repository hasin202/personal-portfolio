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
        A software engineer: passionate about building responsive and accessible
        digital experiences. Heres my current tech stack:
      </BasicText>
      <Skills />
    </HeaderContainer>
  );
};
export default Header;
