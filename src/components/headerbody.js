import {
  HeaderContainer,
  Heading,
  SubHeading,
  RelativeContainer,
  Signature,
  Intro,
} from "./App.styled";
import Skills from "./skills";
import signature from "../assets/sign.svg";

const HeaderBody = () => {
  return (
    <HeaderContainer>
      <SubHeading>Hi I'm</SubHeading>
      <RelativeContainer>
        <Heading>Hasin.</Heading>
        <Signature src={signature} />
      </RelativeContainer>
      <Intro>
        A soon-to-be computer and internet engineering graduate keen on web
        development. These are some technologies I’m familiar with:
      </Intro>
      <Skills />
    </HeaderContainer>
  );
};
export default HeaderBody;
