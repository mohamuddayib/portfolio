import React, { useState, useEffect } from "react";

import "./Project.css";

const portfolio = [
  {
    name: "Reference App",
    class: "referenceApp",
    button: (
      <div className="buttons">
        <a href="https://www.mohamud.dev/">Github</a>
        <a href="https://www.mohamud.dev/">Live</a>
      </div>
    ),
    category: ["all", "webapp"]
  },
  {
    name: "Web Agency",
    class: "webagency",
    button: (
      <div className="buttons">
        <a href="https://www.mohamud.dev/">Github</a>
        <a href="https://www.mohamud.dev/">Live</a>
      </div>
    ),
    category: ["all", "landingPage"]
  },
  {
    name: "Happy New Year",
    class: "HappyNewYear",
    button: (
      <div className="buttons">
        <a href="https://www.mohamud.dev/">Github</a>
        <a href="https://www.mohamud.dev/">Live</a>
      </div>
    ),
    category: ["all", "html-email"]
  },
  {
    name: "Saas Newsletter",
    class: "saas",
    button: (
      <div className="buttons">
        <a href="https://www.mohamud.dev/">Github</a>
        <a href="https://www.mohamud.dev/">Live</a>
      </div>
    ),
    category: ["all", "html-email"]
  }
];

function Project() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <div className="Propect" id="Project">
      <div className="title-container">
        <h2>My Work</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia veniam
          asperiores.
        </p>
      </div>

      <div className="portfolio__labels">
        <span active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </span>
        <span active={filter === "webapp"} onClick={() => setFilter("webapp")}>
          Web App
        </span>
        <span active={filter === "landingPage"} onClick={() => setFilter("landingPage")}>
          Landing Page
        </span>
        <span active={filter === "html-email"} onClick={() => setFilter("html-email")}>
          HTML-Email
        </span>
        <span active={filter === "webdesign"} onClick={() => setFilter("webdesign")}>
          Web design
        </span>
      </div>
      <div className="portfolio__container">
        {projects.map(item =>
          item.filtered === true ? (
            <div key={item.name} className={item.class}>
              {item.button}
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Project;
