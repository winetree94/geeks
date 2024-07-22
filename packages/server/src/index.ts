// import Koa from 'koa';
// import bodyParser from 'koa-bodyparser';
// import logger from 'koa-logger';
// import { rootRouter } from './routes';

// const app = new Koa();

// app.use(logger());
// app.use(bodyParser());
// app.use(rootRouter.routes()).use(rootRouter.allowedMethods());

// // response
// app.use((ctx) => {
//   ctx.body = 'Hello Koa';
// });

// app.listen(8080);
import { z } from 'zod';
import { prisma } from './prisma';
import cors from 'cors';
import { publicProcedure, router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
  userList: publicProcedure.query(async () => {
    const users = await prisma.user.findMany();
    return users;
  }),
  userCreate: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await prisma.user.create({
        data: {
          email: input.name,
          userName: input.name,
        },
      });
      return user;
    }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(8080);
