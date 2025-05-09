import React from "react";
import { Input } from "@/components/ui/input";

interface TextInputConfig {
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  config: TextInputConfig;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  config: { placeholder, label, required = false, disabled = false, className },
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={className}
      />
    </div>
  );
};

export default TextInput;
