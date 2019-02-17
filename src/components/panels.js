import React, {Component, Fragment} from "react";
import {Grid, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import {connect} from "react-redux";
import {deleteExercise, selectExercise} from "../actions";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Delete from '@material-ui/icons/Delete';
import CreateExerciseDialog from "./dialogs/CreateExerciseDialog";

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

class Panels extends Component {

  handleClick = id => {
    console.log("handleClick, id: ", id);
    let exercise = this.props.exercises.find(ex => ex.id === id);
    this.props.selectExercise(exercise)
  }

  render() {
    const {
      exerciseGroups,
      classes,
      category,
      exercise: {
        title = 'Welcome',
        description = 'Please select an exercise from the list on the left'
      },
      deleteExercise,
    } = this.props;
    return (
      <Grid container className={classes.main}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {exerciseGroups.map(([group, exercises], index) =>
              !category || category === group
                ? <Fragment key={group}>
                  <Typography
                    key={index}
                    variant="h5"
                    className={classes.capital}
                  >
                    {group}
                  </Typography>
                  <List disablePadding>
                    {exercises.map((exercise) =>
                      <ListItem key={exercise.id} button>
                        <ListItemText primary={exercise.title} onClick={() => this.handleClick(exercise.id)}/>
                        <ListItemSecondaryAction>
                          <IconButton>
                            <CreateExerciseDialog exercise={exercise}/>
                          </IconButton>
                          <IconButton onClick={() => deleteExercise(exercise.id)}>
                            <Delete/>
                          </IconButton>
                        </ListItemSecondaryAction>
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
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1">
              {description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}


const mapStateToProps = state => ({
  exerciseGroups: state.exerciseGroups,
  exercises: state.exercises,
  exercise: state.exercise,
  category: state.category,
})
export default connect(mapStateToProps, {selectExercise, deleteExercise})(withStyles(styles)(Panels))