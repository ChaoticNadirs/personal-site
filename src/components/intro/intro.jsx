import React from "react";
import styled from "styled-components";

import backgroundVideo1080mp4 from "../../images/background-720.mp4";
import Avatar from "../avatar/avatar";

const StyledHeader = styled.header`
  height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
`;

const Content = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  font-weight: 700;
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.125rem;
  margin-bottom: 0;
`;

const Intro = () => {
  return (
    <StyledHeader>
      <BackgroundVideo muted autoPlay loop playsInline>
        <source src={backgroundVideo1080mp4} type="video/mp4" />
      </BackgroundVideo>
      <Content>
        <Avatar />
        <Heading>Christian Coda</Heading>
        <Subheading>Software Engineer</Subheading>
      </Content>
    </StyledHeader>
  );
};

export default Intro;
