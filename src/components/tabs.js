import React from "react";
import {Paper, Tab, Tabs} from "@material-ui/core";
import {muscles} from "../store";

export default () => {
  return (
    <Paper>
      <Tabs value={1} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All"/>
        {muscles.map((muscle, index) =>
          <Tab
            key={index}
            label={muscle}
          />
        )}
      </Tabs>
    </Paper>
  );
};
