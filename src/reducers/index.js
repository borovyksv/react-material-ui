import {exercises, getExerciseByMuscles, muscles} from "../store";
import * as types from "../types";

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
      const {exercise} = action
      exercise.id = exercise.id || exercise.title
      const newExercises = state.exercises.find(e=>e.id===exercise.id)
        ? state.exercises.map(e=>e.id===exercise.id ? exercise : e)
        : [...state.exercises, action.exercise]
      return {
        ...state,
        exercise,
        exercises: newExercises,
        exerciseGroups: getExerciseByMuscles(newExercises),
      }}
    case types.DELETE_EXERCISE: {
      const newExercises = state.exercises.filter(e => e.id !== action.id)
      return {
        ...state,
        exercise: initialState.exercise,
        exercises: newExercises,
        exerciseGroups: getExerciseByMuscles(newExercises),
      }}
    default:
      return state;
  }
}