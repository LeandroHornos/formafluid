import React from "react";
import MiniWizardSlider from "@/components/miniwizards/MiniWizardSlider";
import TextInputEditor from "@/components/form/TextInputEditor";
import SampleTitleAndText from "@/components/sample/SampleTitleAndText";

const TextInputMiniWizard = () => {
  return (
    <MiniWizardSlider>
      <TextInputEditor onSubmit={() => {}} />
      <SampleTitleAndText title="Slider 2" text="Texto 2" />
      <SampleTitleAndText title="Slider 3" text="Texto 3" />
    </MiniWizardSlider>
  );
};

export default TextInputMiniWizard;
