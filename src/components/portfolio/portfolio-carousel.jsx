import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioItem from "./portfolio-item";
import getPortfolioItems from "./portfolio-items";

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
  const [activeSlideId, setActiveSlideId] = useState(1);
  const portfolioItems = getPortfolioItems();

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
        {portfolioItems.map(
          ({ id, title, text, image, url, urlText, technologies }) => {
            return (
              <Slide key={id} active={activeSlideId === id}>
                <PortfolioItem
                  title={title}
                  text={text}
                  image={image}
                  url={url}
                  urlText={urlText}
                  technologies={technologies}
                />
              </Slide>
            );
          }
        )}
        <Arrow
          icon="chevron-right"
          size="2x"
          role="button"
          alt="next slide"
          onClick={() => handleArrowClick(1)}
        />
      </Carousel>
      <Dots>
        {portfolioItems.map(({ id }) => {
          return (
            <Dot
              key={id}
              onClick={() => setActiveSlideId(id)}
              role="button"
              active={activeSlideId === id}
            />
          );
        })}
      </Dots>
    </>
  );
};

export default PortfolioCarousel;
