import {exercises, getExerciseByMuscles, muscles} from "../store";
import * as types from "../types";

const initialState = {
  exercises,
  exercise: {},
  category: '',
  muscles,
  exerciseGroups: getExerciseByMuscles(),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_CATEGORY:
      console.log(action);
      return {...state, category: action.category}
    case types.SELECT_EXERCISE:
      return {...state, exercise: action.exercise}
    default:
      return state;
  }
}