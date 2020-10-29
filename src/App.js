import React from "react";
import "./App.css";

import { Typography, Link } from "@material-ui/core";

import ProjectContainer from "./components/ProjectContainer";

const App = () => {
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
        <ProjectContainer
          title="title"
          img="img/kf.png"
          desc="desc"
          tags={[{ lang: "js", color: "#ff0000" }]}
        />
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
