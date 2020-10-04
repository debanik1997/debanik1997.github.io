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
          <h3 className="secondary emphasis" style={{ marginTop: 45 }}>
            about
          </h3>
        </Col>
        <Col>
          <h3
            className="secondary"
            style={{
              fontWeight: "normal",
              marginTop: 45,
              fontSize: 24,
            }}
          >
            {/* Starting at
            <span style={{ fontWeight: "bold", color: "#3B5998" }}>
              &nbsp;Facebook NY&nbsp;
            </span>
            in July '21
            <span style={{ marginLeft: 10 }}>
              <Image style={{ marginBottom: 5 }} src={thumbsUp} />
            </span> */}
            I like making{" "}
            <span
              style={{
                backgroundColor: "#fe9260",
                color: "white",
                paddingRight: 3,
                paddingLeft: 3,
                paddingBottom: 2,
              }}
            >
              things
            </span>
          </h3>
          <h3
            className="secondary emphasis"
            style={{
              marginTop: 6,
              fontSize: 18,
              fontWeight: "lighter",
              lineHeight: 1.6,
            }}
          >
            {/* I’m passionate about seeing projects from start to finish, and love
            working cross-functionally across engineering and product. When I’m
            not coding, I enjoy photography, cooking, and discovering new coffee
            shops. */}
            I'm intrigued by design, technology, photography, traveling,
            armchair philosophy, artisan coffee, fabulous foods, and even better
            conversations. A software engineer by trade, I've built iOS apps, a
            COVID-19 community web platform, localization tools at{" "}
            <span style={{ color: "#0085CA", fontSize: 20 }}><strong>Medtronic</strong></span>, and integrity
            infrastructure at{" "}
            <span className="instagram">
              <strong>Instagram</strong>
            </span>
            . Drop me a note if you'd like to connect!
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <h3 className="secondary emphasis" style={{ marginTop: 30 }}>
            contact
          </h3>
        </Col>
        <Col>
          <h3 className="secondary" style={{ marginTop: 30 }}>
            debanik1997@gmail.com 📬
          </h3>
          <h3 className="secondary">4846249881 📲</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <h3 className="secondary emphasis" style={{ marginTop: 30 }}>
            resume
          </h3>
        </Col>
        <Col>
          <h3 className="secondary" style={{ marginTop: 30 }}>
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
