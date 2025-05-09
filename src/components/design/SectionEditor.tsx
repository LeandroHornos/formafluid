"use client";

import React from "react";
import { FormSection } from "@/apptypes";
import { ModalButton } from "@/components/ui/ModalButton";
import MiniWizardSwitch from "@/components/miniwizards/MiniWizardSwitch";
import TextInputMiniWizard from "@/components/form/text-input/TextInputMiniWizard";
import { TextFields, CheckBox, RadioButtonChecked } from '@mui/icons-material';

interface SectionEditorProps {
  section: FormSection;
  handleDeleteSection: (sectionId: string) => void;
}

const miniwizards = [
  {
    id: "text-input",
    icon: TextFields,
    component: TextInputMiniWizard
  },
  {
    id: "checkbox",
    icon: CheckBox,
    component: () => <div>Checkbox Wizard (Coming soon)</div>
  },
  {
    id: "radio",
    icon: RadioButtonChecked,
    component: () => <div>Radio Wizard (Coming soon)</div>
  }
];

const SectionEditor: React.FC<SectionEditorProps> = ({
  section,
  handleDeleteSection,
}) => {
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
        <ModalButton>
          <MiniWizardSwitch miniwizards={miniwizards} />
        </ModalButton>
      </div>
      {split >= 2 && (
        <div className="flex-1 h-[50vh] bg-blue-500 rounded-lg flex items-center justify-center">
          <ModalButton>
            <p className="text-lg">Esto es el segundo popup</p>
          </ModalButton>
        </div>
      )}
      {split === 3 && (
        <div className="flex-1 h-[50vh] bg-green-500 rounded-lg flex items-center justify-center">
          <ModalButton>
            <p className="text-lg">Esto es el tercer popup</p>
          </ModalButton>
        </div>
      )}
    </div>
  );
};

export default SectionEditor;
