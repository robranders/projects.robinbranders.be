import React from "react";
import { Typography } from "@material-ui/core";

const LanguageTag = ({ language, color }) => {
  return (
    <div className="tag">
      <span
        style={{
          position: "relative",
          top: "1px",
          height: "11px",
          width: "11px",
          display: "inline-block",
          backgroundColor: color,
          borderRadius: "50%",
          marginRight: "5px"
        }}
      ></span>
      <Typography variant="overline">{language}</Typography>
    </div>
  );
};

export default LanguageTag;
