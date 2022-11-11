import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function AlternateTimeline() {
  return (
    <Timeline style={{ width: "100%" }} position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ fontWeight: "bold" }}>
          Web Developer @ Backlight
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ fontWeight: "bold" }}>
          Web Developer @ Celtx
          <p>
            <ul>
              <li>
                Implemented full stack new user authentication and Designed
                landing page/Onboarding page.
              </li>
              <li>
                Integrated Google and Microsoft account sign up for new users.
              </li>
              <li>
                Participate in the design and technical choices that build a
                SaaS cloud-based product.
              </li>
              <li>
                Utilized JIRA to follow an Agile Software Development Process
                Worked on making the web apps work offline in chromium based
                browsers and periodically sync data.
              </li>
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
          Web Administrator & Sales Associate @ Canary Cycle
          <p>
            <ul>
              <li>Gained experience in making a well-organized website.</li>
              <li>
                Developed communication skills by advising and speaking with
                customers and colleagues.
              </li>
              <li>
                Grew management skills by arranging, decorating, and restocking
                Shop.
              </li>
            </ul>
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
