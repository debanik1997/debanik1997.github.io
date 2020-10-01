import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

import avatar from "../images/avatar_1.png"
import thumbsUp from "../images/facebook.png"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"

var ReactRotatingText = require("react-rotating-text")

const IndexPage = () => (
  <Layout>
    <Row>
      <Col style={{ marginTop: 82 }}>
        <Image src={avatar} />
      </Col>
      <Col style={{ marginTop: 115, marginRight: 50 }}>
        <h1 className="title">
          <span class="wave" role="img" aria-label="wave">
            &nbsp;👋
          </span>
          , debanik here
        </h1>
        <div style={{ textAlign: "right" }}>
          <h2 className="subtitle">
            i'm &nbsp;
            <ReactRotatingText
              className="typing"
              style={{ marginLeft: -4 }}
              items={[
                "a software engineer",
                "an entrepreneur",
                "a student",
                "a dream chaser",
              ]}
            />
          </h2>
        </div>
        <Row>
          <Col xs={3}>
            <h3 className="secondary emphasis" style={{ marginTop: 80 }}>
              about
            </h3>
          </Col>
          <Col>
            <h3
              className="secondary"
              style={{ fontSize: 24, fontWeight: "normal", marginTop: 80 }}
            >
              starting at{" "}
              <span style={{ fontWeight: "bold", color: "#3B5998" }}>
                &nbsp;facebook ny&nbsp;
              </span>{" "}
              in july '21
              <span style={{ marginLeft: 10, marginTop: -5 }}>
                <Image src={thumbsUp} />
              </span>
            </h3>
            <h3 className="secondary emphasis" style={{ marginTop: 6 }}>
              i’m passionate about seeing projects from start to finish, and
              love working cross-functionally across engineering and product.
              when i’m not coding, i enjoy photography, cooking, and discovering
              new coffee shops.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h3 className="secondary emphasis" style={{ marginTop: 40 }}>
              contact
            </h3>
          </Col>
          <Col>
            <h3 className="secondary" style={{ marginTop: 30 }}>
              debanik1997@gmail.com
            </h3>
            <h3 className="secondary">4846249881</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h3 className="secondary emphasis" style={{ marginTop: 30 }}>
              resume
            </h3>
          </Col>
          <Col>
            <a
              href="https://drive.google.com/file/d/1wot3C2eAWQXjkwbh7tou0wx3oAcWqnst/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="secondary"
              style={{ marginTop: 30 }}
            >
              dpurkayastha.pdf
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
