import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

export default ({exerciseGroups}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {JSON.stringify(exerciseGroups)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
