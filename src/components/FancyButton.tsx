import clsx from 'clsx'

interface IFancyButtonProps {
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  cssWrapper?: string
}
const FancyButton = ({
  text,
  onClick,
  cssWrapper,
  disabled
}: IFancyButtonProps) => {
  const classes = [
    'bg-gradient-to-r',
    'from-purple-500',
    'to-indigo-500',
    'hover:from-purple-600',
    'hover:to-indigo-600',
    'text-white',
    'py-2',
    'px-6',
    'rounded-lg',
    'shadow-lg',
    'transform',
    'hover:scale-105',
    'transition-all',
    'duration-300'
  ]

  return (
    <button
      className={clsx(classes, cssWrapper)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default FancyButton
