import {SELECT_CATEGORY, SELECT_EXERCISE} from "../types";


export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
})

export const selectExercise = exercise => ({
  type: SELECT_EXERCISE,
  exercise
})
