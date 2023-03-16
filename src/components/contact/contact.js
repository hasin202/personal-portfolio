import {} from "./contact.styled";
import { SectionHeading, BasicText } from "../App.styled";
import { ContactFlexContainer, ContactLink } from "./contact.styled";

const Contact = () => {
  return (
    <>
      <SectionHeading>Get in touch</SectionHeading>
      <ContactFlexContainer>
        <BasicText align="center">
          If you’ve got any interesting opportunities or just want to say hi my
          inbox is always open.
        </BasicText>
        <ContactLink href="mailto: hasinmahmood01@gmail.com">
          Say Hi.
        </ContactLink>
      </ContactFlexContainer>
    </>
  );
};

export default Contact;
