import React, { useState, ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MiniWizardChildProps {
  goToNext: () => void;
  goToPrevious: () => void;
}

interface MiniWizardSliderProps {
  children: React.ReactElement<MiniWizardChildProps>[];
  className?: string;
  showNavigationButtons?: boolean;
}

export const MiniWizardSlider: React.FC<MiniWizardSliderProps> = ({ 
  children, 
  className,
  showNavigationButtons = true 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % React.Children.count(children));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? React.Children.count(children) - 1 : prev - 1
    );
  };

  // Clonar los children y pasar la función goToNext como prop
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        goToNext,
        goToPrevious,
      });
    }
    return child;
  });

  return (
    <div className={cn("relative w-full h-full flex flex-col", className)}>
      <div className="flex-1 relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {React.Children.map(childrenWithProps, (child) => (
            <div className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showNavigationButtons && (
        <div className="flex justify-center items-center gap-2 py-4">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex gap-1">
            {React.Children.map(children, (_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentIndex === index ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}; 