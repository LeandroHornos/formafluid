# Guía para Modificar el Schema de FluidForm

Este documento describe los pasos necesarios para modificar el schema de FluidForm, usando como ejemplo la adición de un campo `status`.

## 1. Modificar el Schema GraphQL
En `src/graphql/schemas/fluidForm.ts`:
- Agregar el nuevo campo al tipo `FluidForm`
- Agregar el campo a las mutaciones relevantes (en este caso `createFluidForm`)

```graphql
type FluidForm {
  # ... campos existentes ...
  status: String!
  # ... otros campos ...
}

type Mutation {
  createFluidForm(
    # ... campos existentes ...
    status: String
    # ... otros campos ...
  ): FluidForm
}
```

## 2. Modificar el Modelo de Mongoose
En `src/models/FluidForm.ts`:
- Agregar el nuevo campo al schema con sus propiedades
- Definir validaciones, valores por defecto y restricciones

```typescript
const FluidFormSchema = new Schema({
  // ... campos existentes ...
  status: { 
    type: String, 
    required: true, 
    enum: ['new', 'draft', 'closed'],
    default: 'new'
  },
  // ... otros campos ...
});
```

## 3. Actualizar los Resolvers
En `src/graphql/resolvers/fluidForm.ts`:
- Modificar las funciones de resolución para manejar el nuevo campo
- Actualizar los parámetros de las funciones
- Asegurar que el valor por defecto se maneje correctamente

```typescript
createFluidForm: async (_, { projectId, createdBy, name, status, sections }) => {
  // ... código existente ...
  const form = new FluidForm({
    // ... campos existentes ...
    status: status || 'new',
    // ... otros campos ...
  });
  // ... resto del código ...
}
```

## 4. Actualizar los Tipos TypeScript
En `src/apptypes.ts`:
- Agregar el nuevo campo a la interfaz correspondiente
- Asegurar que los tipos coincidan con las definiciones del schema

```typescript
interface FluidForm {
  // ... campos existentes ...
  status: 'new' | 'draft' | 'closed';
  // ... otros campos ...
}
```

## Notas Importantes
- Asegúrate de mantener la consistencia entre todos los archivos
- Verifica que los tipos coincidan en todas las definiciones
- Considera el impacto en las consultas y mutaciones existentes
- Actualiza la documentación si es necesario
- Prueba los cambios para asegurar que todo funcione correctamente 