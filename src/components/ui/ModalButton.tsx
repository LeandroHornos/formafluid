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
          <div className="bg-white w-[500px] h-[500px] rounded-lg p-6 relative">
            {children}
            <Button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-6 right-6"
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 