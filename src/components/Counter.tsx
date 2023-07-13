import FancyButton from './FancyButton'
import Card from './Card'
import {actions, selectors} from '../redux/features/counter/slice'
import {useAppDispatch, useAppSelector} from '../redux/hooks'

const Counter = () => {
  const count = useAppSelector(selectors.selectCount)
  const error = useAppSelector(selectors.selectError)
  const auto = useAppSelector(s => s.counter.auto)

  const dispatch = useAppDispatch()

  return (
    <Card title={'Counter'}>
      <FancyButton
        text={'Decrease by 1'}
        onClick={() => dispatch(actions.decreaseByOne())}
      />
      <span>{count}</span>
      <FancyButton
        text={'Increase by 1'}
        onClick={() => dispatch(actions.increaseByOne())}
      />
      <FancyButton
        text={'Increase by random'}
        onClick={() => dispatch(actions.increaseByRandom())}
      />
      <FancyButton
        text={auto ? 'Stop auto increase' : 'Start auto increase'}
        onClick={() => dispatch(actions.autoIncrease())}
        disabled={auto}
        cssWrapper={auto ? 'border-2 border-purple-900' : ''}
      />
      <p>{error}</p>
    </Card>
  )
}

export default Counter
