import React, {Fragment} from "react";
import {Grid, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const styles = theme => ({
  paper: {
    padding: 20,
    margin: 15,
    textAlign: 'left',
    height: 500,
    overflow: 'auto'
  },
  main: {
    margin: [[10, 0, 10, 0]]
  },
  capital: {
    textTransform: 'capitalize'
  },
});

const Panels = props => {
  const {
    exerciseGroups,
    classes,
    category,
    onSelect,
    exercise: {
      title='Welcome',
      description='Please select an exercise from the list on the left'
    },
  } = props;

  return (
    <Grid container className={classes.main}>
      <Grid item xs>
        <Paper className={classes.paper}>
          {exerciseGroups.map(([group, exercises], index) =>
            !category || category === group
              ? <Fragment key={group}>
                <Typography
                  key={index}
                  variant="headline"
                  className={classes.capital}
                >
                  {group}
                </Typography>
                <List disablePadding>
                  {exercises.map(({id, title}) =>
                    <ListItem key={id} button>
                      <ListItemText primary={title} onClick={() => onSelect(id)}/>
                    </ListItem>
                  )}
                </List>
              </Fragment>
              : null
          )}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subheading">
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Panels)