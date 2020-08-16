import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

const StyledTestimonial = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 0.25rem;
  margin-bottom: 2rem;

  ${(props) => props.theme.breakpoints.lg} {
    flex: 1 0 0%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Content = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.textEmphasis};

  img {
    border-radius: 100%;
    height: 50px;
    margin-right: 1.5rem;
  }
`;

const Name = styled.div`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  margin-bottom: 0.25rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const JobTitle = styled.div``;

const Testimonial = ({ image, title, text, name }) => {
  return (
    <StyledTestimonial>
      <Content>
        <p>{text}</p>
        <Person>
          <img src={image} alt={name} />
          <div>
            <Name>{name}</Name>
            <JobTitle>{title}</JobTitle>
          </div>
        </Person>
      </Content>
    </StyledTestimonial>
  );
};

Testimonial.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  text: string.isRequired,
  name: string.isRequired,
};

export default Testimonial;
