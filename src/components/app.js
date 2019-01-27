import React from "react";
import Header from "./header";
import Tabs from "./tabs";
import { Grid, Paper } from "@material-ui/core";

export default () => {
  return (
    <div className="App">
      <Header />
      <Tabs />

      <Grid container>
        <Grid item xs>
          <Paper>Left</Paper>
        </Grid>
        <Grid item xs>
          <Paper>Right</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
