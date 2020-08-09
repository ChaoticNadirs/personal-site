import React from "react";
import styled from "styled-components";
import getTechnologies from "./technology-items";
import Technology from "./technology";
import Container from "../container/container";
import background from "../../images/background-stowe.jpg";

const StyledTechnologies = styled.section`
  padding: 12rem 0 10rem 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: cover;
  background-attachment: fixed;
`;

const TechnologyList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  li {
    margin-bottom: 2rem;
  }
`;

const Technologies = () => {
  const technologies = getTechnologies();

  return (
    <StyledTechnologies>
      <Container>
        <TechnologyList>
          {technologies.map(({ id, icon }) => {
            return <Technology key={id} icon={icon} />;
          })}
        </TechnologyList>
      </Container>
    </StyledTechnologies>
  );
};

export default Technologies;
