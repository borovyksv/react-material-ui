import React from "react";
import {Grid, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
  paper: {
    padding: 20,
    margin: 15
  },
  main: {
    margin: [[10, 0, 10, 0]]
  },
  capital: {
    textTransform: 'capitalize'
  },
});

const Panels = props => {
  const {exerciseGroups, classes} = props;

  return (
    <Grid container className={classes.main}>
      <Grid item xs>
        <Paper className={classes.paper}>
          {exerciseGroups.map(([group], index)=>
            <Typography
              key={index}
              variant="headline"
              className={classes.capital}
            >
               {group}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper}>{props.text}</Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Panels)