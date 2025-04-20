'use client'

import { useState } from 'react'
import RowSelector from './RowSelector'
import Row from './Row'

export default function Editor() {
  const [rows, setRows] = useState<number[]>([])

  const handleAddRow = (columns: number) => {
    setRows([...rows, columns])
  }

  return (
    <div className="w-full">
      {rows.map((columns, index) => (
        <div key={index} className="mb-4">
          <Row columns={columns} />
          <RowSelector onAddRow={handleAddRow} />
        </div>
      ))}
      {rows.length === 0 && <RowSelector onAddRow={handleAddRow} />}
    </div>
  )
} 