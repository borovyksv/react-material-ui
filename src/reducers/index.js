import {exercises, getExerciseByMuscles, muscles} from "../store";
import * as types from "../types";
import {EDIT_EXERCISE} from "../types";

const initialState = {
  exercises,
  exercise: {},
  category: '',
  muscles,
  exerciseGroups: getExerciseByMuscles(exercises),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_CATEGORY:
      console.log(action);
      return {...state, category: action.category}
    case types.SELECT_EXERCISE:
      return {...state, exercise: action.exercise}
    case types.SAVE_EXERCISE: {
      const newExercises = [...exercises, action.exercise]
      return {
        ...state,
        exercises: newExercises,
        exerciseGroups: getExerciseByMuscles(newExercises),
      }}
    case types.DELETE_EXERCISE: {
      const newExercises = state.exercises.filter(e => e.id !== action.id)
      return {
        ...state,
        exercises: newExercises,
        exerciseGroups: getExerciseByMuscles(newExercises),
      }}
    case types.EDIT_EXERCISE: {
      const newExercises = state.exercises.filter(e => e.id !== action.id)
      return {
        ...state,
        exercises: newExercises,
        exerciseGroups: getExerciseByMuscles(newExercises),
      }}
    default:
      return state;
  }
}