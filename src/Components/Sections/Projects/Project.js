import React, { useState, useEffect } from "react";
import "./Project.css";
import Icon from "@mdi/react";
import { mdiWeb } from "@mdi/js";
import { mdiGithubCircle } from "@mdi/js";

const portfolio = [
  {
    name: "Reference App",
    class: "referenceApp",
    button: (
      <div className="buttons">
        <h4>Reference App</h4>
        <section>
          <a
            href="https://github.com/mohmuddev/reference"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiGithubCircle} size={0.9} />
            Github
          </a>
          <a href="https://docs.mohamud.dev" target="_blank" rel="noopener noreferrer">
            <Icon path={mdiWeb} color="#EE5153" size={0.9} />
            Live
          </a>
        </section>
      </div>
    ),
    category: ["all", "webapp"]
  },
  {
    name: "Web Agency",
    class: "webagency",
    button: (
      <div className="buttons">
        <h4>Digital Agency</h4>
        <section>
          <a
            href="https://github.com/mohmuddev/WebAgency"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Icon path={mdiGithubCircle} size={0.9} />
            Github
          </a>
          <a href="https://digitalagency.mohamud.dev/" rel="noopener noreferrer" target="_blank">
            {" "}
            <Icon path={mdiWeb} color="#EE5153" size={0.9} />
            Live
          </a>
        </section>
      </div>
    ),
    category: ["all", "landingPage"]
  },
  {
    name: "Saas Newsletter ",
    class: "saas",
    button: (
      <div className="buttons">
        <h4>Saas Newsletter</h4>
        <section>
          <a
            href="https://github.com/mohmuddev/SaasNewsLetter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiGithubCircle} size={0.9} />
            Github
          </a>
          <a href="https://saasnewsletter.mohamud.dev/" target="_blank" rel="noopener noreferrer">
            <Icon path={mdiWeb} color="#EE5153" size={0.9} />
            Live
          </a>
        </section>
      </div>
    ),
    category: ["all", "html-email"]
  },
  {
    name: "Happy New Year",
    class: "HappyNewYear ",
    button: (
      <div className="buttons">
        <h4>New Year Newsletter</h4>
        <section>
          <a href="https://www.mohamud.dev/">
            <Icon path={mdiGithubCircle} size={1} />
            Github
          </a>
          <a href="https://www.mohamud.dev/">
            <Icon path={mdiWeb} color="#EE5153" size={1} />
            Live
          </a>
        </section>
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
