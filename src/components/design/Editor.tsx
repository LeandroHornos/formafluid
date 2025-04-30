"use client";

import { useState } from "react";
import { FormSection } from "@/apptypes";
import SectionEditor from "@/components/design/SectionEditor";
import AddSectionMenu from "@/components/design/AddSectionMenu";


export default function Editor() {
  const [sections, setSections] = useState<FormSection[]>([]);

  const handleAddSection = (section: FormSection) => {
    setSections([...sections, section]);
  };

  const handleDeleteSection = (sectionId: string) => {
    setSections(sections.filter(section => section.id !== sectionId));
  };

  return (
    <div className="p-4 bg-green-100">
      <div className="w-full">
        {sections.map((section) => (
          <SectionEditor 
            key={section.id} 
            section={section} 
            handleDeleteSection={handleDeleteSection}
          />
        ))}
      </div>
      {/* Add a button to add a new section */}
      <AddSectionMenu handleAddSection={handleAddSection} sections={sections} />
    </div>
  );
}
