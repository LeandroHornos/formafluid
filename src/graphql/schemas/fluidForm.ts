import { gql } from '@apollo/client';

export const typeDefs = gql`
  type FormField {
    id: String!
    name: String!
    order: Int!
    type: String!
    propvalues: JSON
  }

  type FormBlock {
    id: String!
    name: String!
    order: Int!
    fields: [FormField]
  }

  type FormSection {
    id: String!
    name: String!
    order: Int!
    split: Int!
    columns: [FormBlock]
  }

  type FluidForm {
    id: String!
    projectId: String!
    createdBy: String!
    name: String!
    status: String!
    sections: [FormSection]
    createdAt: String
    updatedAt: String
  }

  type Query {
    fluidForms: [FluidForm]
    fluidForm(id: String!): FluidForm
    fluidFormsByProject(projectId: String!): [FluidForm]
  }

  type Mutation {
    createFluidForm(
      projectId: String!
      createdBy: String!
      name: String!
      status: String
      sections: [FormSectionInput]
    ): FluidForm
    
    updateFluidForm(
      id: String!
      name: String
      sections: [FormSectionInput]
    ): FluidForm
    
    deleteFluidForm(id: String!): Boolean
  }

  input FormFieldInput {
    id: String!
    name: String!
    order: Int!
    type: String!
    propvalues: JSON
  }

  input FormBlockInput {
    id: String!
    name: String!
    order: Int!
    fields: [FormFieldInput]
  }

  input FormSectionInput {
    id: String!
    name: String!
    order: Int!
    split: Int!
    columns: [FormBlockInput]
  }

  scalar JSON
`; 