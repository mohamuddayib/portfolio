import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiWeb } from "@mdi/js";
import { mdiGithubCircle } from "@mdi/js";

import "./Project.css";

const portfolio = [
  {
    name: "My best client",
    class: "jabiclc",
    overlay:(
      <span className="overlay_animation">
        <span>Jabiclc</span>
        <span><a href="https://jabiclc.com/"><Icon path={mdiWeb} color="#7D5AF8" size={1} /></a></span>
      </span>
    ),
    category: ["all", "frontend", "ux-ui"],
  },
  {
    name: "My favorite case",
    class: "webagency",
    overlay:(
      <span className="overlay_animation">
        <span>Web Agency</span>
        <span><a href="https://github.com/mohmuddev/WebAgency"><Icon path={mdiGithubCircle} color="#7D5AF8" size={1} /></a> <a href="https://digitalagency.mohamud.dev/"><Icon path={mdiWeb} color="#7D5AF8" size={1} /></a></span>
      </span>
    ),
    category: ["all", "mobile", "ux-ui"]
  },
  {
    name: "A old job",
    class: "israqdocs",
    overlay:(
      <span className="overlay_animation">
        <span>Docs App</span>
        <span><a href="https://github.com/mohmuddev/ishraq-docs"><Icon path={mdiGithubCircle} color="#7D5AF8" size={1} /></a> <a href="https://ishraq-docs.netlify.app"><Icon path={mdiWeb} color="#7D5AF8" size={1} /></a></span>
      </span>
    ),
    category: ["all", "frontend"]
  },
  {
    name: "It is a really cool website",
    class: "molfr",
    overlay:(
      <span className="overlay_animation">
        <span>MOLFR-JSS</span>
        <span> <a href="https://molfr.so/"><Icon path={mdiWeb} color="#7D5AF8" size={1} /></a></span>
      </span>
    ),
    category: ["all", "frontend", "ux-ui"]
  },
  {
    name: "Something more",
    class: "weedsan",
    overlay:(
      <span className="overlay_animation">
        <span>Weedhsan News</span>
        <span><a href="https://www.weedhsan.news/"><Icon path={mdiWeb} color="#7D5AF8" size={1} /></a></span>
      </span>
    ),
    category: ["all", "others"]
  },
  
  {
    name: "loop div",
    class: "BMI_calculator",
    overlay:(
      <span className="overlay_animation">
        <span>BMI Calculator</span>
        <span><a href="https://mohmuddev.github.io/bmi/"><Icon path={mdiGithubCircle} color="#7D5AF8" size={1} /></a> <a href="https://github.com/mohmuddev/bmi"><Icon path={mdiWeb} color="#7D5AF8" size={1} /></a></span>
      </span>
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
    <div className="project-container">
    <div className="title-container">
        <h2>My Work</h2>
        <p>
          I have showcased below some of my recent projects and I'm currently
          working on new projects.
        </p>
      </div>
    <div className="portfolio_wrapper">
      <div className="portfolio__labels">
        
        <span href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </span>
        <span
          active={filter === "frontend"}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </span>
        <span
          active={filter === "mobile"}
          onClick={() => setFilter("mobile")}
        >
          Mobile
        </span>
        <span
          active={filter === "ux-ui"}
          onClick={() => setFilter("ux-ui")}
        >
          UX/UI
        </span>
        <span
         
          active={filter === "others"}
          onClick={() => setFilter("others")}
        >
          Others
          </span>
      </div>
      </div>
      <div className="filterable_div">
      <div className="portfolio__container">
        {projects.map(item =>
        item.filtered === true ? <span key={item.name} className={item.class}>{item.overlay}</span> : ""
        )}
      </div>
      </div>
    </div>
  );
}

export default Project;
