import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { string } from "prop-types";

const StyledTechnology = styled.li`
  display: block;
  color: white;
  margin: 0 0.5rem;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Technology = ({ icon }) => {
  const size = "5x";

  return (
    <StyledTechnology>
      <FontAwesomeIcon icon={icon} size={size} fixedWidth />
    </StyledTechnology>
  );
};

Technology.propTypes = {
  icon: string.isRequired,
};

export default Technology;
