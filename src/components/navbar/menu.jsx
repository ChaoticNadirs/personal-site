import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";
import { Link } from "react-scroll";
import getMenuItems from "./menu-items";

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

  a {
    cursor: pointer;
    color: ${(props) => props.theme.navbar.color};
    font-family: ${(props) => props.theme.typography.fonts.heading};
    font-size: 0.875rem;
    display: block;
    line-height: 1.5;
    padding: 0.5rem 0;
    text-transform: uppercase;
    text-decoration: none;

    :hover {
      color: ${(props) => props.theme.brand.primary};
    }

    ${(props) => props.theme.breakpoints.md} {
      padding: 0.5rem 1rem;

      :last-child {
        padding-right: 0;
      }
    }
  }

  a.active {
    color: ${(props) => props.theme.brand.primary};
  }
`;

const Menu = ({ isOpen }) => {
  const offset = -65;
  const duration = 500;

  const menuItems = getMenuItems();

  return (
    <StyledMenu active={isOpen}>
      <Links>
        {menuItems.map(({ id, to, text }) => {
          return (
            <Link
              key={id}
              activeClass="active"
              to={to}
              spy
              smooth
              offset={offset}
              duration={duration}
            >
              {text}
            </Link>
          );
        })}
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
