// 'use client';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { httpBatchLink } from '@trpc/client';
// import React, { useState } from 'react';
// import { trpc } from '@/utils/trpc';

export function Providers({
  children
}: {
  children: React.ReactNode;
}) {
  // const [queryClient] = useState(() => new QueryClient());
  // const [trpcClient] = useState(() =>
  //   trpc.createClient({
  //     links: [
  //       httpBatchLink({
  //         url: 'http://localhost:8080',
  //         // You can pass any HTTP headers you wish here
  //         async headers() {
  //           return {
  //             // authorization: getAuthCookie(),
  //           };
  //         },
  //       }),
  //     ],
  //   }),
  // );
  return (
    // <trpc.Provider client={trpcClient} queryClient={queryClient}>
    //   <QueryClientProvider client={queryClient}>
        <>{children}</>
    //   </QueryClientProvider>
    // </trpc.Provider>
  );
}
