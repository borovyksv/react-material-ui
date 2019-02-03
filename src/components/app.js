import React, {Component} from "react";
import Header from "./layouts/header";
import Panels from "./panels";
import Tabs from "./tabs";
import {exercises, getExerciseByMuscles, muscles} from "../store";

export default class extends Component {

  state = {
    exercises,
    exercise: {},
    category: '',
    exerciseByMuscles: [],
  }

  handleCategorySelect = category => this.setState({category})
  handleExerciseSelect = id => this.setState(({exercises}) => ({
    exercise: exercises.find(ex => ex.id === id)
  }));

  componentDidMount () {
    const exerciseByMuscles = getExerciseByMuscles();
    this.setState({exerciseByMuscles})
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Panels
          exercise={this.state.exercise}
          category={this.state.category}
          onSelect={this.handleExerciseSelect}
          exerciseGroups={this.state.exerciseByMuscles}/>
        <Tabs
          handleCategorySelect={this.handleCategorySelect}
          category={this.state.category}
          muscles={muscles}
        />
      </div>
    );
  }
};
