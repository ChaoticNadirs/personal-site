import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

const StyledHeading = styled.h2`
  margin: 0;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.1rem;

  ${(props) => props.theme.breakpoints.md} {
    font-size: 2.5rem;
  }
`;

const SectionHeading = ({ text }) => {
  return <StyledHeading>{text}</StyledHeading>;
};

SectionHeading.propTypes = {
  text: string.isRequired,
};

export default SectionHeading;
