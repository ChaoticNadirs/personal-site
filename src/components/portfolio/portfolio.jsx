import React from "react";
import styled from "styled-components";
import Container from "../container/container";
import SectionHeading from "../typography/section-heading";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spacing.lg} 0 2rem 0;
`;

const Portfolio = () => {
  return (
    <StyledSection>
      <Container>
        <SectionHeading text="Portfolio" />
      </Container>
    </StyledSection>
  );
};

export default Portfolio;
