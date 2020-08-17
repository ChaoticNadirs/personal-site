import React from "react";
import styled from "styled-components";
import Container from "../container/container";
import SectionHeading from "../typography/section-heading";
import Testimonial from "./testimonial";
import getTestimonials from "./testimonial-items";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.section.backgroundDark};
  color: ${(props) => props.theme.typography.colors.text};
  padding: ${(props) => props.theme.spacing.lg} 0 3rem 0;
`;

const Deck = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.lg} {
    flex-flow: row wrap;
    margin: 0 -1rem;
  }
`;

const Testimonials = () => {
  const skills = getTestimonials();

  return (
    <StyledSection>
      <Container>
        <SectionHeading text="Testimonials" />
        <Deck>
          {skills.map(({ id, image, name, title, text }) => {
            return (
              <Testimonial
                key={id}
                image={image}
                title={title}
                name={name}
                text={text}
              />
            );
          })}
        </Deck>
      </Container>
    </StyledSection>
  );
};

export default Testimonials;
