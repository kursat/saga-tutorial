import FancyButton from './FancyButton'
import Card from './Card'
import {
  decrement,
  increment,
  selectCount
} from '../redux/features/counter/slice'
import {useAppDispatch, useAppSelector} from '../redux/hooks'

const Counter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <Card title={'Counter'}>
      <FancyButton text={'Increase'} onClick={() => dispatch(increment())} />
      <span>{count}</span>
      <FancyButton text={'Decrease'} onClick={() => dispatch(decrement())} />
    </Card>
  )
}

export default Counter
