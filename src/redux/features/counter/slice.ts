import {createAction, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../store'

const scope = 'counter'

interface CounterState {
  value: number
  auto: boolean
  error?: string
}

const initialState: CounterState = {
  value: 0,
  auto: false
}

export const counterSlice = createSlice({
  name: scope,
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload
    },
    setAuto: (state, action: PayloadAction<boolean>) => {
      state.auto = action.payload
    },
    increaseBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decreaseBy: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    }
  }
})

const {setValue, setError, setAuto, increaseBy, decreaseBy} = counterSlice.actions

// Actions for saga
const increaseByOne = createAction(`${scope}/increaseByOne`)
const decreaseByOne = createAction(`${scope}/decreaseByOne`)
const increaseByRandom = createAction(`${scope}/increaseByRandom`)

const autoIncrease = createAction(`${scope}/autoIncrease`)

export const actions = {
  setValue,
  setError,
  setAuto,
  increaseBy,
  decreaseBy,
  increaseByOne,
  decreaseByOne,
  increaseByRandom,
  autoIncrease
}

const selectCount = (state: RootState): number => state.counter.value
const selectError = (state: RootState): string | undefined =>
  state.counter.error

export const selectors = {
  selectCount,
  selectError
}

export default counterSlice.reducer
