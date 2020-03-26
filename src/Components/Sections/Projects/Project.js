import React, { useState, useEffect } from "react";

import "./Project.css";

const portfolio = [
  {
    name: "My best client",
    class: "className",
    button: (
      <div className="buttons">
        <a href="https://www.mohamud.dev/">Github</a>
        <a href="https://www.mohamud.dev/">Live</a>
      </div>
    ),
    category: ["all", "frontend", "ux-ui"]
  },
  {
    name: "My favorite case",
    button: (
      <div className="buttons">
        <a href="https://www.mohamud.dev/">Github</a>
        <a href="https://www.mohamud.dev/">Live</a>
      </div>
    ),
    category: ["ux-ui" , "mobile"]
  },
  {
    name: "A old job",
    button: (
      <div className="buttons">
        <a href="https://www.mohamud.dev/">Github</a>
        <a href="https://www.mohamud.dev/">Live</a>
      </div>
    ),
    category: ["all", "frontend"]
  },
  {
    name: "It is a really cool website",
    button: (
      <div className="buttons">
        <a href="https://www.mohamud.dev/">Github</a>
        <a href="https://www.mohamud.dev/">Live</a>
      </div>
    ),
    category: ["all", "frontend", "ux-ui"]
  },
  {
    name: "Something more",
    button: (
      <div className="buttons">
        <a href="https://www.mohamud.dev/">Github</a>
        <a href="https://www.mohamud.dev/">Live</a>
      </div>
    ),
    category: ["all", "others"]
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
        <span active={filter === "frontend"} onClick={() => setFilter("frontend")}>
          Frontend
        </span>
        <span active={filter === "mobile"} onClick={() => setFilter("mobile")}>
          Mobile
        </span>
        <span active={filter === "ux-ui"} onClick={() => setFilter("ux-ui")}>
          UX/UI
        </span>
        <span active={filter === "others"} onClick={() => setFilter("others")}>
          Others
        </span>
      </div>
      <div className="portfolio__container">
        {projects.map(item =>
          item.filtered === true ? (
            <div key={item.name} className={item.class}>
              {item.button}
              {item.button2}
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
