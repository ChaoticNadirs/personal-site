/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
// import { useStaticQuery, graphql } from "gatsby";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faAws,
  faHtml5,
  faCss3,
  faDocker,
  faGitAlt,
  faJs,
  faSass,
  faReact,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCheck,
  faUsers,
  faCog,
  faCode,
  faDatabase,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import theme from "../themes/theme";
import GlobalStyle from "../themes/global-style";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

library.add(
  faGithub,
  faEnvelope,
  faLinkedin,
  faStackOverflow,
  faAws,
  faHtml5,
  faCss3,
  faDocker,
  faGitAlt,
  faJs,
  faSass,
  faReact,
  faMicrosoft,
  faCheck,
  faUsers,
  faCog,
  faCode,
  faDatabase,
  faWrench
);

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
