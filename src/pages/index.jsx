import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import Skills from "../components/skills/skills";
import Technologies from "../components/technologies/technologies";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Skills />
    <Technologies />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
