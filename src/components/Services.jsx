import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Web Design",
      desc: " specialize in crafting visually appealing and user-friendly websites that engage and captivate visitors. Whether it's a personal blog or a corporate site, my designs are tailored to leave a lasting impression.",
      icon: "fas fa-desktop",
    },
    {
      name: "UI/UX Design",
      desc: "I'm dedicated to enhancing user experiences by creating intuitive and aesthetically pleasing interfaces. From wireframing to interactive prototypes, I ensure that every interaction feels seamless and user-centric.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Web Development",
      desc: "With expertise in web development, I transform concepts into fully functional web applications. From front-end to back-end, my coding skills bring digital ideas to life, delivering dynamic and responsive web solutions.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Software Development",
      desc: "As a software developer, I specialize in crafting robust solutions for intricate challenges. My problem-solving approach, combined with a deep understanding, ensures that every project meets its objectives efficiently.",
      icon: "fas fa-chart-area",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
