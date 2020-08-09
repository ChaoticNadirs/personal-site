import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";

const StyledMenu = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  align-items: center;
  width: 100%;

  ${(props) => props.theme.breakpoints.md} {
    display: flex;
    width: auto;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
  }
`;

const NavItem = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.navbarText};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 0.875rem;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0;
  text-transform: uppercase;
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.colors.primary};
  }

  ${(props) => props.theme.breakpoints.md} {
    padding: 0.5rem 1rem;

    :last-child {
      padding-right: 0;
    }
  }
`;

const Menu = ({ isOpen }) => {
  return (
    <StyledMenu active={isOpen}>
      <Links>
        <NavItem>Home</NavItem>
        <NavItem>Profile</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Recommendations</NavItem>
      </Links>
    </StyledMenu>
  );
};

Menu.propTypes = {
  isOpen: bool,
};

Menu.defaultProps = {
  isOpen: false,
};

export default Menu;
