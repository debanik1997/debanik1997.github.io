import React from "react"
import TimelineItem from "./TimelineItem"

import "../styles/timeline.css"

const Timeline = ({timelineData}) => {
  return (
    timelineData.length > 0 && (
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    )
  )
}

export default Timeline
