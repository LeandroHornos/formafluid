"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowBack } from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';

interface MiniWizard {
  id: string;
  icon: SvgIconComponent;
  component: React.ComponentType;
}

interface MiniWizardSwitchProps {
  miniwizards: MiniWizard[];
  className?: string;
}

const MiniWizardSwitch: React.FC<MiniWizardSwitchProps> = ({ miniwizards, className }) => {
  const [selectedWizard, setSelectedWizard] = useState<string | null>(null);

  const handleWizardSelect = (wizardId: string) => {
    setSelectedWizard(wizardId);
  };

  const handleBack = () => {
    setSelectedWizard(null);
  };

  const selectedWizardData = selectedWizard 
    ? miniwizards.find(wizard => wizard.id === selectedWizard)
    : null;

  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      {selectedWizard ? (
        <div className="flex-1 relative">
          <div className="absolute top-4 left-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="bg-white/80 hover:bg-white"
            >
              <ArrowBack />
            </Button>
          </div>
          <div className="w-full h-full pt-16">
            {selectedWizardData && <selectedWizardData.component />}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 p-6 place-items-center">
          {miniwizards.map((wizard) => (
            <Button
              key={wizard.id}
              variant="outline"
              className="aspect-square flex items-center justify-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              onClick={() => handleWizardSelect(wizard.id)}
            >
              <wizard.icon className="w-12 h-12" />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MiniWizardSwitch; 