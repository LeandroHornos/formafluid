import React from "react";

interface TextInputMockProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputMock: React.FC<TextInputMockProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        disabled
      />
    </div>
  );
};

export default TextInputMock;