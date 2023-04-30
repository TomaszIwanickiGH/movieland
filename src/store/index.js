import { createStore } from 'redux'

const reducerFn = (state = { search: '' }, action) => {
  if (action.type === 'SEARCH') return { search: action.payload.charAt(0).toUpperCase() + action.payload.slice(1) }

  return state
}

const store = createStore(reducerFn)

export default store
