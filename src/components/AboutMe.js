import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"
import thumbsUp from "../images/facebook.png"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const AboutMe = () => {
  return (
    <div>
      <Row>
        <Col xs={3}>
          <h3 className="secondary emphasis" style={{ marginTop: 60 }}>
            about
          </h3>
        </Col>
        <Col>
          <h3
            className="secondary"
            style={{ fontSize: 24, fontWeight: "normal", marginTop: 60 }}
          >
            Starting at
            <span style={{ fontWeight: "bold", color: "#3B5998" }}>
              &nbsp;Facebook NY&nbsp;
            </span>
            in July '21
            <span style={{ marginLeft: 10 }}>
              <Image style={{ marginBottom: 5 }} src={thumbsUp} />
            </span>
          </h3>
          <h3 className="secondary emphasis" style={{ marginTop: 6 }}>
            I’m passionate about seeing projects from start to finish, and love
            working cross-functionally across engineering and product. When I’m
            not coding, I enjoy photography, cooking, and discovering new coffee
            shops.
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
          <h3 className="secondary" style={{ marginTop: 40 }}>
            debanik1997@gmail.com
          </h3>
          <h3 className="secondary">4846249881</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <h3 className="secondary emphasis" style={{ marginTop: 40 }}>
            resume
          </h3>
        </Col>
        <Col>
          <h3 className="secondary" style={{ marginTop: 40 }}>
            <a
              href="https://drive.google.com/file/d/1wot3C2eAWQXjkwbh7tou0wx3oAcWqnst/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              dpurkayastha.pdf
            </a>
          </h3>
        </Col>
      </Row>
    </div>
  )
}

export default AboutMe