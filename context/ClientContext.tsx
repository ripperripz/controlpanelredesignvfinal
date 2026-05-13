'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Client = {
  id: string;
  name: string;
  role: string;
};

const clients: Client[] = [
  { id: '1', name: 'Catherine Studio', role: 'Owner' },
  { id: '2', name: 'Aether Group', role: 'Maintainer' },
  { id: '3', name: 'Lucid Labs', role: 'Contributor' },
  { id: '4', name: 'Hyperion Dev', role: 'Admin' },
];

interface ClientContextType {
  currentClient: Client;
  clients: Client[];
  setClient: (id: string) => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children }: { children: ReactNode }) {
  const [currentClient, setCurrentClient] = useState<Client>(clients[0]);

  const setClient = (id: string) => {
    const selected = clients.find(c => c.id === id);
    if (selected) setCurrentClient(selected);
  };

  return (
    <ClientContext.Provider value={{ currentClient, clients, setClient }}>
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  const context = useContext(ClientContext);
  if (!context) throw new Error('useClient must be used within a ClientProvider');
  return context;
}
