import {AppBar, Toolbar, Typography} from "@material-ui/core";
import AddExerciseDialog from "../dialogs/AddExerciseDialog";
import React from 'react';
import Grid from "@material-ui/core/Grid/Grid";

export default () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6" color="inherit">Exercises</Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <AddExerciseDialog/>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
