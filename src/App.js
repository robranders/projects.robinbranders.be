import React, { useState, useEffect } from "react";
import "./App.css";

import { Typography, Link } from "@material-ui/core";

import ProjectContainer from "./components/ProjectContainer";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [langColors, setLangColors] = useState([]);

  useEffect(() => {
    if (projects.length <= 0) {
      fetch("projects.json")
        .then((res) => res.json())
        .then((res) => {
          setProjects(res.projects);
          setLangColors(res.langColors);
        })
        .catch((e) => console.error(e.message));
    }
  });

  return (
    <>
      <div className="header">
        <Typography variant="h2" className="title">
          Projects
        </Typography>
        <Typography variant="h4" className="subtitle">
          Robin Branders
        </Typography>
      </div>
      <div className="container">
        {projects.map((p, index) => {
          return (
            <ProjectContainer
              title={p.title}
              img={p.img}
              desc={p.description}
              demoLink={p.demo}
              githubLink={p.github}
              tags={p.tags.map((t) => ({ lang: t, color: langColors[t] }))}
              key={index}
            />
          );
        })}
      </div>
      <div className="footer">
        <div className="footer-container">
          <Typography variant="body1">
            <Link href="https://www.robinbranders.be" color="textPrimary">
              robinbranders.be
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              href="https://www.linkedin.com/in/robin-branders-b1838a188"
              color="textPrimary"
            >
              @linkedin
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link href="https://github.com/robranders" color="textPrimary">
              @github
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default App;
