import { FlexContainer, Body } from "./App.styled";
import Header from "./header/header";
import Projects from "./projects/projects";
import Menu from "./menu/menu";
import Contact from "./contact/contact";

const App = () => {
  return (
    <>
      <FlexContainer>
        <Body />
        <Menu />
        <Header />
        <Projects />
        <Contact />
      </FlexContainer>
    </>
  );
};

export default App;
