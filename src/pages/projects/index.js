import React from "react"

import "../../styles/project.css"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Jumbotron, Row, Col } from "react-bootstrap"

const ProjectPage = () => {
  const projects = [
    {
      name: "Covaid",
      year: "2020",
      url: "https://www.covaid.co",
      imageurl: "../../covaid.png",
      color: "#FFEFEF",
      desc:
        "Covaid is a mutual aid platform that connects community volunteers with those who need support.",
    },
    // {
    //   name: "Fridge-To-Food",
    //   year: "2020",
    //   // url: "/projects/f2f",
    //   imageurl: "../../avatar_1.png",
    //   color: "#daecff",
    //   desc:
    //     'Fridge-To-Food is an iOS mobile app that answers the question: "What can I make with what\'s in my fridge?"',
    // },
    {
      name: "HCI",
      year: "2020",
      url: "/projects/hci",
      imageurl: "../../ptype.png",
      color: "#ffe5ae",
      desc:
        "I took Introduction to Human-Computer Interaction during fall '20. Heres some work I did.",
    },
    // {
    //   name: "HopStorage",
    //   year: "2019",
    //   // url: "/projects/hopstorage",
    //   imageurl: "../../avatar_1.png",
    //   color: "#d9f0eb",
    //   desc:
    //     "HopStorage is a full-stack web app I made during a software engineering course. Think AirBnb, but for storage needs.",
    // },
  ]

  return (
    <Layout>
      <SEO title="Projects 👨‍💻" />
      <Row style={{ marginRight: 90 }}>
        <Col>
          <Jumbotron style={{ background: "none", paddingLeft: 60 }}>
            <h1 className="title">Projects</h1>
            <h3 className="location">Some things I've worked on.</h3>
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

export default ProjectPage
