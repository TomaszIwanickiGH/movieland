import { createStore } from 'redux'

const reducerFn = (state = { search: '' }, action) => {
  if (action.type === 'SEARCH') return { search: action.payload }

  return state
}

const store = createStore(reducerFn)

export default store
