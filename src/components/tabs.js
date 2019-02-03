import React from "react";
import {Paper, Tab, Tabs} from "@material-ui/core";

export default ({muscles, category, handleCategorySelect}) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0

  function handleChange (e, index) {
    handleCategorySelect(index === 0 ? '' : muscles[index - 1])}

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={(e, index) => handleChange(e, index)}
        indicatorColor="primary"
        textColor="primary"
        centered>
        <Tab label="All"/>
        {muscles.map((muscle, index) =>
          <Tab key={index} label={muscle}/>
        )}
      </Tabs>
    </Paper>
  );
};
