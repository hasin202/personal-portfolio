import { HamburgerButton } from "./App.styled";
import { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const log = () => {
    setMenuOpen((prev) => !prev);
    console.log(menuOpen);
  };
  return (
    <>
      <HamburgerButton onClick={log}>
        {/* <div className={`bar1 ${menuOpen ? "change" : ""}`}></div>
        <div className={`bar2 ${menuOpen ? "change" : ""}`}></div>
        <div className={`bar3 ${menuOpen ? "change" : ""}`}></div> */}
        <div className={menuOpen ? "change" : ""}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </HamburgerButton>
    </>
  );
};
export default Menu;
