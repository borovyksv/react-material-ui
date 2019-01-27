import React from "react";
import {Grid, withStyles} from "@material-ui/core";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const styles = theme => ({
  paper: {
    padding: 20,
    margin: 15
  },
  main: {
    margin: [[10, 0, 10, 0]]
  }
});

export default withStyles(styles)(props => {
  const {classes} = props;
  return (
    <Grid container className={classes.main}>
      <Grid item xs>
        <LeftPanel classes={classes}/>
      </Grid>
      <Grid item xs>
        <RightPanel classes={classes}/>
      </Grid>
    </Grid>
  );
});
