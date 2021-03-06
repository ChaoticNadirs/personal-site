import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Image = styled(Img)`
  border-radius: 50%;
  border: 8px solid white;
  background-color: white;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
`;

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "red-chair.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Image
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="red chair"
    />
  );
};

export default Avatar;
