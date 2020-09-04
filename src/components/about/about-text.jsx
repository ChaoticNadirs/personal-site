import React from "react";
import styled from "styled-components";
import SocialMedia from "../social-media/social-media";

const Paragraph = styled.p`
  :last-of-type {
    margin-bottom: 1.5rem;

    ${(props) => props.theme.breakpoints.xl} {
      margin-bottom: 3rem;
    }
  }
`;

const Subheading = styled.strong`
  color: ${(props) => props.theme.brand.primary};
  text-transform: uppercase;
  font-size: 1.875rem;
  margin-bottom: 1rem;
  display: block;
`;

const AboutText = () => {
  return (
    <>
      <Subheading>Christian Coda</Subheading>
      <Paragraph>
        Hi, I&apos;m Christian. I&apos;m a full stack software developer and
        team leader based in North West England. When I&apos;m not making web
        applications, I&apos;m running marathons or exploring the world.
      </Paragraph>
      <Paragraph>
        I have over 15 years of experience and a diverse skillset ranging from
        React &amp; Javascript, all the way to C#, NodeJS and dev-ops in AWS.
      </Paragraph>
      <Paragraph>
        What I enjoy most about the software world is the opportunity to be
        creative. Some of my most innovative developments have been{" "}
        <a
          href="http://worldwide.espacenet.com/searchResults?compact=false&amp;ST=advanced&amp;IN=christian+coda&amp;locale=en_EP&amp;DB=EPODOC"
          target="_blank"
          rel="noopener noreferrer"
        >
          patented
        </a>
        .
      </Paragraph>
      <SocialMedia />
    </>
  );
};

export default AboutText;
