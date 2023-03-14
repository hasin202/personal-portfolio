import { Heading, Intro } from "./App.styled";
import Skills from "./skills";

const HeaderBody = () => {
  return (
    <>
      <Heading left="-0.08em" bottom="11px">
        Hi I'm
      </Heading>
      <Heading
        color="#9F5DBE"
        size="60px"
        weight="900"
        left="-0.06em"
        bottom="25px"
      >
        Hasin.
      </Heading>
      <Intro size="16px">
        A soon-to-be computer and internet engineering graduate keen on web
        development. These are some technologies I’m familiar with:
      </Intro>
      <Skills />
    </>
  );
};

export default HeaderBody;
