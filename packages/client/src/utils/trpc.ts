// import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@geeks/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
 
export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8080',
    }),
  ],
});
