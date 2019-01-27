import React, {Component} from "react";
import Header from "./header";
import Panels from "./panels";
import Table1 from "./table";
import Tabs from "./tabs";
import {exercises} from "../store";

export default class extends Component {

  state = {
    exerciseByMuscles: []
  }

  getExerciseByMuscles = () => {
    return exercises.reduce((acc, next) => {
      console.log('acc', acc)
      const {muscle} = next
      acc[muscle] = acc[muscle]
        ? [...acc[muscle], next]
        : [next]
      return acc
    }, [])
  }


  async componentDidMount () {
    const exerciseByMuscles1 = await this.getExerciseByMuscles();
    this.setState({exerciseByMuscles: exerciseByMuscles1})
  }


  render(){
    return (
      <div className="App">
        {/*<Header/>*/}
        <Panels
          text={"TEXTTTTTT"}
          exerciseGroups={this.state.exerciseByMuscles}/>
        <Table1
          exerciseGroups={this.state.exerciseByMuscles}/>
        <Tabs/>
      </div>
    );
  }
};
