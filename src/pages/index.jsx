import React from "react";
import { graphql } from "gatsby";
import { shape, arrayOf, string } from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import Skills from "../components/skills/skills";
import Technologies from "../components/technologies/technologies";
import Portfolio from "../components/portfolio/portfolio";
import Testimonials from "../components/testimonials/testimonials";
import Blog from "../components/blog/blog";

const IndexPage = ({ data }) => (
  <Layout useScrollLinks>
    <SEO title="Christian Coda - Software Engineer" />
    <Intro />
    <About />
    <Skills />
    <Technologies />
    <Blog posts={data.blogPosts.edges} />
    <Portfolio />
    <Testimonials />
  </Layout>
);

IndexPage.propTypes = {
  data: shape({
    blogPosts: shape({
      edges: arrayOf(shape({ node: shape({ title: string, slug: string }) })),
    }),
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    blogPosts: allContentfulBlogPost(
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          publishedAt
          title
          slug
          summary {
            summary
          }
          headerImage {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
