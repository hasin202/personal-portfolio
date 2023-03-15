import { HeaderContainer, Body } from "./App.styled";
import HeaderBody from "./headerbody";
import Menu from "./menu";

const App = () => {
  return (
    <>
      <Body />
      <Menu />
      <HeaderContainer>
        <HeaderBody />
      </HeaderContainer>
    </>
  );
};

export default App;
