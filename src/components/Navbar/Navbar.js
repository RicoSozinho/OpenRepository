import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles.js';
import { Nav, NavbarContainer, NavLogo, NavIcon,
          MobileIcon, NavMenu, NavItem, NavLinks,
          NavItemBtn, NavBtnLink } from './Navbar.elements.js';



const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() =>{
    showButton();
  });

  window.addEventListener('resize', showButton);

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <IconContext.Provider value={{ color: "#fff"}}>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </IconContext.Provider>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/'>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/services'>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/products'>
                Products
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to='/sign-up'>
                  <Button primary>Sign Up</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/sign-up'>
                  <Button fontBig primary>Sign Up</Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </div>
  );
}

export default Navbar;
