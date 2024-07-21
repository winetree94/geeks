import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import { rootRouter } from './routes';

const app = new Koa();

app.use(logger());
app.use(bodyParser());
app.use(rootRouter.routes()).use(rootRouter.allowedMethods());

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(8080);
