[20/04/2025 20:00] Se crea estructura basica con una pagina home y 3 paginas para la app: design, interact y read.

[20/04/2025 20:10] Se instala shadcn para usar sus componentes

# Log de Implementación de Apollo Client

## 2024-03-19: Integración de Apollo Client con Next.js App Router

### Problemas Iniciales
- Error con useContext en el entorno de React
- Problemas de compatibilidad entre Next.js y Apollo Client

### Soluciones Implementadas
1. Instalación de dependencias:
   - @apollo/experimental-nextjs-app-support
   - @apollo/client
   - @apollo/server
   - @as-integrations/next

2. Configuración del Apollo Provider:
   - Creación de src/lib/apollo-provider.tsx
   - Implementación usando NextSSRApolloClient y NextSSRInMemoryCache
   - Marcado del componente como 'use client' para compatibilidad con Next.js App Router

3. Cambios en la configuración:
   - Actualización de las versiones de React y Next.js para mejor compatibilidad
   - Implementación de la solución experimental de Apollo para Next.js App Router

### Estructura Final
```typescript
'use client'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { NextSSRApolloClient, NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';

const client = new NextSSRApolloClient({
  cache: new NextSSRInMemoryCache(),
  uri: '/api/graphql',
});

export function ApolloWrapper({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
```

### Notas Importantes
- La implementación usa la versión experimental de Apollo para Next.js App Router
- Se requiere la directiva 'use client' para componentes que usan Apollo Client
- La configuración está optimizada para SSR (Server Side Rendering)