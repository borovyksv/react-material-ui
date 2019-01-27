import React from "react";
import {Paper} from "@material-ui/core";

export default props => {
  const {classes} = props;
  return (
    <Paper className={classes.paper}>Left panel</Paper>
  );
};
