import React from "react";
import styled from "styled-components";
import Container from "../container/container";
import SectionHeading from "../typography/section-heading";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spacing.lg} 0 2rem 0;
`;

const Blog = () => {
  return (
    <StyledSection>
      <Container>
        <SectionHeading text="Blog" />
      </Container>
    </StyledSection>
  );
};

export default Blog;
