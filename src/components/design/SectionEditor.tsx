"use client";

import React from "react";
import { FormSection } from "@/apptypes";
import { ModalButton } from "@/components/ui/ModalButton";

interface SectionEditorProps {
  section: FormSection;
}

const SectionEditor: React.FC<SectionEditorProps> = ({ section }) => {
  const { split } = section;
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-4">
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
