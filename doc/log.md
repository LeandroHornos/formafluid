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

# Log de Implementación de MiniWizardSlider

## 2024-03-19: Creación del Sistema de Sliders Interactivos

### Componentes Creados
1. MiniWizardSlider:
   - Slider interactivo para mostrar contenido en múltiples vistas
   - Navegación entre vistas con botones y transiciones suaves
   - Soporte para indicadores de posición
   - Prop opcional para mostrar/ocultar botones de navegación
   - Pasa funciones de navegación a los componentes hijos

2. SampleTitleAndText:
   - Componente de ejemplo que implementa la interfaz del MiniWizard
   - Muestra título y texto con botones de navegación
   - Diseño responsive y estilizado con Tailwind

### Características Implementadas
- Transiciones suaves entre vistas
- Controles de navegación personalizables
- Indicadores de posición para cada vista
- Sistema de props para comunicación entre componentes
- Integración con shadcn/ui para estilos consistentes
- Soporte para componentes hijos con navegación propia

### Uso del Componente
```tsx
<MiniWizardSlider showNavigationButtons={true}>
  <TextInputEditor onSubmit={() => {}} />
  <SampleTitleAndText title="Slider 2" text="Texto 2" />
  <SampleTitleAndText title="Slider 3" text="Texto 3" />
</MiniWizardSlider>
```

### Notas Importantes
- Los componentes hijos deben implementar la interfaz MiniWizardChildProps
- Las funciones de navegación (goToNext, goToPrevious) son opcionales
- El componente se integra con ModalButton para mostrar contenido en modales
- Diseño responsive y adaptable a diferentes tamaños de contenido

# Log de Implementación de MiniWizardSwitch

## 2024-03-19: Creación del Sistema de Selección de MiniWizards

### Componentes Creados
1. MiniWizardSwitch:
   - Selector de miniwizards con interfaz de botones
   - Vista de grilla con 3 columnas para los botones
   - Transición suave entre la vista de selección y el wizard
   - Botón de retroceso con fondo semi-transparente
   - Diseño responsive y estilizado con Tailwind

### Características Implementadas
- Grid de 3 columnas con botones centrados
- Iconos de Material UI para cada tipo de wizard
- Botones cuadrados con sombras y bordes redondeados
- Transiciones suaves para las interacciones
- Sistema de navegación intuitivo con botón de retroceso
- Integración con ModalButton para mostrar contenido en modales

### Uso del Componente
```tsx
const miniwizards = [
  {
    id: "text-input",
    icon: TextFields,
    component: TextInputMiniWizard
  },
  {
    id: "checkbox",
    icon: CheckBox,
    component: () => <div>Checkbox Wizard (Coming soon)</div>
  },
  {
    id: "radio",
    icon: RadioButtonChecked,
    component: () => <div>Radio Wizard (Coming soon)</div>
  }
];

<MiniWizardSwitch miniwizards={miniwizards} />
```

### Notas Importantes
- Los componentes de wizard deben ser compatibles con el sistema de navegación
- Se mantiene la consistencia visual con el resto de la aplicación
- El diseño es escalable para agregar más tipos de wizards
- La interfaz es intuitiva y fácil de usar

# Log de Cambios en TextInput y TextInputEditor

## 2025-04-20: Refactorización de TextInput y TextInputEditor

### Cambios Realizados
- **TextInput**: Se modificó para que reciba una única prop `config` que agrupa las configuraciones opcionales (`placeholder`, `label`, `required`, `disabled`, `className`). Las propiedades `value` y `onChange` se reciben directamente, fuera del objeto `config`.
- **TextInputEditor**: Se actualizó para que solo maneje las configuraciones que van dentro de `config`, excluyendo `value` y `onChange`, que ahora son manejadas por el componente padre.

### Razones para el Cambio
- Simplificar la interfaz del componente `TextInput` al agrupar configuraciones opcionales en un solo objeto.
- Mejorar la claridad y separación de responsabilidades entre el editor y el componente de entrada.

### Notas Importantes
- Asegurarse de que los componentes padres manejen `value` y `onChange` adecuadamente.
- Verificar que las configuraciones pasadas a `TextInputEditor` sean correctas y completas.