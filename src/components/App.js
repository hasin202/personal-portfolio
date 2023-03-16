import { FlexContainer, Body } from "./App.styled";
import HeaderBody from "./headerbody";
import ProjectsContainer from "./projectsbody";
import Menu from "./menu";

const App = () => {
  return (
    <FlexContainer>
      <Body />
      <Menu />
      <HeaderBody />
      <ProjectsContainer />
    </FlexContainer>
  );
};

export default App;
