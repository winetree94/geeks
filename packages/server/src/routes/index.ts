import Router from 'koa-router';
import { apiRouter } from './api';

export const rootRouter = new Router();

rootRouter.use('/api', apiRouter.routes());
