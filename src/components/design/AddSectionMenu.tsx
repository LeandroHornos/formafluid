import React, { useState } from "react";
import { FormSection } from "@/apptypes";

interface AddSectionProps {
  handleAddSection: (section: FormSection) => void;
  sections: FormSection[];
}

const AddSectionMenu = ({ handleAddSection, sections }: AddSectionProps) => {
  const [split, setSplit] = useState<number>(1);
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
        onClick={() =>
          handleAddSection({
            id: "new-section",
            name: "New Section",
            order: sections.length + 1,
            split: split,
          })
        }
      >
        Add Section
      </button>
      <div className="flex items-center gap-2">
        <label htmlFor="split" className="text-sm font-medium text-gray-700">Split</label>
        <select
          id="split"
          value={split}
          onChange={(e) => setSplit(parseInt(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
};

export default AddSectionMenu;
