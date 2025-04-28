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