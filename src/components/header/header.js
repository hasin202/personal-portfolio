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
        A soon-to-be computer and internet engineering graduate keen on web
        development. These are some technologies I’m familiar with:
      </BasicText>
      <Skills />
    </HeaderContainer>
  );
};
export default Header;
