import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import PortfolioItem from "./portfolio-item";

const Carousel = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
  align-items: center;
`;

const Slide = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  animation-name: fade;
  animation-duration: 1s;
  margin: 0rem;

  ${(props) => props.theme.breakpoints.md} {
    margin: 0 3rem;
  }

  @keyframes fade {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
`;

const Arrow = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.typography.colors.text};
  cursor: pointer;
  transition: color 0.3s ease;
  display: none;

  :hover {
    color: ${(props) => props.theme.brand.primary};
  }

  ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;

const Dots = styled.div`
  text-align: center;
`;

const Dot = styled.span`
  cursor: pointer;
  height: 0.5rem;
  width: 2rem;
  margin: 0 0.125rem;
  border-radius: 0.25rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.active ? props.theme.brand.primary : props.theme.carousel.dotColor};

  :hover {
    background-color: ${(props) => props.theme.brand.primary};
  }
`;

const PortfolioCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      items: allContentfulPortfolioItem(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            title
            url
            urlText
            text {
              text
            }
            technologies
            order
            image {
              title
              fluid(quality: 95) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);

  const [activeSlideId, setActiveSlideId] = useState(1);
  const { edges: portfolioItems } = data.items;

  const handleArrowClick = (increment) => {
    const newIndex = activeSlideId + increment;
    if (newIndex === 0) {
      setActiveSlideId(portfolioItems.length);
    } else if (newIndex > portfolioItems.length) {
      setActiveSlideId(1);
    } else {
      setActiveSlideId(newIndex);
    }
  };

  return (
    <>
      <Carousel>
        <Arrow
          icon="chevron-left"
          size="2x"
          role="button"
          alt="previous slide"
          onClick={() => handleArrowClick(-1)}
        />

        {portfolioItems.map(({ node }) => {
          return (
            <Slide key={node.title} active={activeSlideId === node.order}>
              <PortfolioItem
                title={node.title}
                text={node.text.text}
                image={node.image}
                url={node.url}
                urlText={node.urlText}
                technologies={node.technologies}
              />
            </Slide>
          );
        })}
        <Arrow
          icon="chevron-right"
          size="2x"
          role="button"
          alt="next slide"
          onClick={() => handleArrowClick(1)}
        />
      </Carousel>
      <Dots>
        {portfolioItems.map(({ node }) => {
          return (
            <Dot
              key={node.title}
              onClick={() => setActiveSlideId(node.order)}
              role="button"
              active={activeSlideId === node.order}
            />
          );
        })}
      </Dots>
    </>
  );
};

export default PortfolioCarousel;
