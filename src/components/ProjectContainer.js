import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import {
  Visibility as VisibilityIcon,
  GitHub as GitHubIcon
} from "@material-ui/icons";

import LanguageTag from "./LanguageTag";

const ProjectContainer = ({ title, img, desc, demoLink, githubLink, tags }) => {
  return (
    <Paper className="project-paper">
      <div className="project-container">
        <div className="title">
          <Typography variant="h5">{title}</Typography>
        </div>
        <div className="image">
          <img src={img} alt="kf-preview" />
        </div>
        <div className="description">
          <Typography variant="body1">{desc}</Typography>
        </div>
        <div className="buttons">
          <Button
            variant="outlined"
            startIcon={<VisibilityIcon />}
            onClick={() => {
              window.open(demoLink);
            }}
            disabled={typeof demoLink === "undefined"}
          >
            Demo
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={() => {
              window.open(githubLink);
            }}
            disabled={typeof githubLink === "undefined"}
          >
            Source
          </Button>
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <LanguageTag language={tag.lang} color={tag.color} key={index} />
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default ProjectContainer;
