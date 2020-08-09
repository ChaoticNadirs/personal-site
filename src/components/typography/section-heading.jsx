import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

const StyledHeading = styled.h2`
  margin: 0;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  line-height: 1.2;

  ${(props) => props.theme.breakpoints.md} {
    font-size: 4rem;
  }
`;

const SectionHeading = ({ text }) => {
  return <StyledHeading>{text}</StyledHeading>;
};

SectionHeading.propTypes = {
  text: string.isRequired,
};

export default SectionHeading;
