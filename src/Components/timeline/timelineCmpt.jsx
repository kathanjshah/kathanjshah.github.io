import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function TimelineCmpt(props) {
  const jobs = [
    {
      company: "OPAS Mobile",
      role: "Software Developer",
      duration: "Feb 2023 - Present",
      place: "St. John's, NL",
      discription: [
        "Led the transformation of the company's safety SaaS application into a fully functional Progressive Web App (PWA), ensuring offline capability, installability, and robust service worker integration.",
        "Directed the development and maintenance of the application, utilizing Apollo Client and ReactJS for the frontend, and Apollo Server and PostgreSQL for the backend.",
        "Designed an offline request handling system that queues mutations and processes them sequentially when users reconnect online, ensuring a seamless experience without data loss in case of subsequent network failures.",
        "Leveraged IndexedDB, the web browser database, to meticulously manage and segregate user data, ensuring data integrity, preventing overlap across application versions, and safeguarding user privacy.",
        "Utilized Apollo Client for caching to maintain data consistency and persistence for offline usage. Configured Product Fruits to create interactive user tours and enhance app features, improving user onboarding and engagement.",
        "Integrated AI functionalities by connecting to external APIs, processing user data, and delivering insightful results to enhance user experience.",
      ], 
    },
    {
      company: "Celtx / Backlight",
      role: "Web-Developer",
      duration: "Jan 2021 - Sept 2022",
      place: "St. John's, NL",
      discription: [
        "Implemented Full stack New User Authentication, and Designed landing page/Onboarding page.",
        "Integrated Google and Microsoft account sign up for new users.",
        "Participate in the design and technical choices that build a SaaS cloud-based product.",
        "Utilized JIRA to follow an Agile Software Development Process",
        "Worked on making the web apps work offline in chromium based browsers and periodically sync data.",
        "Improved Code reusability to efficiently create front-ends for customers.",
        "Migrated from old Google Closure library with .soy templeting into React JS.",
        "Executed unit tests to ensure code quality and prevent regression bugs from entering production environments.",
        "Used React Router for client-side routing and Axios for making asynchronous HTTP requests.",
      ],
    },
    {
      company: "Let's Talk Science",
      role: "Special Events Co-ordinator",
      duration: "Oct 2022 - present",
      place: "St. John's, NL",
      discription: [
        "Coordinated all membership events including banquets, concerts, special events and conferences",
        "Provided administrative support to the Development Directors.",
        "Created and maintained Slack network for internal use for smooth communication between teams in the organization.",
        "Produced Data Science graphs using Python libraries like Pandas and Seaborn.",
      ],
    },
    {
      company: "Canary Cycles",
      role: "Web Administrator",
      duration: "April 2019 - Sept 2020",
      place: "St. John's, NL",
      discription: [
        "Gained experience of basic HTML and JS by making a organized website.",
        "Developed communication skills by advising and speaking with customers.",
        "Grew management skills by arranging, decorating, and restocking Shop.",
      ],
    },
    {
      company: "MUN School Of Graduate Studies",
      role: "Recruitment and Retention Assistant",
      duration: "Jan 2020 – April 2020",
      place: "St. John's, NL",
      discription: [
        "Expanded my on-field knowledge about retention and recruitment of new people by learning to work with potential graduate students across the world.",
        "Succeeded in gathering raw data and turning into valuable article, and data frames for data science projects in future for School of Graduate Studies.",
      ],
    },
  ];

  const schools = [
    {
      uni: "Memorial University Of Newfoundland",
      edu: "Degree: Bachelor Of Science",
      major: "Major: Computer Science",
      duration: "Time: Jan 2019 - Dec 2022(expected)",
      grade: "GPA: 3.4/4",
      place: "St. John's, NL",
    },
  ];

  const jobscmpt = jobs.map((job) => {
    return (
      <TimelineItem position="alternate">
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ fontWeight: "bold" }}>
          {job.role}&nbsp;@&nbsp;{job.company}
          <p>{job.duration}</p>
          {job.discription.map((dis) => {
            return <p>{dis}</p>;
          })}
        </TimelineContent>
      </TimelineItem>
    );
  });
  const schoolscmpt = schools.map((school) => {
    return (
      <TimelineItem position="alternate">
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent style={{ fontWeight: "bold" }}>
        {school.uni}
        <p>{school.edu}</p>
        <p>{school.major}</p>
        <p>{school.duration}</p>
        <p>{school.grade}</p>
        <p>{school.place}</p>
      </TimelineContent>
    </TimelineItem>
    );
  }
  );

  return (
    <Timeline position="alternate">
      {props.isJob ? jobscmpt : schoolscmpt}
    </Timeline>
  );
}
