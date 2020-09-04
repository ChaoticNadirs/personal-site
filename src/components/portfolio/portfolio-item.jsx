import React from "react";
import styled from "styled-components";
import { string, arrayOf, shape } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

const StyledPorfolioItem = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-right: 10%;
  margin-bottom: 2rem;

  img {
    max-width: 100%;
    height: auto;
  }

  ${(props) => props.theme.breakpoints.lg} {
    width: 40%;
    margin-bottom: 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;

  h3 {
    margin-bottom: 1rem;
  }

  > a {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    display: block;

    ${(props) => props.theme.breakpoints.md} {
      margin-bottom: 2rem;
    }
  }

  > p {
    margin-bottom: 0;

    ${(props) => props.theme.breakpoints.md} {
      margin-bottom: 3rem;
    }
  }

  ${(props) => props.theme.breakpoints.lg} {
    width: 50%;
  }
`;

const TechList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: none;

  ${(props) => props.theme.breakpoints.md} {
    display: block;
  }

  li {
    display: inline-block;

    :not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

const PortfolioItem = ({ title, url, image, text, urlText, technologies }) => {
  return (
    <StyledPorfolioItem>
      <ImageContainer>
        <Img fluid={image.fluid} alt={title} />
      </ImageContainer>
      <TextContainer>
        <h3>{title}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {urlText}
        </a>
        <p>{text}</p>
        <TechList>
          {technologies.map((tech, i) => (
            // index is stable
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <FontAwesomeIcon icon={["fab", tech]} size="3x" fixedWidth />
            </li>
          ))}
        </TechList>
      </TextContainer>
    </StyledPorfolioItem>
  );
};

PortfolioItem.propTypes = {
  image: shape({}).isRequired,
  title: string.isRequired,
  url: string.isRequired,
  text: string.isRequired,
  urlText: string.isRequired,
  technologies: arrayOf(string).isRequired,
};

export default PortfolioItem;
