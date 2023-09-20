import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2015",
      title: "Graduation",
      place: "University of Information Technology & Sciences, Dhaka",
      desc: "I pursued my Graduation at the University of Information Technology & Sciences in Dhaka, where I gained a solid foundation in cutting-edge technology and computer science."
    },
    {
      yearRange: "2010",
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
      yearRange: "2017 - 2019",
      title: "Executive",
      place: "Telenor Health, Dhaka",
      desc: "As an Executive at Telenor Health in Dhaka, I played a key role in facilitating operations and supporting the team in achieving organizational excellence."
    },
    {
      yearRange: "2018 - 2019",
      title: "Jr. Web Developer",
      place: "Desktop IT, Dhaka",
      desc: "During my tenure as a Jr. Web Developer at Desktop IT in Dhaka, I contributed to web development projects, transforming ideas into functional and responsive web applications."
    },
    {
      yearRange: "2016 - 2018",
      title: "Jr. UI UX Designer",
      place: "NWIT, Dhaka",
      desc: "As a Jr. UI/UX Designer at NWIT in Dhaka, I collaborated on creating visually stunning and user-friendly interfaces, shaping digital experiences that captivated users."
    },
  ];


  const skills = [
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
      percent: 95,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
    
    {
      name: "Ruby",
      percent: 60,
    },
    {
      name: "Ruby on Rails",
      percent: 60,
    },
    {
      name: "RSPec",
      percent: 70,
    },
    {
      name: "CapyBara",
      percent: 60,
    },
    {
      name: "Github",
      percent: 70,
    },
    {
      name: "Gitflow",
      percent: 99,
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
