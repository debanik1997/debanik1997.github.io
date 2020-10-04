import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

import avatar from "../images/avatar_1.png"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import AboutMe from "../components/AboutMe"
import Timeline from "../components/Timeline"
import {timelineData} from "../constants"

var ReactRotatingText = require("react-rotating-text")

const IndexPage = () => {

  return (
    <Layout>
      <Row className="intro">
        <Col sm={4} className="avatar">
          <Image
            style={{ maxWidth: "100%", top: "10%", position: "absolute" }}
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
          <h3 className="location">
            Baltimore, MD
            <img
              alt="location"
              style={{ height: 20, width: 20, marginLeft: 3, marginTop: -1 }}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZEMDAzQTsiIGQ9Ik0yNTYsMEMxNTYuNjk4LDAsNzYsODAuNyw3NiwxODBjMCwzMy42LDkuMzAyLDY2LjMwMSwyNy4wMDEsOTQuNTAxbDE0MC43OTcsMjMwLjQxNA0KCWMyLjQwMiwzLjksNi4wMDIsNi4zMDEsMTAuMjAzLDYuOTAxYzUuNjk4LDAuODk5LDEyLjAwMS0xLjUsMTUuMy03LjJsMTQxLjItMjMyLjUxNkM0MjcuMjk5LDI0NC41MDEsNDM2LDIxMi40MDEsNDM2LDE4MA0KCUM0MzYsODAuNywzNTUuMzAyLDAsMjU2LDB6IE0yNTYsMjcwYy01MC4zOTgsMC05MC00MC44LTkwLTkwYzAtNDkuNTAxLDQwLjQ5OS05MCw5MC05MHM5MCw0MC40OTksOTAsOTANCglDMzQ2LDIyOC45LDMwNi45OTksMjcwLDI1NiwyNzB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTUwMDI3OyIgZD0iTTI1NiwwdjkwYzQ5LjUwMSwwLDkwLDQwLjQ5OSw5MCw5MGMwLDQ4LjktMzkuMDAxLDkwLTkwLDkwdjI0MS45OTENCgljNS4xMTksMC4xMTksMTAuMzgzLTIuMzM1LDEzLjMtNy4zNzVMNDEwLjUsMjcyLjFjMTYuNzk5LTI3LjU5OSwyNS41LTU5LjY5OSwyNS41LTkyLjFDNDM2LDgwLjcsMzU1LjMwMiwwLDI1NiwweiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
            />
          </h3>
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
          <AboutMe />
        </Col>
        <div id="scroll-down-icon">↓</div>
      </Row>
      <Row className="timeline">
        <Col>
          <Timeline timelineData={timelineData} />
        </Col>
      </Row>
      <Row id="food"></Row>
      <Row id="food"></Row>
    </Layout>
  )
}

export default IndexPage
