import {DELETE_EXERCISE, EDIT_EXERCISE, SAVE_EXERCISE, SELECT_CATEGORY, SELECT_EXERCISE} from "../types";


export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
})

export const selectExercise = exercise => ({
  type: SELECT_EXERCISE,
  exercise
})

export const saveExercise = exercise => ({
  type: SAVE_EXERCISE,
  exercise
})

export const deleteExercise = id => ({
  type: DELETE_EXERCISE,
  id
})

export const editExercise = exercise => ({
  type: EDIT_EXERCISE,
  exercise
})
