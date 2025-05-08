import React from "react";
import { Button } from "@/components/ui/button";

interface SampleTitleAndTextProps {
  title: string;
  text: string;
  goToNext?: () => void;
  goToPrevious?: () => void;
}

const SampleTitleAndText: React.FC<SampleTitleAndTextProps> = ({
  title,
  text,
  goToNext,
  goToPrevious,
}) => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg text-muted-foreground">{text}</p>
      </div>

      <div className="flex gap-2 mt-4">
        {goToPrevious && (
          <Button type="button" variant="outline" onClick={goToPrevious}>
            Anterior
          </Button>
        )}
        {goToNext && (
          <Button type="button" variant="outline" onClick={goToNext}>
            Siguiente
          </Button>
        )}
      </div>
    </div>
  );
};

export default SampleTitleAndText; 