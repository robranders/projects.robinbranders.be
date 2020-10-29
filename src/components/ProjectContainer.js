import React from "react";
import { Paper } from "@material-ui/core";

const ProjectContainer = () => {
  return (
    <Paper className="project-paper">
      <div className="project-container">
        <div className="title">
          <p>Click HMI demo page</p>
        </div>
        <div className="description">
          <p>
            A static product demo web page based around the Click PLC projects
            I've done in the past.
          </p>
        </div>
        <div className="buttons">
          <button>View</button>
          <button>Github</button>
        </div>
        <div className="tags">
          <li>HMTL</li>
          <li>CSS</li>
        </div>
        <div className="image">image</div>
      </div>
    </Paper>
  );
};

export default ProjectContainer;
