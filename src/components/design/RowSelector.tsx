'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'

interface RowSelectorProps {
  onAddRow: (columns: number) => void
}

export default function RowSelector({ onAddRow }: RowSelectorProps) {
  const [selectedColumns, setSelectedColumns] = useState<string>('1')

  const handleAdd = () => {
    onAddRow(Number(selectedColumns))
  }

  return (
    <div className="flex gap-2 p-4 bg-gray-100 rounded-lg">
      <Select value={selectedColumns} onValueChange={setSelectedColumns}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Columnas" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1 Columna</SelectItem>
          <SelectItem value="2">2 Columnas</SelectItem>
          <SelectItem value="3">3 Columnas</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleAdd}>Aceptar</Button>
    </div>
  )
} 