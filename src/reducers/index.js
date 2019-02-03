import {exercises, getExerciseByMuscles, muscles} from "../db";
import {SELECT_CATEGORY, SELECT_EXERCISE} from "../types";

const initialState = {
  exercises,
  exercise: {},
  category: '',
  muscles,
  exerciseGroups: getExerciseByMuscles(),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      console.log(action);
      return {...state, category: action.category}
    case SELECT_EXERCISE:
      return {...state, exercise: action.exercise}
    default:
      return state;
  }
}