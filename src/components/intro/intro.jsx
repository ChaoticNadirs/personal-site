import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import Avatar from "../avatar/avatar";
import ScrollIcon from "../scroll-icon/scroll-icon";

const Header = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: cover;
  height: 100vh;
  position: relative;
  text-align: center;

  :after {
    ${(props) => props.theme.breakpoints.xl} {
      background-attachment: fixed;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 90%;
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  font-weight: 700;

  ${(props) => props.theme.breakpoints.md} {
    font-size: 2.5rem;
  }
`;

const Subheading = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.125rem;
  margin-bottom: 0;

  ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }
`;

const StyledScrollIcon = styled(ScrollIcon)`
  margin-top: 5rem;
`;

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "waterfall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      desktopImage: file(relativePath: { eq: "lake.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ];

  return (
    <Header Tag="header" fluid={sources} backgroundColor="#040e18">
      <Overlay />
      <Content>
        <Avatar />
        <Heading>Christian Coda</Heading>
        <Subheading>Software Engineer</Subheading>
        <StyledScrollIcon />
      </Content>
    </Header>
  );
};

export default Intro;
