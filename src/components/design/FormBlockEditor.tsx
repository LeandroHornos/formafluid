import React from "react";
import { ModalButton } from "../ui/ModalButton";
import MiniWizardSwitch from "../miniwizards/MiniWizardSwitch";
import TextInputMiniWizard from "../form/text-input/TextInputMiniWizard";
import { TextFields, CheckBox, RadioButtonChecked } from "@mui/icons-material";
interface FormBlockEditorProps {
  backgroundColor?: string;
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

const FormBlockEditor: React.FC<FormBlockEditorProps> = ({
  backgroundColor = "bg-white",
}) => {
  return (
    <div
      className={`flex-1 h-[50vh] ${backgroundColor} rounded-lg flex items-center justify-center`}
    >
      <ModalButton>
        <MiniWizardSwitch miniwizards={miniwizards} />
      </ModalButton>
    </div>
  );
};

export default FormBlockEditor;
