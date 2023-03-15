import { HeaderContainer, Body, FlexContainer } from "./App.styled";
import HeaderBody from "./headerbody";
import Menu from "./menu";

const App = () => {
  return (
    <FlexContainer>
      <Body />
      <Menu />
      <HeaderContainer>
        <HeaderBody />
      </HeaderContainer>
    </FlexContainer>
  );
};

export default App;
