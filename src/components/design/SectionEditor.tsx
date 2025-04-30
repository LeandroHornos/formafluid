"use client";

import React from "react";
import { FormSection } from "@/apptypes";
import { ModalButton } from "@/components/ui/ModalButton";

interface SectionEditorProps {
  section: FormSection;
  handleDeleteSection: (sectionId: string) => void;
}

const SectionEditor: React.FC<SectionEditorProps> = ({ section, handleDeleteSection }) => {
  const { split, id } = section;
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-4 relative">
      <button
        onClick={() => handleDeleteSection(id)}
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-colors duration-200"
      >
        ×
      </button>
      <div className="flex-1 h-[50vh] bg-red-500 rounded-lg flex items-center justify-center">
        <ModalButton/>
      </div>
      {split >= 2 && (
        <div className="flex-1 h-[50vh] bg-blue-500 rounded-lg flex items-center justify-center">
          <ModalButton/>
        </div>
      )}
      {split === 3 && (
        <div className="flex-1 h-[50vh] bg-green-500 rounded-lg flex items-center justify-center">
          <ModalButton/>
        </div>
      )}
    </div>
  );
};

export default SectionEditor;
