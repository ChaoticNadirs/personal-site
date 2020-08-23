import React from "react";
import styled from "styled-components";
import { arrayOf, shape, string } from "prop-types";
import Container from "../container/container";
import SectionHeading from "../typography/section-heading";
import BlogPostSummary from "./blog-post-summary";

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

const Blog = ({ posts }) => {
  return (
    <StyledSection id="blog">
      <Container>
        <SectionHeading text="Blog" />
        <Deck>
          {posts.map(({ node }) => {
            return (
              <BlogPostSummary
                key={node.slug}
                text={node.summary.summary}
                slug={node.slug}
                title={node.title}
                date={node.publishedAt}
                headerImage={node.headerImage}
              />
            );
          })}
        </Deck>
      </Container>
    </StyledSection>
  );
};

Blog.propTypes = {
  posts: arrayOf(
    shape({
      node: shape({
        title: string,
        slug: string,
        date: string,
        headerImage: shape({ fluid: shape({}), title: string }),
      }),
    })
  ).isRequired,
};

export default Blog;
