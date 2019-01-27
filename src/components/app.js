import React, {Component} from "react";
import Header from "./header";
import Panels from "./panels";
import Tabs from "./tabs";
import {exercises} from "../store";

export default class extends Component {

  state = {
    exercises,
    exerciseByMuscles: []
  }

  getExerciseByMuscles = () => {
    return Object.entries(this.state.exercises.reduce((acc, next) => {
      console.log('acc', acc)
      const {muscle} = next
      acc[muscle] = acc[muscle]
        ? [...acc[muscle], next]
        : [next]
      return acc
    }, {}))
  }


  componentDidMount () {
    const exerciseByMuscles = this.getExerciseByMuscles();
    console.log(exerciseByMuscles);
    this.setState({exerciseByMuscles})
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <Panels
          text={"TEXTTTTTT"}
          exerciseGroups={this.state.exerciseByMuscles}/>
        <Tabs/>
      </div>
    );
  }
};
