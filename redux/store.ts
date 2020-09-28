import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';


let store
const initialState = {}
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

function initStore(preloadedState = initialState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

export const initializeStore = (preloadedState?) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    sagaMiddleware.run(rootSaga)
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}


export default store;