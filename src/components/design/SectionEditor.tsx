'use client'

import React from 'react'

interface SectionEditorProps {
  split: 1 | 2 | 3
}

const SectionEditor: React.FC<SectionEditorProps> = ({ split }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1 h-[50vh] bg-red-500 rounded-lg"><h2>Col 1</h2></div>
      {split >= 2 && (
        <div className="flex-1 h-[50vh] bg-blue-500 rounded-lg"><h2>Col 2</h2></div>
      )}
      {split === 3 && (
        <div className="flex-1 h-[50vh] bg-green-500 rounded-lg"><h2>Col 3</h2></div>
      )}
    </div>
  )
}

export default SectionEditor 