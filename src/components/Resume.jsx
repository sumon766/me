import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2023",
      title: "Full Stack Web Development Program",
      place: "Microverse, CA, USA (Full Time - Remote)",
      desc: "Spent 1300+ hours mastering algorithms, data structures, and full-stack development with Ruby, Rails, JavaScript, React, and Redux. Gained remote pair programming experience using GitHub, gitflow, linters, and daily standups to collaborate with global teams."
    },
    {
      yearRange: "2011-2014",
      title: "Graduation",
      place: "University of Information Technology & Sciences",
      desc: "I pursued my Graduation at the University of Information Technology & Sciences in Dhaka, where I gained a solid foundation in cutting-edge technology and computer science."
    },
    {
      yearRange: "2008-2010",
      title: "Higher Secondary Certificate",
      place: "Rajshahi Court College",
      desc: "I completed my Higher Secondary Certificate at Rajshahi Court College, where I honed my academic skills and laid the groundwork for my future in technology."
    },
    {
      yearRange: "2008",
      title: "Secondary School Certificate",
      place: "River View High School",
      desc: "My journey began at River View High School, where I cultivated a passion for learning and established a strong academic foundation."
    },
  ];


  const experienceDetails = [
    {
      yearRange: "May 2024 - Present",
      title: "Full Stack Developer",
      place: "SoftTech, Dhaka (Remote)",
      desc: "Developed high-quality software systems using Laravel, leading feature development, API integrations, and full-stack collaboration. Utilized tools like Eloquent ORM and Artisan CLI to create scalable solutions in an agile environment, delivering impactful updates and meeting deadlines."
    },
    {
      yearRange: "Nov 2019 - Dec 2022",
      title: "Executive",
      place: "Telenor Health, Dhaka",
      desc: "Led collaboration between the tech and operations teams at Digital Healthcare Solutions, enhancing communication and increasing team productivity by 25%. Managed the entire lifecycle of insurance claims and provided valuable insights, improving web solution quality by 15%."
    },
    {
      yearRange: "Jun 2017 - Oct 2019",
      title: "Jr. Software Developer",
      place: "Desktop IT, Dhaka",
      desc: "Developed web applications using Laravel, boosting website traffic by 10% and enhancing conversion rates. Delivered customized WordPress solutions, optimized management software, and improved productivity by 15%."
    },
    {
      yearRange: "Apr 2015 - May 2017",
      title: "Frontend Developer",
      place: "NWIT Village, Rajshahi",
      desc: "Designed visually stunning, mobile-first UI's that increased user engagement and improved accessibility, resulting in a 25% boost in user reach. Led internal software interface development, and contributed increasing team productivity through training on web technologies."
    },
  ];


  const skills = [
    {
      name: "Laravel",
      percent: 75,
    },
    {
      name: "WordPress",
      percent: 60,
    },
    {
      name: "Ruby on Rails",
      percent: 60,
    },
    {
      name: "MySQL",
      percent: 85,
    },
    {
      name: "PostgreSQL",
      percent: 85,
    },
    {
      name: "Github",
      percent: 90,
    },
    {
      name: "JavaScript",
      percent: 70,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "HTML/CSS",
      percent: 90,
    },
    {
      name: "Bootstrap",
      percent: 95,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;