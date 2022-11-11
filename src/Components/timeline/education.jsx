import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function EducationTimeline() {
  return (
    <Timeline style={{ width: "100%" }} position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ fontWeight: "bold" }}>
          Memorial University Of Newfoundland
          <p>
            <ul>
              <li>Bachelor of Science</li>
              <li>Major in Computer Science</li>
            </ul>
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ fontWeight: "bold" }}>
          C.C. Shah High School
          <p>
            <ul>
              <li>Highschool Graduate Certificate</li>
              <li>Major in Applied Science</li>
            </ul>
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
