// Interface representing a project with metadata and a list of associated forms
export interface Project {
    id: string;
    name: string;
    createdBy: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    documents?: FluidForm[];
}

// Interface defining a fluid form with creator info and sections
export interface FluidForm {
    id: string;
    projectId: string;
    createdBy: string;
    name: string;
    sections?: FormSection[];
    status: 'new' | 'draft' | 'closed';
}

// Interface defining a form section with order and columns
export interface FormSection {
    id: string;
    name: string;
    order: number;
    split: number;
    columns?: FormBlock[];
}

// Interface defining a column within a section containing fields
export interface FormBlock {
    id: string;
    name: string;
    order: number;
    fields?: FormField[];
}

// Interface defining a form field with order, type, and property values
export interface FormField {
    id: string;
    name: string;
    order: number;
    type: string;
    config: { [key: string]: any };
}

