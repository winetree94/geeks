import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@geeks/server/src/index';
 
export const trpc = createTRPCReact<AppRouter>();
