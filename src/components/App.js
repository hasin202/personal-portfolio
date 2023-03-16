import { FlexContainer, Body } from "./App.styled";
import Header from "./header";
import Projects from "./projects";
import Menu from "./menu";

const App = () => {
  return (
    <FlexContainer>
      <Body />
      <Menu />
      <Header />
      <Projects />
    </FlexContainer>
  );
};

export default App;
