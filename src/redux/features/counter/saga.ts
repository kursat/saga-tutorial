import {all, put, takeEvery, call, fork} from 'redux-saga/effects'
import {actions} from './slice'

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

// Worker sagas
export function* increaseByOneAsync() {
  yield put(actions.increaseBy(1))
}

export function* decreaseByOneAsync() {
  yield put(actions.decreaseBy(1))
}

const getRandom = () => {
  return new Promise((resolve, reject) => {
    const shouldThrowError = Math.random() > 0.7

    if (shouldThrowError) reject('Cannot generate random number.')

    setTimeout(() => resolve(Math.round(Math.random() * 100) % 20), 300)
  })
}

export function* increaseByRandomAsync() {
  yield put(actions.setError())
  try {
    const randomNumber: number = (yield call(getRandom)) as number
    yield put(actions.increaseBy(randomNumber))
  } catch (e) {
    yield put(actions.setError(e as string))
  }
}

export function* autoIncreaseAsync() {
  yield put(actions.setAuto(true))

  while (true) {
    yield delay(1000)
    yield fork(increaseByOneAsync)
  }
}

// Watcher sagas
export function* watchIncreaseByOneAsync() {
  yield takeEvery(actions.increaseByOne, increaseByOneAsync)
}
export function* watchDecreaseByOneAsync() {
  yield takeEvery(actions.decreaseByOne, decreaseByOneAsync)
}
export function* watchDecreaseByRandomAsync() {
  yield takeEvery(actions.increaseByRandom, increaseByRandomAsync)
}
export function* watchAutoIncreaseAsync() {
  yield takeEvery(actions.autoIncrease, autoIncreaseAsync)
}

export default function* counterRootSaga() {
  yield all([
    watchIncreaseByOneAsync(),
    watchDecreaseByOneAsync(),
    watchDecreaseByRandomAsync(),
    watchAutoIncreaseAsync()
  ])
}
