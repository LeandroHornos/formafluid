'use client'

import { useState } from 'react'
import Section from '@/components/design/Section'
import { FormSection } from '@/apptypes'
export default function Editor() {
  const [rows, setRows] = useState<number[]>([])

  const handleAddRow = (columns: number) => {
    console.log(columns)
  }

  const section: FormSection = {
    id: '1',
    name: 'Sample Section 1',
    order: 1,
    columns: [],
  }

  return (
    <div className="w-full">
      <h1>Editor</h1>
      <Section section={section} />
    </div>
  )
} 