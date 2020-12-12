import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="font-mont font-thin">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default Home
