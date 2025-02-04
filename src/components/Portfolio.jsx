import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    REACT: "React",
    RAILS: "Rails",
    REACTRAILS: "React-Rails",
  };

  const projectsData = [
    {
      title: "Expenses Tracker",
      projectInfo:
        "Expense Tracker is a mobile web application designed to effortlessly monitor daily expenditures. Users can securely sign up, sign in, and diligently record daily expenses, enabling comprehensive monthly or yearly financial analysis. With customizable categories and transaction logging, users gain insights into their spending habits, fostering fiscal responsibility.",
      source: "https://github.com/sumon766/expenses",
      technologies: "React, Ruby on Rails",
      url: {
        name: "See Live Demo",
        link: "https://expenses-tracker-8m6v.onrender.com/",
      },
      thumbImage: "images/projects/expense-Tracker.png",
      sliderImages: [
        "images/projects/expense-Tracker-2.png",
        "images/projects/expense-tracker-mobile.png",
      ],
      categories: [filters.RAILS],
    },
    {
      title: "Bookstore CMS",
      projectInfo:
        "The Bookstore is a visionary undertaking akin to the renowned Awesome Books initiative, yet it stands as a testament to innovation and excellence in its own right. Distinctively crafted with React and seamlessly navigated using React Router, this project exemplifies the pinnacle of contemporary web development.",
      source: "https://github.com/sumon766/bookstore",
      technologies: "React JS",
      url: {
        name: "See Live Demo",
        link: "https://sumon766.github.io/bookstore/",
      },
      thumbImage: "images/projects/bookstore.png",
      sliderImages: [
        "images/projects/bookstore.png",
        "images/projects/bookstore-2.png",
      ],
      categories: [filters.REACT],
    },
    {
      title: "Countries Navigator",
      projectInfo:
        "Countries Navigator is your passport to comprehensive country data. Browse all nations, filter by continents, and explore individual country details, including area, population, latitude, longitude, and currencies, all at your fingertips.",
      source: "https://github.com/sumon766/countries-navigator",
      technologies: "React JS",
      url: {
        name: "See Live Demo",
        link: "https://sumon766.github.io/countries-navigator/",
      },
      thumbImage: "images/projects/countries-navigator.png",
      sliderImages: [
        "images/projects/countries-navigator.png",
        "images/projects/countries-navigator-2.png",
        "images/projects/countries-navigator-3.png",
      ],
      categories: [filters.REACT],
    },
    {
      title: "Space Travelers Hub",
      projectInfo:
        "Space-Travelers-Hub represents a groundbreaking web application that opens the gateway to an unparalleled cosmic adventure. This innovative platform empowers users to embark on interstellar journeys by booking rockets, dragons, and even participating in meticulously curated space missions. Through seamless integration with APIs, it offers a dynamic and immersive experience, making the cosmos more accessible than ever before. Explore the universe with confidence, backed by the cutting-edge technology of SpaceX",
      source: "https://github.com/sumon766/space-travelers-hub",
      technologies: "React JS",
      url: {
        name: "See Live Demo",
        link: "https://space-travelers-hub-five.vercel.app/",
      },
      thumbImage: "images/projects/space-travelers-hub.png",
      sliderImages: [
        "images/projects/space-travelers-hub-2.png",
        "images/projects/space-travelers-hub-3.png",
      ],
      categories: [filters.REACT],
    },
    {
      title: "Leaderboard",
      projectInfo:
        "The Leader Board is a dynamic showcase of game scores, elegantly displaying player names and their respective scores. Crafted using JavaScript and powered by APIs, it delivers a seamless and engaging gaming experience.",
      source: "https://github.com/sumon766/leaderboard",
      technologies: "React JS",
      url: {
        name: "See Live Demo",
        link: "https://sumon766.github.io/leaderboard/dist/",
      },
      thumbImage: "images/projects/leaderBoard.png",
      sliderImages: [
        "images/projects/leaderboard.png"
      ],
      categories: [filters.REACT],
    },
    {
      title: "Math Magician",
      projectInfo:
        "Math Magicians, a dazzling SPA forged with React, wields the mystic power to effortlessly conjure the solutions to a myriad of mathematical enigmas. Here one can perform mathematical calculations, see the quotes of great mathematicians and more.",
      source: "https://github.com/sumon766/math-magicians",
      technologies: "React",
      url: {
        name: "See Live Demo",
        link: "https://sumon766.github.io/math-magicians",
      },
      thumbImage: "images/projects/calculator-App.png",
      sliderImages: [
        "images/projects/calculator-App-2.png",
      ],
      categories: [filters.REACT],
    },
    {
      title: "Doctor Appointment",
      projectInfo:
        "The Doctor Appointment A website offers a user-friendly platform for patients to register, log in, set appointments, check doctor profiles, and manage their appointments. Admins can effortlessly add or delete doctors and monitor the platform, ensuring seamless healthcare access and efficient management. Backend is implemented as API-only. The front end is implemented utilizing the React Library.",
      source: "https://github.com/sumon766/backend-doctor-appointment",
      technologies: "React, Ruby on Rails, RESTful API",
      url: {
        name: "See Live Demo",
        link: "https://www.example.com",
      },
      thumbImage: "images/projects/doctor-App.png",
      sliderImages: [
        "images/projects/doctor-App.png",
        "images/projects/doctor-App.png",
      ],
      categories: [filters.RAILS, filters.REACT, filters.REACTRAILS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
