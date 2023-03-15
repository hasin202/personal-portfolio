import { HamburgerButton, MenuContainer, NavBar } from "./App.styled";
import { useState } from "react";
import CV from "../assets/hasinCV.pdf";

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
            <a href={CV} target="blank" target="_blank">
              Resume
            </a>
            <a>LinkedIn</a>
            <a>GitHub</a>
            <a>Contact</a>
          </NavBar>
        ) : (
          <></>
        )}
      </MenuContainer>
    </>
  );
};
export default Menu;
