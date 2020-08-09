import React from "react";
import styled from "styled-components";
import SocialMedia from "../social-media/social-media";
import Container from "../container/container";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.footer};
  color: ${(props) => props.theme.colors.text};
  padding: 3rem 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
  }
`;

const Copyright = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Copyright>
          © Christian Coda {new Date().getFullYear()}. All rights reserved.
        </Copyright>
        <SocialMedia />
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
