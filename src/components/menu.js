import { HamburgerButton, MenuContainer, NavBar } from "./Menu.styled";
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
            <a href={CV} target="_blank">
              Resume
            </a>
            <a href="https://www.linkedin.com/in/hasin-mahmood/">LinkedIn</a>
            <a href="https://github.com/hasin202">GitHub</a>
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
