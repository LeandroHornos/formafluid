import { GraphQLScalarType } from 'graphql';
import FluidForm from '@/models/FluidForm';
import connectDB from '@/lib/mongodb';

const JSONScalar = new GraphQLScalarType({
  name: 'JSON',
  description: 'JSON custom scalar type',
  serialize(value) {
    return value;
  },
  parseValue(value) {
    return value;
  },
  parseLiteral(ast) {
    return ast;
  },
});

export const resolvers = {
  JSON: JSONScalar,
  
  Query: {
    fluidForms: async () => {
      await connectDB();
      return await FluidForm.find({});
    },
    
    fluidForm: async (_: any, { id }: { id: string }) => {
      await connectDB();
      return await FluidForm.findOne({ id });
    },
    
    fluidFormsByProject: async (_: any, { projectId }: { projectId: string }) => {
      await connectDB();
      return await FluidForm.find({ projectId });
    },
  },
  
  Mutation: {
    createFluidForm: async (_: any, { projectId, createdBy, name, status, sections }: any) => {
      await connectDB();
      const form = new FluidForm({
        id: Math.random().toString(36).substr(2, 9),
        projectId,
        createdBy,
        name,
        status: status || 'new',
        sections: sections || [],
      });
      return await form.save();
    },
    
    updateFluidForm: async (_: any, { id, name, sections }: any) => {
      await connectDB();
      const update: any = {};
      if (name) update.name = name;
      if (sections) update.sections = sections;
      
      return await FluidForm.findOneAndUpdate(
        { id },
        { $set: update },
        { new: true }
      );
    },
    
    deleteFluidForm: async (_: any, { id }: { id: string }) => {
      await connectDB();
      const result = await FluidForm.deleteOne({ id });
      return result.deletedCount === 1;
    },
  },
}; 