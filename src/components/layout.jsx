import React from "react";
import { node, bool } from "prop-types";
import { ThemeProvider } from "styled-components";
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
  faBootstrap,
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
  faChevronLeft,
  faChevronRight,
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
  faMoon,
  faChevronLeft,
  faChevronRight,
  faBootstrap
);

const Layout = ({ children, useScrollLinks }) => {
  const [colorScheme, toggleColorScheme] = useColorScheme();

  const theme = colorScheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar useScrollLinks={useScrollLinks} />
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
  children: node.isRequired,
  useScrollLinks: bool,
};

Layout.defaultProps = {
  useScrollLinks: false,
};

export default Layout;
