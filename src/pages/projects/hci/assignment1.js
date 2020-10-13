import React from "react"

import "../../../styles/project.css"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { Jumbotron, Row, Col } from "react-bootstrap"

const HCIAssignment1 = () => {
  return (
    <Layout>
      <SEO title="Human Computer Interaction" />
      <Row style={{ marginRight: 90 }}>
        <Col>
          <Jumbotron style={{ background: "none", paddingLeft: 60 }}>
            <h1 className="title">Netflix Decision Paralysis</h1>
          </Jumbotron>
        </Col>
      </Row>
      <div style={{ marginRight: 90, paddingLeft: 60, paddingRight: 60 }}>
        <h2 className="subtitle emphasis">Design Focus and Problem Space 🚀</h2>
        <p className="regularText">
          We are all familiar with the all-too-common problem of Netflix
          Decision Paralysis. Imagine it’s a Friday night and your roommates and
          you have decided to spend the night in and watch a good movie
          together. Good thing you’re dad is still paying for your Netflix
          membership right? As you all sit down, grab your popcorn, and put
          Netflix on the TV, someone asks the traumatizing question: “What
          should we watch?”. Thus begins Netflix Decision Paralysis, where 30+
          minutes are spent debating movies vs. TV shows, genres, and actors. By
          the time some semblance of a decision is made, it’s already 10 p.m.
          and everyone decides it’s time for bed.
        </p>
        <p className="regularText">
          In this study, we are going to dig deeper into Netflix recommendation
          and understand why decision-making is so hard on the platform.
          Netflix, the industry standard for entertainment streaming, has over
          167.1 million subscribers worldwide, of which 61 million are based in
          the US. We will consider our primary user for this study an 18-34 year
          old US-based millenial/Gen-Z, who make up about 45% of all US viewers.
        </p>
        <p className="regularTextTitle highlight emphasis">Target User:</p>
        <p className="regularText">
          The subject for this study is a 23 year old male who occasionally uses
          streaming services such as Netflix, Hulu, Amazon Prime, etc. He is an
          effective user for this study because he does not watch a tremendous
          amount of Netflix TV, meaning he does not have a very extensive
          knowledge on the possible titles that are present within Netflix.
        </p>
        <h2 className="subtitle emphasis">Contextual Inquiry 🔎</h2>
        <p className="regularText">
          The contextual inquiry phase involved 2 different tasks that were all
          related to navigating the Netlifx UI. The first task is based on
          finding a piece of content given a genre of interest. The second task,
          on the other hand, is more open-ended. The goal of this second task is
          to highlight how a Netflix user navigates the platform when they don't
          have a specific idea of what they want to watch.
        </p>
        <p className="regularTextTitle highlight emphasis">
          Task 1: Find a comedy show
        </p>
        <p className="regularText">
          The subject noted that they used the top tabs of Netflix and the
          organized rows to make decisions when given a specific decision based
          on genre. Upon navigating to a focused set of shows that are comedy,
          however, the decsion making process becomes a bit more arbitrary. A
          key takeaway here is that{" "}
          <strong style={{ fontWeight: 200 }}>
            Netflix does a good job at segmenting content based on some
            categroization, but choosing something to watch from that narrowed
            list is still quite a challenge
          </strong>
          .
        </p>
        <p className="regularTextTitle highlight emphasis">
          Task 2: Find a show you'd actively consider watching right now
        </p>
        <p className="regularText">
          The purpose of this task was identify the struggle of making a
          decision on Netflix without any prior agenda about what you want to
          watch. The most important takeaway here was the the subject felt that
          more often than not they would get frustrated of searching for a title
          to watch and end up switching to a different platform to explore other
          options.
        </p>
        <h2 className="subtitle emphasis">Sequential Models 🚶‍♂️</h2>
        <p className="regularText">
          The 2 sequential models below represent the sequential flow by which
          the subject navigated the above tasks. The start of the task is
          denoted in black, each consecutive step is denoted in blue, and the
          breakdowns are denoted in red.
        </p>
        <img
          src={"../../../seqmodel1.jpg"}
          style={{ maxHeight: 600 }}
          className="projectimage"
        />
        <img
          src={"../../../seqmodel2.jpg"}
          style={{ maxHeight: 600 }}
          className="projectimage"
        />
        <p className="regularTextTitle highlight emphasis">Key Takeaways</p>
        <p>
          From the contextual inquiry phase, we can deduce 3 main takeaways:
          <ul style={{ marginLeft: 30 }}>
            <li>
              User has a relatively short attention span when it comes to
              choosing a title on Netflix
            </li>
            <li>
              Netflix recommendations are fine, but users value recommendations
              from their friends much more
            </li>
            <li>
              Netflix has no social component to it, making in-app sharing not
              possible
            </li>
          </ul>
        </p>
        <h2 className="subtitle emphasis">Paper-based Prototype 🔨</h2>
        <p className="regularText">
          Using Google Slides, I designed a low-fidelity prototype that attempts
          to address the key takeaways from the contextual inquiry. The primary
          improvement stems from an added social component to the user
          experience. The goal is that users can make watching decisions based
          on what their friends are watching and they can recommend media to
          their friends as well.
        </p>
        <img
          src={"../../../proto1.png"}
          style={{ maxHeight: 400, marginBottom: 25 }}
          className="projectimage"
        />
        <img
          src={"../../../proto2.png"}
          style={{ maxHeight: 400, marginBottom: 25 }}
          className="projectimage"
        />
        <img
          src={"../../../proto3.png"}
          style={{ maxHeight: 400, marginBottom: 25 }}
          className="projectimage"
        />
        <h2 className="subtitle emphasis">Prototype Evaluation 🎈</h2>
      </div>
    </Layout>
  )
}

export default HCIAssignment1
