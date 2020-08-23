import React from "react";
import styled from "styled-components";
import { string, shape } from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";
import dayjs from "dayjs";

const StyledBlogPostSummary = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.card.backgroundColor};
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  box-shadow: ${(props) => props.theme.card.shadow};

  ${(props) => props.theme.breakpoints.lg} {
    flex: 1 0 0%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Content = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
`;

const Header = styled.div`
  overflow: hidden;
`;

const HeaderImage = styled(Img)`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.25);
  }
`;

const Date = styled.p`
  color: ${(props) => props.theme.typography.colors.textEmphasis};
`;

const ReadMoreLink = styled(Link)`
  font-weight: bold;
  text-transform: uppercase;
`;

const BlogPostSummary = ({ title, slug, text, date, headerImage }) => {
  const url = `/blog/${slug}/`;
  return (
    <StyledBlogPostSummary>
      <Header>
        <Link to={url}>
          <HeaderImage fluid={headerImage.fluid} alt={headerImage.title} />
        </Link>
      </Header>
      <Content>
        <h3>{title}</h3>
        <Date>{dayjs(date).format("DD MMM YYYY")}</Date>
        <p>{text}</p>
        <ReadMoreLink to={url}>Read more</ReadMoreLink>
      </Content>
    </StyledBlogPostSummary>
  );
};

BlogPostSummary.propTypes = {
  title: string.isRequired,
  slug: string.isRequired,
  text: string.isRequired,
  date: string.isRequired,
  headerImage: shape({ fluid: shape({}).isRequired }).isRequired,
};

export default BlogPostSummary;
