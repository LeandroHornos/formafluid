import mongoose, { Schema, Document } from 'mongoose';
import { FluidForm, FormSection, FormColumn, FormField } from '../apptypes';

const FormFieldSchema = new Schema<FormField>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  order: { type: Number, required: true },
  type: { type: String, required: true },
  propvalues: { type: Schema.Types.Mixed, default: {} }
});

const FormColumnSchema = new Schema<FormColumn>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  order: { type: Number, required: true },
  fields: { type: [FormFieldSchema], default: [] }
});

const FormSectionSchema = new Schema<FormSection>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  order: { type: Number, required: true },
  columns: { type: [FormColumnSchema], default: [] }
});

const FluidFormSchema = new Schema<FluidForm & Document>({
  id: { type: String, required: true },
  projectId: { type: String, required: true },
  createdBy: { type: String, required: true },
  name: { type: String, required: true },
  sections: { type: [FormSectionSchema], default: [] }
}, {
  timestamps: true
});

// Índices para mejorar el rendimiento de las consultas
FluidFormSchema.index({ projectId: 1 });
FluidFormSchema.index({ createdBy: 1 });

export default mongoose.models.FluidForm || mongoose.model<FluidForm & Document>('FluidForm', FluidFormSchema); 