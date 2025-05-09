import React from "react";
import MiniWizardSlider from "@/components/miniwizards/MiniWizardSlider";
import TextInputEditor from "@/components/form/text-input/TextInputEditor";
import SampleTitleAndText from "@/components/sample/SampleTitleAndText";

const TextInputMiniWizard = () => {
  return (
    <MiniWizardSlider>
      <TextInputEditor onSubmit={() => {}} />
    </MiniWizardSlider>
  );
};

export default TextInputMiniWizard;
