interface CardProps {
  title: string
  children: React.ReactNode
}

const Card = ({title, children}: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xs mx-auto">
      <h2 className="text-2xl font-bold text-gray-600 mb-4">{title}</h2>
      <div className="border-t border-gray-300"></div>
      <div className="text-gray-600 mt-4 flex flex-col items-center gap-5">
        {children}
      </div>
    </div>
  )
}

export default Card
