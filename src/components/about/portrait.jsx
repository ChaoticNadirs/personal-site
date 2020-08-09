import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Image = styled(Img)`
  border: 8px solid white;
  background-color: white;
  margin-top: 8px;
  text-align: center;
`;

const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Image fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Portrait;
