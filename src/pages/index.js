import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

import avatar from "../images/avatar_1.png"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import AboutMe from "../components/AboutMe"

var ReactRotatingText = require("react-rotating-text")

const IndexPage = () => (
  <Layout>
    <Row className="intro">
      <Col sm={4} className="avatar">
        <Image
          style={{ maxWidth: "100%", top: "25%", position: "absolute" }}
          src={avatar}
        />
      </Col>
      <Col className="content">
        <h1 className="title">
          <span className="wave" role="img" aria-label="wave">
            👋
          </span>
          <span className="line">, Debanik here.</span>
        </h1>
        <div style={{ textAlign: "right" }}>
          <h2 className="subtitle">
            I'm &nbsp;
            <ReactRotatingText
              className="typing"
              style={{ marginLeft: -4 }}
              items={[
                "a software engineer.",
                "an entrepreneur.",
                "a student.",
                "a dream chaser.",
              ]}
            />
          </h2>
        </div>
        <AboutMe />
      </Col>
    </Row>
    {/* <Row id="#projects">

    </Row>
    <Row id="food">

    </Row> */}
  </Layout>
)

export default IndexPage
