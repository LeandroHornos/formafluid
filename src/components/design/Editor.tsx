"use client";

import { useState } from "react";
import { FormSection } from "@/apptypes";
import SectionEditor from "@/components/design/SectionEditor";


const sampleSections: FormSection[] = [
  {
    id: "lumkuyytnhghghhgfeiuiusgfiubfffwef",
    name: "Section 1",
    order: 1,
    split: 1,
    columns: [],
  },
  {
    id: "lubvsfweriolbuhgfeiuiusgfiubsweiugb",
    name: "Section 2",
    order: 2,
    split: 2,
    columns: [],
  },
  {
    id: "lubvsfweriolbuheehtrjhhrhrhrhrhdshj",
    name: "Section 3",
    order: 3,
    split: 3,
    columns: [],
  },
];

export default function Editor() {
  const [sections, setSections] = useState<FormSection[]>(sampleSections);

  const handleAddSection = (section: FormSection) => {
    setSections([...sections, section]);
  };


  return (
    <div className="p-4 bg-green-100">
      <div className="w-full">
        {sections.map((section) => (
          <SectionEditor key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
