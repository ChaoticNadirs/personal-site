import React from "react";
import styled from "styled-components";
import Container from "../container/container";
import SectionHeading from "../typography/section-heading";
import PortfolioCarousel from "./portfolio-carousel";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.section.backgroundLight};
  color: ${(props) => props.theme.typography.colors.text};
  padding: ${(props) => props.theme.spacing.lg} 0;
`;

const Portfolio = () => {
  return (
    <StyledSection id="portfolio">
      <Container>
        <SectionHeading text="Portfolio" />
        <PortfolioCarousel />
      </Container>
    </StyledSection>
  );
};

export default Portfolio;
