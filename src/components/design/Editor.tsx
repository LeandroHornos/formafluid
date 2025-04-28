'use client'

import { useState } from 'react'

import { FormSection } from '@/apptypes'

import SectionEditor from '@/components/design/SectionEditor'

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
      <SectionEditor split={1} />
      <SectionEditor split={2} />
      <SectionEditor split={3} />
    </div>
  )
} 