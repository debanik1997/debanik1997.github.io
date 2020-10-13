import React from "react"

import "../../../styles/project.css"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { Jumbotron, Row, Col } from "react-bootstrap"

const HCIPage = () => {
  const projects = [
    {
      name: "Paper-based prototyping and evaluation",
      year: "2020",
      url: "/projects/hci/assignment1",
      imageurl: "../../ptype.png",
      color: "#FFEFEF",
      desc:
        "Assignment 1 from 601.690",
    },
  ]

  return (
    <Layout>
      <SEO title="HCI" />
      <Row style={{ marginRight: 90 }}>
        <Col>
          <Jumbotron style={{ background: "none", paddingLeft: 60 }}>
            <h1 className="title">Human-Computer Interaction</h1>
          </Jumbotron>
        </Col>
      </Row>
          <div className="projectcontainer">
            {projects.map(project => {
              return (
                <a href={project.url}>
                  <div className="project">
                    <h1 href={project.url}>
                      <div
                        className="projectbackground"
                        style={{ backgroundColor: project.color }}
                      >
                        <img src={project.imageurl} className="projectimage" />
                      </div>
                    </h1>
                    <h1 href={project.url}>
                      <p className="projectname">
                        {project.name}
                        <br />
                      </p>
                    </h1>
                    <p className="projectdesc">{project.desc}</p>
                  </div>
                </a>
              )
            })}
          </div>
    </Layout>
  )
}

export default HCIPage
