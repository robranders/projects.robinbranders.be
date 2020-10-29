import React from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

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
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </>
  );
};

export default App;
