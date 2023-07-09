import {useState} from 'react'
import FancyButton from './FancyButton.tsx'
import Card from './Card.tsx'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const onClickIncrease = () => setCount(count + 1)
  const onClickDecrease = () => setCount(count - 1)

  return (
    <Card title={'Counter'}>
      <FancyButton text={'Increase'} onClick={onClickIncrease} />
      <span>{count}</span>
      <FancyButton text={'Decrease'} onClick={onClickDecrease} />
    </Card>
  )
}

export default Counter
