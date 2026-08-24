import { Router } from 'express';
import type { Model } from 'mongoose';

export function createResourceRouter(model: Model<any>, sort?: Record<string, 1 | -1>): Router {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      response.json(await model.find().sort(sort ?? { createdAt: -1 }).lean());
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (request, response, next) => {
    try {
      const item = await model.create(request.body);
      response.status(201).json(item);
    } catch (error) {
      next(error);
    }
  });

  return router;
}