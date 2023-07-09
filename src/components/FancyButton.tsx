interface IFancyButtonProps {
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
const FancyButton = ({text, onClick}: IFancyButtonProps) => {
  return (
    <button
      className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default FancyButton
