import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jumbotron from "react-bootstrap/Jumbotron"

const CoffeePage = () => (
  <Layout>
    <SEO title="Coffee ☕️" />
    <Jumbotron style={{background: "none"}}>
      <h1>Under construction 🚧</h1>
      <p>
        Coming soon!
      </p>
    </Jumbotron>
  </Layout>
)

export default CoffeePage
