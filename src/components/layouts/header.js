import {AppBar, Toolbar, Typography} from "@material-ui/core";
import CreateExerciseDialog from "../dialogs/CreateExerciseDialog";
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
              <CreateExerciseDialog/>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
