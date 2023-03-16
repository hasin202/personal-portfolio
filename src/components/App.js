import { FlexContainer, Body } from "./App.styled";
import Header from "./header";
import ProjectsContainer from "./projectsbody";
import Menu from "./menu";

const App = () => {
  return (
    <FlexContainer>
      <Body />
      <Menu />
      <Header />
      <ProjectsContainer />
    </FlexContainer>
  );
};

export default App;
