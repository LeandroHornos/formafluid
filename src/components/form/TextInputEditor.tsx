import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface TextInputEditorProps {
  onSubmit: (values: {
    value: string;
    placeholder: string;
    label: string;
    required: boolean;
    disabled: boolean;
  }) => void;
  goToNext?: () => void;
  goToPrevious?: () => void;
}

const TextInputEditor: React.FC<TextInputEditorProps> = ({ onSubmit, goToNext, goToPrevious }) => {
  const [values, setValues] = useState({
    value: "",
    placeholder: "",
    label: "",
    required: false,
    disabled: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-semibold mb-2">Text Input Settings</h2>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Value</label>
        <input
          type="text"
          value={values.value}
          onChange={(e) => handleChange("value", e.target.value)}
          className="px-3 py-2 border rounded-md"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Placeholder</label>
        <input
          type="text"
          value={values.placeholder}
          onChange={(e) => handleChange("placeholder", e.target.value)}
          className="px-3 py-2 border rounded-md"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Label</label>
        <input
          type="text"
          value={values.label}
          onChange={(e) => handleChange("label", e.target.value)}
          className="px-3 py-2 border rounded-md"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={values.required}
          onChange={(e) => handleChange("required", e.target.checked)}
          id="required"
        />
        <label htmlFor="required" className="text-sm font-medium">Required</label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={values.disabled}
          onChange={(e) => handleChange("disabled", e.target.checked)}
          id="disabled"
        />
        <label htmlFor="disabled" className="text-sm font-medium">Disabled</label>
      </div>

      <div className="flex gap-2 mt-4">
        {goToPrevious && (
          <Button type="button" variant="outline" onClick={goToPrevious}>
            Anterior
          </Button>
        )}
        <Button type="submit" className="flex-1">
          Guardar
        </Button>
        {goToNext && (
          <Button type="button" variant="outline" onClick={goToNext}>
            Siguiente
          </Button>
        )}
      </div>
    </form>
  );
};

export default TextInputEditor; 