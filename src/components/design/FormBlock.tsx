import React from "react";

interface FormBlockEditorProps {
  children?: React.ReactNode;
  backgroundColor?: string;
}

const FormBlockEditor: React.FC<FormBlockEditorProps> = ({ children, backgroundColor = "bg-white" }) => {
  return (
    <div className={`flex-1 h-[50vh] ${backgroundColor} rounded-lg flex items-center justify-center`}>
      {children}
    </div>
  );
};

export default FormBlockEditor; 