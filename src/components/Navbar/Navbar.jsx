import { useState } from "react";
import { getImageUrl } from "../../utils";
import "./nav-bar.scss";

const baseCls = "nav-bar";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderNavBarList = () => {
    return (
      <ul
        className={`${baseCls}__menuItems ${
          menuOpen && `${baseCls}__menuOpen`
        }`}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        {renderNavbarMenuItem()}
      </ul>
    );
  };

  const renderNavbarMenuItem = () => {
    return (
      <>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">Contact</a>
        </li>
      </>
    );
  };

  const renderMenuButton = () => {
    return (
      <div className={`${baseCls}__menu`}>
        <img
          className={`${baseCls}__menu-btn`}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        {renderNavBarList()}
      </div>
    );
  };

  const renderPortfolioText = () => {
    return (
      <a className={`${baseCls}__title`} href="/">
        Portfolio
      </a>
    );
  };

  return (
    <nav className={baseCls}>
      {renderPortfolioText()}
      {renderMenuButton()}
    </nav>
  );
};
export default Navbar;
