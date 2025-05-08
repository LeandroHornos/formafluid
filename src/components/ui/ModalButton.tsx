"use client";

import { useState, ReactNode } from "react";
import { Button } from "./button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalButtonProps {
  children: ReactNode;
}

export function ModalButton({ children }: ModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="icon"
        className="rounded-full"
      >
        <Plus className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative min-w-[500px] min-h-[500px]">
            {children}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 