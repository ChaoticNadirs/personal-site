import React from "react";
import { graphql } from "gatsby";
import { string, shape } from "prop-types";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container/container";

const Header = styled(BackgroundImage)`
  background-color: ${(props) => props.theme.brand.primary};
  color: white;
  font-size: 3rem;
  padding: 9rem 0 8rem 0;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  background-position: center center;
  background-repeat: none;
  background-size: cover;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Heading = styled.div`
  position: relative;
`;

const Section = styled.section`
  background-color: ${(props) => props.theme.section.backgroundLight};
  color: ${(props) => props.theme.typography.colors.text};
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -1rem;
  padding-top: 2rem;

  ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ContentColumn = styled.div`
  padding: 0 1rem;

  ${(props) => props.theme.breakpoints.md} {
    width: 70%;
  }
`;

const InfoColumn = styled.div`
  padding: 0 1rem;

  ${(props) => props.theme.breakpoints.md} {
    width: 30%;
  }
`;

const Post = styled.div``;

const BlogPost = ({ data }) => {
  const { post } = data;
  return (
    <Layout>
      <SEO title={post.title} />
      <Header Tag="header" fluid={post.headerImage.fluid}>
        <Overlay />
        <Heading>Blog / Home</Heading>
      </Header>
      <Section>
        <Container>
          <Row>
            <ContentColumn>
              <Post>
                <h1>{post.title}</h1>
                {documentToReactComponents(post.content.json)}
              </Post>
            </ContentColumn>
            <InfoColumn />
          </Row>
        </Container>
      </Section>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: shape({
    post: shape({
      title: string.isRequired,
      content: shape({ json: string.isRequired }).isRequired,
      publishedAt: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedAt
      content {
        json
      }
      headerImage {
        title
        fluid(quality: 95) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
