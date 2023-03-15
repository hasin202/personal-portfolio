import { HamburgerButton, MenuContainer } from "./App.styled";
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
      </MenuContainer>
    </>
  );
};
export default Menu;
