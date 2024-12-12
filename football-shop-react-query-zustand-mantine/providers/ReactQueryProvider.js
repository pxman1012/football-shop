'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Tạo một instance của QueryClient
const queryClient = new QueryClient();

export function ReactQueryProvider({ children }) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
