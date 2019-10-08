import createPersistedState from 'use-persisted-state'

export const useData = () => createPersistedState('data')({
  fastDays: [],
  calories: 500,
  meals: 3,
  menu: {},
  ingredients: {}
})
