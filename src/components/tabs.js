import React, {Component} from "react";
import {Paper, Tab, Tabs} from "@material-ui/core";
import {connect} from "react-redux";
import {selectCategory} from "../actions";

class ExerciseTabs extends Component {

  handleChange = (e, index) =>
    this.props.selectCategory(index === 0 ? '' : this.props.muscles[index - 1])

  render() {
    let {muscles, category} = this.props;
    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0

    return (
      <Paper>
        <Tabs
          value={index}
          onChange={(e, index) => this.handleChange(e, index)}
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
  }
}

const mapStateToProps = state => ({
  muscles: state.muscles,
  category: state.category,
})

export default connect(mapStateToProps, {selectCategory})(ExerciseTabs);

