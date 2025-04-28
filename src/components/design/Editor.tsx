'use client'

import { useState } from 'react'

import SectionEditor from '@/components/design/SectionEditor'

export default function Editor() {
  const [rows, setRows] = useState<number[]>([])

  const handleAddRow = (columns: number) => {
    console.log(columns)
  }


  return (
    <div className="w-full">
      <h1>Editor</h1>
      <SectionEditor split={1} />
      <SectionEditor split={2} />
      <SectionEditor split={3} />
    </div>
  )
} 