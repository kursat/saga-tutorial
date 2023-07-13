import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counter/slice'
import createSagaMiddleware from 'redux-saga'
import counterRootSaga from './features/counter/saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    sagaMiddleware
  ]
})

sagaMiddleware.run(counterRootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
