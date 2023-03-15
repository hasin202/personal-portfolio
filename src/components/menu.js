import {
  HamburgerButton,
  MenuContainer,
  NavBar,
  RelativeContainer,
} from "./App.styled";
import { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const log = () => {
    setMenuOpen((prev) => !prev);
    console.log(menuOpen);
  };
  return (
    <>
      <MenuContainer>
        <HamburgerButton onClick={log}>
          <div className={menuOpen ? "change" : ""}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </HamburgerButton>
        {menuOpen ? (
          <NavBar>
            <div>Resume</div>
            <div>LinkedIn</div>
            <div>GitHub</div>
            <div>Contact</div>
          </NavBar>
        ) : (
          <></>
        )}
      </MenuContainer>
    </>
  );
};
export default Menu;
