'use client'

interface RowProps {
  columns: number
}

export default function Row({ columns }: RowProps) {
  const columnColors = [
    'bg-blue-200',
    'bg-green-200',
    'bg-yellow-200',
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Array.from({ length: columns }).map((_, index) => (
        <div
          key={index}
          className={`${columnColors[index]} h-[30vh] rounded-lg`}
        />
      ))}
    </div>
  )
} 