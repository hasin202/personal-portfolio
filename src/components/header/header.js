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
        Software Engineer: Passionate about Building Responsive and Accessible
        Digital Experiences. Heres my current tech stack:
      </BasicText>
      <Skills />
    </HeaderContainer>
  );
};
export default Header;
