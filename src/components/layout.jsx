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
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";
import GlobalStyle from "../themes/global-style";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import useColorScheme from "../themes/color-scheme";

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
  faWrench,
  faMoon
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

  const [colorScheme, toggleColorScheme] = useColorScheme();

  const theme = colorScheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar />
        <main>{children}</main>
        <Footer
          darkMode={colorScheme === "dark"}
          onDarkModeToggle={toggleColorScheme}
        />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
