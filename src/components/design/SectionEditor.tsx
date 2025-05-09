"use client";

import React from "react";
import { FormSection } from "@/apptypes";
import { ModalButton } from "@/components/ui/ModalButton";
import MiniWizardSwitch from "@/components/miniwizards/MiniWizardSwitch";
import TextInputMiniWizard from "@/components/form/text-input/TextInputMiniWizard";
import { TextFields, CheckBox, RadioButtonChecked } from "@mui/icons-material";
import FormBlockEditor from "./FormBlock";

interface SectionEditorProps {
  section: FormSection;
  handleDeleteSection: (sectionId: string) => void;
}

const miniwizards = [
  {
    id: "text-input",
    icon: TextFields,
    component: TextInputMiniWizard,
  },
  {
    id: "checkbox",
    icon: CheckBox,
    component: () => <div>Checkbox Wizard (Coming soon)</div>,
  },
  {
    id: "radio",
    icon: RadioButtonChecked,
    component: () => <div>Radio Wizard (Coming soon)</div>,
  },
];

// Define an array of form blocks with background color and order
// Up to 3 form blocks are allowed for each section
const formBlocks = [
  { backgroundColor: "bg-blue-500", order: 1 },
  { backgroundColor: "bg-red-500", order: 2 },
  { backgroundColor: "bg-green-500", order: 3 },
];

// SectionEditor component to manage form sections
const SectionEditor: React.FC<SectionEditorProps> = ({
  section,
  handleDeleteSection,
}) => {
  const { split, id } = section;
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-4 relative">
      {/* Button to delete the section */}
      <button
        onClick={() => handleDeleteSection(id)}
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-colors duration-200"
      >
        ×
      </button>
      {/* Render form blocks based on the split value */}
      {formBlocks.slice(0, split).map(({ backgroundColor, order }) => (
        <FormBlockEditor key={`form-block-${order}`} backgroundColor={backgroundColor}>
          <ModalButton>
            <MiniWizardSwitch miniwizards={miniwizards} />
          </ModalButton>
        </FormBlockEditor>
      ))}
    </div>
  );
};

export default SectionEditor;
